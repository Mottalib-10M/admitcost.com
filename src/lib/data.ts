/**
 * Server-side access to the data (src/data/scorecard.json from scripts/build-data.py, and
 * src/data/latest/<slug>.json, the newest official figures read in each university's own documents,
 * copied from research/schools/ by scripts/build-latest.py). Calculators never import this file: they
 * receive the compact `CalcSchool` objects prepared here.
 */
import SC from '../data/scorecard.json';
import P from '../data/params-2026.json';
import type { Band } from './engine/netprice';

export { P };
export const SC_META = SC.meta;
export const BANDS = P.incomeBands as Band[];

export interface ScSchool {
  unitid: number; slug: string; short: string; name: string; city: string; state: string; control: 'public' | 'private';
  url: string; npcUrl: string; admRate: number | null; testPolicy2024: number | null;
  satEbrw: Array<number | null>; satMath: Array<number | null>; act: Array<number | null>; satAvg: number | null; undergrads: number | null;
  tuitionIn: number | null; tuitionOut: number | null; coa: number | null; roomBoard: number | null; books: number | null; other: number | null;
  netAvg: number | null; netByIncome: Array<number | null>; pell: number | null; grad6: number | null; retention: number | null; debt: number | null; earn10: number | null;
}
export interface Doc { doc?: string; url: string; accessed?: string }
export interface CostLine { tuition?: number | null; fees?: number | null; housingFood?: number | null; books?: number | null; personal?: number | null; travel?: number | null; total?: number | null; totalIncludes?: string }
export interface Latest {
  slug: string;
  cycle?: ({ label: string; applicants: number; admitted: number; enrolled?: number | null } & Doc) | null;
  cycleNewer?: ({ label: string; applicants: number; admitted: number; enrolled?: number | null } & Doc) | null;
  scores?: ({ satComposite?: Array<number | null> | null; satEbrw?: Array<number | null> | null; satMath?: Array<number | null> | null; act?: Array<number | null> | null; pctSat?: number | null; pctAct?: number | null } & Doc) | null;
  testPolicy?: ({ status: string; text: string; since?: string | null } & Doc) | null;
  gpa?: ({ average: number; pctSubmitting?: number | null } & Doc) | null;
  cost?: ({ year: string; inState?: CostLine | null; outOfState?: CostLine | null } & CostLine & Doc) | null;
  aidPromise?: ({ text: string; year?: string } & Doc) | null;
  plans?: ({ ed?: boolean; ed2?: boolean; ea?: boolean; rea?: boolean; deadlines?: Record<string, string> } & Partial<Doc>) | null;
  facts?: Array<{ text: string; url: string }>;
  notes?: string;
}

const latestMods = import.meta.glob<{ default: Latest }>('../data/latest/*.json', { eager: true });
const LATEST: Record<string, Latest> = Object.fromEntries(Object.values(latestMods).map((m) => [m.default.slug, m.default]));
export const SCHOOLS_SC: ScSchool[] = SC.schools as ScSchool[];

/** Test policy codes of IPEDS (ADMCON7) for fall 2024. */
const POLICY_2024: Record<number, string> = { 1: 'required', 2: 'recommended', 3: 'neither required nor recommended', 5: 'considered but not required' };

export interface School extends ScSchool {
  latest: Latest | null;
  /** Admit rate of the newest cycle we hold, with its label and source. */
  adm: { rate: number; applicants: number | null; admitted: number | null; label: string; source: string; url: string; newer: boolean } | null;
  /** SAT composite 25th-75th: newest CDS composite if published, else the sum of the Scorecard section percentiles (approximation). */
  sat: { p25: number; p75: number; p50: number | null; label: string; approx: boolean } | null;
  actR: { p25: number; p75: number; p50: number | null; label: string } | null;
  testStatus: 'required' | 'optional' | 'blind' | 'other' | 'unknown';
  testText: string;
  /** Newest published sticker price (total cost of attendance). Public: in-state and out-of-state. */
  sticker: { year: string; total: number | null; outTotal: number | null; source: string; url: string; newer: boolean } | null;
  policy2024: string | null;
}

