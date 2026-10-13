/**
 * "My odds and my net price": one university, an optional SAT or ACT score, the family income, and
 * residency for a public university. No account, no e-mail: everything runs in the browser.
 * First render = build defaults; the shared link is applied after mount (RECETTE §17.5).
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { Card, Result, Rows, Note, Actions, usd, num } from './parts';
import { position, label as oddsLabel, oneIn, type OddsRule } from '../../lib/engine/odds';
import { netPrice, paidShare, type Band } from '../../lib/engine/netprice';
import { readParams, num as pnum, str, updateURL } from '../../lib/url-state';
import type { CalcSchool } from '../../lib/data';

interface Props { schools: CalcSchool[]; school: string; lock?: boolean; rule: OddsRule; bands: Band[]; bandLabels: string[]; netYear: string; methodHref: string; schoolHrefs?: Record<string, string>; idPrefix?: string }
const LABEL = { reach: 'Reach', target: 'Target', likely: 'Likely' } as const;
const pctTxt = (x: number, d = 1) => `${num(x * 100, d)}%`;

export default function OddsNetCalc({ schools, school, lock = false, rule, bands, bandLabels, netYear, methodHref, schoolHrefs = {}, idPrefix = 'on' }: Props) {
  const [slug, setSlug] = useState(school);
  const [test, setTest] = useState('sat');
  const [sat, setSat] = useState(1350);
  const [act, setAct] = useState(30);
  const [income, setIncome] = useState(90000);
  const [res, setRes] = useState('in');
  useEffect(() => {
    const u = readParams(window.location.search);
    if (!lock) { const s = str(u, 'u', school); if (schools.some((x) => x.slug === s)) setSlug(s); }
    setTest(str(u, 't', 'sat')); setSat(pnum(u, 'sat', 1350)); setAct(pnum(u, 'act', 30)); setIncome(pnum(u, 'inc', 90000)); setRes(str(u, 'r', 'in'));
  }, []);
  useEffect(() => { updateURL({ u: lock ? undefined : slug, t: test, sat: test === 'sat' ? sat : undefined, act: test === 'act' ? act : undefined, inc: income, r: res === 'out' ? 'out' : undefined }); }, [slug, test, sat, act, income, res]);

  const s = schools.find((x) => x.slug === slug) ?? schools[0];
  const blind = s.test === 'blind';
  const out = useMemo(() => {
    const range = test === 'sat' ? s.sat : test === 'act' ? s.act : null;
    const score = test === 'sat' ? sat : act;
    const p = !blind && range && test !== 'none' ? position(score, range[0], range[1], rule.iqrToSd) : null;
    const lab = s.adm !== null ? oddsLabel(s.adm, p, rule) : null;
    const n = netPrice({ netByIncome: s.net, control: s.control, tuitionIn: s.tuitionIn, tuitionOut: s.tuitionOut }, income, bands, res === 'in');
    return { range, p, lab, n };
  }, [s, test, sat, act, income, res, blind, rule, bands]);

  const publicNon = s.control === 'public' && res === 'out';
  const sticker = publicNon && s.stickerOut ? s.stickerOut : s.sticker;
  const share = paidShare(out.n.total, sticker);
  const rows: Array<[string, string] | [string, string, boolean]> = [];
  if (s.adm !== null) rows.push([`Admit rate, ${s.admLabel}`, `${pctTxt(s.adm, s.adm < 0.1 ? 2 : 1)} (1 in ${oneIn(s.adm)})`]);
  if (blind) rows.push(['Test scores', 'Not considered (test-free)']);
  else if (test !== 'none' && out.range) rows.push([`Middle 50% of enrolled students (${test.toUpperCase()})`, `${num(out.range[0])} to ${num(out.range[1])}`]);
  else if (test !== 'none') rows.push([`${test.toUpperCase()} range`, 'not reported']);
  if (out.p !== null) rows.push(['Enrolled students scoring below you (approx.)', pctTxt(out.p, 0)]);
  if (out.lab) rows.push(['This site’s label', LABEL[out.lab], true]);
  if (sticker) rows.push([`Sticker price ${s.stickerYear}${s.control === 'public' ? (publicNon ? ', out-of-state' : ', in-state') : ''}`, usd(sticker)]);
  rows.push([`Paid by families with ${bandLabels[out.n.band]} (${netYear})`, out.n.shown === null ? 'not reported' : usd(out.n.shown)]);
  if (out.n.aidAboveCost > 0) rows.push(['Grants above the cost, on average', usd(out.n.aidAboveCost)]);
  if (publicNon) rows.push(['Out-of-state tuition gap added', `+${usd(out.n.outOfStateGap)}`]);
  if (share !== null && sticker) rows.push(['Share of the sticker price', pctTxt(share, 0)]);

  const options = schools.map((x) => ({ value: x.slug, label: x.name }));
  const form = (
    <>
      {lock ? null : <SelectField id={`${idPrefix}-u`} label="University" value={slug} onChange={setSlug} options={options} help={`${schools.length} universities`} className="sm:col-span-2" />}
      <NumberField id={`${idPrefix}-inc`} label="Family income per year" value={income} onChange={setIncome} unit="$" max={5000000} help="Parents’ total income before tax (AGI)" />
      {s.control === 'public'
        ? <Toggle id={`${idPrefix}-r`} label={`Resident of ${s.state}?`} value={res} onChange={setRes} options={[{ value: 'in', label: 'Yes' }, { value: 'out', label: 'No' }]} />
        : null}
      <Toggle id={`${idPrefix}-t`} label="Test score" value={blind ? 'none' : test} onChange={setTest} options={[{ value: 'sat', label: 'SAT' }, { value: 'act', label: 'ACT' }, { value: 'none', label: 'None' }]} />
      {blind || test === 'none' ? <p className="self-end pb-3 text-xs text-navy-600">{blind ? `${s.short} does not look at SAT or ACT scores.` : 'Odds read from the admit rate alone.'}</p> : test === 'act'
        ? <NumberField id={`${idPrefix}-act`} label="ACT composite" value={act} onChange={setAct} min={1} max={36} help="1 to 36" />
        : <NumberField id={`${idPrefix}-sat`} label="SAT total" value={sat} onChange={setSat} min={400} max={1600} help="400 to 1600" />}
    </>
  );
  return (
    <Card form={form}>
      <Result label={`Net price per year at ${s.short}`} figure={out.n.total === null ? 'n/a' : usd(out.n.total)} sub={out.lab ? `${LABEL[out.lab]} · admit rate ${s.adm !== null ? pctTxt(s.adm, s.adm < 0.1 ? 2 : 1) : 'n/a'}` : undefined}>
        <Rows rows={rows} />
        <Note methodHref={methodHref}>
          Net price: average paid after grants by students on federal aid in that income band ({netYear}), not a quote. The label is a fixed rule of this site (admit rate under {num(rule.reachBelow * 100)}% is a reach for everyone), not a prediction.{s.npcUrl && <> Your exact price: <a className="underline" href={s.npcUrl} target="_blank" rel="nofollow noopener noreferrer">{s.short} net price calculator</a>.</>}
          {!lock && schoolHrefs[s.slug] && <> <a className="underline" href={schoolHrefs[s.slug]}>{s.short} page</a>.</>}
        </Note>
        <Actions />
      </Result>
    </Card>
  );
}
