/** Engines checked on official tables and on hand-computed cases (RECETTE §17.4). */
import { describe, it, expect } from 'vitest';
import P from '../src/data/params-2026.json';
import SC from '../src/data/scorecard.json';
import { actToSat, satToAct, type ActToSat, type SatToAct } from '../src/lib/engine/concord';
import { phi, position, label, oneIn, type OddsRule } from '../src/lib/engine/odds';
import { bandIndex, netPrice, paidShare, type Band } from '../src/lib/engine/netprice';
import { satCurve, satBelow, type SatNational } from '../src/lib/engine/satpct';

const A2S = P.concordance.actToSat as unknown as ActToSat;
const S2A = P.concordance.satToAct as unknown as SatToAct;
const R = P.odds as unknown as OddsRule;
const B = P.incomeBands as Band[];

describe('concordance (2018 ACT/SAT tables, ACT and College Board)', () => {
  it('Table A2: ACT to SAT, every published row', () => {
    expect(A2S).toHaveLength(28);
    expect(actToSat(36, A2S)).toEqual({ point: 1590, low: 1570, high: 1600 });
    expect(actToSat(27, A2S)).toEqual({ point: 1280, low: 1260, high: 1290 });
    expect(actToSat(21, A2S)).toEqual({ point: 1080, low: 1060, high: 1090 });
    expect(actToSat(9, A2S)).toEqual({ point: 590, low: 590, high: 610 });
    expect(actToSat(8, A2S)).toBeNull();
  });
  it('Table A1: SAT to ACT', () => {
    expect(S2A).toHaveLength(102);
    expect(satToAct(1600, S2A)).toBe(36);
    expect(satToAct(1560, S2A)).toBe(35);
    expect(satToAct(1210, S2A)).toBe(25);
    expect(satToAct(1204, S2A)).toBe(25);
    expect(satToAct(1000, S2A)).toBe(19);
    expect(satToAct(590, S2A)).toBe(9);
    expect(satToAct(580, S2A)).toBeNull();
  });
  it('round trip stays inside the published range', () => {
    for (const [act, , lo, hi] of A2S) { const s = actToSat(act, A2S)!.point; expect(s).toBeGreaterThanOrEqual(lo); expect(s).toBeLessThanOrEqual(hi); expect(satToAct(s, S2A)).toBe(act); }
  });
});

describe('odds', () => {
  it('normal CDF', () => { expect(phi(0)).toBeCloseTo(0.5, 6); expect(phi(1.96)).toBeCloseTo(0.975, 3); expect(phi(-1)).toBeCloseTo(0.1587, 3); });
  it('position: 25th and 75th percentiles map to 25% and 75%', () => {
    expect(position(1200, 1200, 1400)).toBeCloseTo(0.25, 2);
    expect(position(1400, 1200, 1400)).toBeCloseTo(0.75, 2);
    expect(position(1300, 1200, 1400)).toBeCloseTo(0.5, 6);
    expect(position(1300, 1400, 1400)).toBeNull();
  });
  it('labels follow the published rule', () => {
    expect(label(0.04, 0.99, R)).toBe('reach');
    expect(label(0.3, 0.2, R)).toBe('reach');
    expect(label(0.3, 0.6, R)).toBe('target');
    expect(label(0.7, 0.6, R)).toBe('likely');
    expect(label(0.7, 0.4, R)).toBe('target');
    expect(label(0.7, null, R)).toBe('likely');
    expect(label(0.3, null, R)).toBe('target');
  });
  it('one in N', () => { expect(oneIn(2003 / 47893)).toBe(24); expect(oneIn(0.5)).toBe(2); });
});

describe('net price', () => {
  it('bands', () => { expect(bandIndex(0, B)).toBe(0); expect(bandIndex(30000, B)).toBe(0); expect(bandIndex(30001, B)).toBe(1); expect(bandIndex(75000, B)).toBe(2); expect(bandIndex(110001, B)).toBe(4); expect(bandIndex(5e6, B)).toBe(4); });
  it('Harvard 2023-24 (Scorecard): $8,697 under $30,000', () => {
    const h = (SC.schools as Array<{ slug: string; netByIncome: number[]; control: 'private' }>).find((s) => s.slug === 'harvard')!;
    expect(netPrice({ netByIncome: h.netByIncome, control: 'private', tuitionIn: null, tuitionOut: null }, 25000, B).shown).toBe(8697);
  });
  it('negative net price shown as 0 with the excess', () => {
    const r = netPrice({ netByIncome: [-2133, 0, 0, 0, 0], control: 'private', tuitionIn: null, tuitionOut: null }, 10000, B);
    expect(r.shown).toBe(0); expect(r.aidAboveCost).toBe(2133);
  });
  it('nonresident at a public university adds the tuition gap', () => {
    const r = netPrice({ netByIncome: [5000, 6000, 9000, 14000, 30000], control: 'public', tuitionIn: 14000, tuitionOut: 46000 }, 60000, B, false);
    expect(r.total).toBe(9000 + 32000);
    expect(netPrice({ netByIncome: [5000, 6000, 9000, 14000, 30000], control: 'private', tuitionIn: 14000, tuitionOut: 46000 }, 60000, B, false).total).toBe(9000);
  });
  it('paid share', () => { expect(paidShare(20000, 80000)).toBe(0.25); expect(paidShare(null, 1)).toBeNull(); });
});

describe('SAT national curve (class of 2026 report)', () => {
  const c = satCurve(P.sat as unknown as SatNational);
  it('passes through the published quartiles', () => { expect(satBelow(870, c)).toBeCloseTo(0.25, 6); expect(satBelow(1030, c)).toBeCloseTo(0.5, 6); expect(satBelow(1220, c)).toBeCloseTo(0.75, 6); });
  it('band shares: 8.6% scored 1400 or more', () => { expect(1 - satBelow(1400, c)).toBeCloseTo(167152 / 1954833, 6); });
  it('monotonic', () => { let prev = -1; for (let s = 400; s <= 1600; s += 10) { const v = satBelow(s, c); expect(v).toBeGreaterThanOrEqual(prev); prev = v; } });
});

describe('scorecard data', () => {
  it('110 schools with a net price by income', () => {
    expect(SC.schools).toHaveLength(110);
    for (const s of SC.schools as Array<{ slug: string; netByIncome: Array<number | null> }>) expect(s.netByIncome.filter((x) => x !== null).length, s.slug).toBeGreaterThanOrEqual(4);
  });
});