function pickAdm(sc: ScSchool, L: Latest | null): School['adm'] {
  const c = L?.cycleNewer?.applicants && L.cycleNewer.admitted ? L.cycleNewer : L?.cycle?.applicants && L.cycle.admitted ? L.cycle : null;
  if (c) return { rate: c.admitted / c.applicants, applicants: c.applicants, admitted: c.admitted, label: c.label, source: c.doc ?? 'university document', url: c.url, newer: true };
  if (sc.admRate !== null) return { rate: sc.admRate, applicants: null, admitted: null, label: 'Fall 2024 entering class (Class of 2028)', source: 'College Scorecard (IPEDS), fall 2024', url: SC.meta.url, newer: false };
  return null;
}
const ok = (a?: Array<number | null> | null) => !!a && a.length >= 2 && typeof a[0] === 'number' && typeof a[a.length - 1] === 'number';
/** [p25, p50?, p75] with a possibly missing median. */
const tri = (v: Array<number | null>) => ({ p25: v[0] as number, p75: v[v.length - 1] as number, p50: v.length >= 3 && typeof v[1] === 'number' ? (v[1] as number) : null });
function pickSat(sc: ScSchool, L: Latest | null): School['sat'] {
  const s = L?.scores;
  if (s?.satComposite && ok(s.satComposite)) {
    return { ...tri(s.satComposite), label: `${(L!.cycle ?? L!.cycleNewer)?.label ?? 'latest cycle'}, ${s.doc ?? 'CDS'}`, approx: false };
  }
  if (s?.satEbrw && s?.satMath && ok(s.satEbrw) && ok(s.satMath)) {
    const e = tri(s.satEbrw), m = tri(s.satMath);
    return { p25: e.p25 + m.p25, p75: e.p75 + m.p75, p50: e.p50 !== null && m.p50 !== null ? e.p50 + m.p50 : null, label: `${(L!.cycle ?? L!.cycleNewer)?.label ?? 'latest cycle'}, sum of section percentiles (${s.doc ?? 'CDS'})`, approx: true };
  }
  if (ok(sc.satEbrw) && ok(sc.satMath)) return { p25: sc.satEbrw[0]! + sc.satMath[0]!, p75: sc.satEbrw[1]! + sc.satMath[1]!, p50: null, label: 'fall 2024, sum of section percentiles (College Scorecard)', approx: true };
  return null;
}
function pickAct(sc: ScSchool, L: Latest | null): School['actR'] {
  const a = L?.scores?.act;
  if (a && ok(a)) return { ...tri(a), label: `${(L!.cycle ?? L!.cycleNewer)?.label ?? 'latest cycle'} (${L!.scores!.doc ?? 'CDS'})` };
  if (ok(sc.act)) return { p25: sc.act[0]!, p75: sc.act[1]!, p50: null, label: 'fall 2024 (College Scorecard)' };
  return null;
}
function testOf(sc: ScSchool, L: Latest | null): [School['testStatus'], string] {
  const t = L?.testPolicy;
  if (t?.status) {
    const s = t.status.toLowerCase();
    const st = /blind|free/.test(s) ? 'blind' : /optional|flexible/.test(s) ? 'optional' : /required/.test(s) ? 'required' : 'other';
    return [st, t.text];
  }
  return ['unknown', sc.testPolicy2024 ? `In fall 2024 the school reported test scores as ${POLICY_2024[sc.testPolicy2024] ?? 'other'} (IPEDS).` : 'Testing policy not reported.'];
}
function pickSticker(sc: ScSchool, L: Latest | null): School['sticker'] {
  const c = L?.cost;
  if (c) {
    const tot = c.inState?.total ?? c.total ?? null;
    const out = c.outOfState?.total ?? null;
    if (tot) return { year: c.year, total: tot, outTotal: out, source: c.doc ?? 'university cost of attendance', url: c.url, newer: true };
  }
  if (sc.coa) return { year: '2023-24', total: sc.coa, outTotal: null, source: 'College Scorecard (IPEDS)', url: SC.meta.url, newer: false };
  return null;
}

export const SCHOOLS: School[] = SCHOOLS_SC.map((sc) => {
  const L = LATEST[sc.slug] ?? null;
  const [testStatus, testText] = testOf(sc, L);
  return { ...sc, latest: L, adm: pickAdm(sc, L), sat: testStatus === 'blind' ? null : pickSat(sc, L), actR: testStatus === 'blind' ? null : pickAct(sc, L), testStatus, testText, sticker: pickSticker(sc, L), policy2024: sc.testPolicy2024 ? POLICY_2024[sc.testPolicy2024] ?? null : null };
});
export const schoolBySlug = (slug: string): School => {
  const s = SCHOOLS.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown school ${slug}`);
  return s;
};

/** What a calculator needs for one school (shipped to the browser). */
export interface CalcSchool {
  slug: string; name: string; short: string; state: string; control: 'public' | 'private';
  adm: number | null; admLabel: string; sat: [number, number] | null; satApprox: boolean; act: [number, number] | null; test: School['testStatus'];
  net: Array<number | null>; tuitionIn: number | null; tuitionOut: number | null; sticker: number | null; stickerOut: number | null; stickerYear: string;
  grad6: number | null; earn10: number | null; debt: number | null; npcUrl: string;
}
export const calcSchool = (s: School): CalcSchool => ({
  slug: s.slug, name: s.name, short: s.short, state: s.state, control: s.control,
  adm: s.adm?.rate ?? null, admLabel: s.adm?.label ?? '', sat: s.sat ? [s.sat.p25, s.sat.p75] : null, satApprox: !!s.sat?.approx, act: s.actR ? [s.actR.p25, s.actR.p75] : null, test: s.testStatus,
  net: s.netByIncome, tuitionIn: s.tuitionIn, tuitionOut: s.tuitionOut, sticker: s.sticker?.total ?? null, stickerOut: s.sticker?.outTotal ?? null, stickerYear: s.sticker?.year ?? '',
  grad6: s.grad6, earn10: s.earn10, debt: s.debt, npcUrl: s.npcUrl ? (s.npcUrl.startsWith('http') ? s.npcUrl : `https://${s.npcUrl}`) : '',
});
export const CALC_SCHOOLS = (): CalcSchool[] => SCHOOLS.map(calcSchool).sort((a, b) => a.name.localeCompare(b.name));
