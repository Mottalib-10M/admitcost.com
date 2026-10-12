/** Two or three universities side by side, at the family's income and with the student's score. */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { Note, Actions, usd, num } from './parts';
import { position, label as oddsLabel, oneIn, type OddsRule } from '../../lib/engine/odds';
import { netPrice, type Band } from '../../lib/engine/netprice';
import { readParams, num as pnum, str, updateURL } from '../../lib/url-state';
import type { CalcSchool } from '../../lib/data';

interface Props { schools: CalcSchool[]; defaults: [string, string, string]; rule: OddsRule; bands: Band[]; bandLabels: string[]; netYear: string; methodHref: string; schoolHrefs: Record<string, string> }
const LABEL = { reach: 'Reach', target: 'Target', likely: 'Likely' } as const;
const pctTxt = (x: number, d = 1) => `${num(x * 100, d)}%`;

export default function CompareCalc({ schools, defaults, rule, bands, bandLabels, netYear, methodHref, schoolHrefs }: Props) {
  const [a, setA] = useState(defaults[0]);
  const [b, setB] = useState(defaults[1]);
  const [c, setC] = useState(defaults[2]);
  const [sat, setSat] = useState(1400);
  const [income, setIncome] = useState(120000);
  const [res, setRes] = useState('in');
  useEffect(() => {
    const u = readParams(window.location.search);
    const ok = (x: string) => x === '' || schools.some((s) => s.slug === x);
    const ua = str(u, 'a', defaults[0]), ub = str(u, 'b', defaults[1]), uc = str(u, 'c', defaults[2]);
    if (ok(ua)) setA(ua); if (ok(ub)) setB(ub); if (ok(uc)) setC(uc);
    setSat(pnum(u, 'sat', 1400)); setIncome(pnum(u, 'inc', 120000)); setRes(str(u, 'r', 'in'));
  }, []);
  useEffect(() => { updateURL({ a, b, c, sat, inc: income, r: res === 'out' ? 'out' : undefined }); }, [a, b, c, sat, income, res]);

  const picked = [a, b, c].filter(Boolean).map((x) => schools.find((s) => s.slug === x)).filter((x): x is CalcSchool => !!x);
  const cols = useMemo(() => picked.map((s) => {
    const n = netPrice({ netByIncome: s.net, control: s.control, tuitionIn: s.tuitionIn, tuitionOut: s.tuitionOut }, income, bands, res === 'in');
    const p = s.test !== 'blind' && s.sat ? position(sat, s.sat[0], s.sat[1], rule.iqrToSd) : null;
    const lab = s.adm !== null ? oddsLabel(s.adm, p, rule) : null;
    const stick = s.control === 'public' && res === 'out' ? s.stickerOut ?? s.sticker : s.sticker;
    return { s, n, p, lab, stick };
  }), [picked.map((s) => s.slug).join(), sat, income, res]);
  const best = cols.reduce((m, x) => (x.n.total !== null && (m === null || x.n.total < m) ? x.n.total : m), null as number | null);
  const options = schools.map((x) => ({ value: x.slug, label: x.name }));
  const row = (lab: string, f: (x: (typeof cols)[number]) => string) => (
    <tr key={lab}><th scope="row" className="py-2 pr-3 text-left text-sm font-medium text-navy-700">{lab}</th>{cols.map((x) => <td key={x.s.slug} className="tabular-nums py-2 pr-3 text-right text-sm text-navy-900">{f(x)}</td>)}</tr>
  );
  return (
    <div className="rechner rounded-xl border border-navy-200 bg-white p-4 sm:p-6">
      <form className="grid gap-x-5 gap-y-4 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
        <SelectField id="cmp-a" label="University 1" value={a} onChange={setA} options={options} />
        <SelectField id="cmp-b" label="University 2" value={b} onChange={setB} options={options} />
        <SelectField id="cmp-c" label="University 3 (optional)" value={c} onChange={setC} options={[{ value: '', label: 'None' }, ...options]} />
        <NumberField id="cmp-inc" label="Family income per year" value={income} onChange={setIncome} unit="$" max={5000000} help="Parents’ total income before tax" />
        <NumberField id="cmp-sat" label="SAT total (or the ACT converted)" value={sat} onChange={setSat} min={400} max={1600} help="400 to 1600" />
        <Toggle id="cmp-r" label="Resident of the public schools’ state?" value={res} onChange={setRes} options={[{ value: 'in', label: 'Yes' }, { value: 'out', label: 'No' }]} />
      </form>
      <div data-resultat aria-live="polite" className="mt-6 overflow-x-auto rounded-xl bg-accent-50 p-4">
        <p className="text-sm font-medium text-navy-700">Lowest net price for your income</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{best === null ? 'n/a' : usd(best)}</p>
        <table className="mt-4 w-full min-w-[34rem]">
          <thead><tr><th scope="col" className="sr-only">Figure</th>{cols.map((x) => <th key={x.s.slug} scope="col" className="pb-2 pr-3 text-right text-sm font-semibold text-navy-900">{schoolHrefs[x.s.slug] ? <a className="underline" href={schoolHrefs[x.s.slug]}>{x.s.short}</a> : x.s.short}</th>)}</tr></thead>
          <tbody className="divide-y divide-navy-200">
            {row(`Net price at your income (${netYear})`, (x) => (x.n.total === null ? 'n/a' : usd(x.n.total)))}
            {row('Sticker price', (x) => (x.stick ? `${usd(x.stick)} (${x.s.stickerYear})` : 'n/a'))}
            {row('Admit rate, newest cycle', (x) => (x.s.adm === null ? 'n/a' : `${pctTxt(x.s.adm, x.s.adm < 0.1 ? 2 : 1)} (1 in ${oneIn(x.s.adm)})`))}
            {row('SAT middle 50%', (x) => (x.s.test === 'blind' ? 'test-free' : x.s.sat ? `${num(x.s.sat[0])} to ${num(x.s.sat[1])}` : 'n/a'))}
            {row('Enrolled scoring below you', (x) => (x.p === null ? 'n/a' : pctTxt(x.p, 0)))}
            {row('This site’s label', (x) => (x.lab ? LABEL[x.lab] : 'n/a'))}
            {row('Graduated within 6 years', (x) => (x.s.grad6 === null ? 'n/a' : pctTxt(x.s.grad6, 0)))}
            {row('Median earnings 10 years after entry', (x) => (x.s.earn10 === null ? 'n/a' : usd(x.s.earn10)))}
            {row('Median federal debt at graduation', (x) => (x.s.debt === null ? 'n/a' : usd(x.s.debt)))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-navy-700">Income band used: {bandLabels[cols[0]?.n.band ?? 0]}. Out-of-state students at a public university: in-state net price plus the tuition gap.</p>
        <Note methodHref={methodHref}>Federal figures (College Scorecard) and each university’s newest published cycle.</Note>
        <Actions />
      </div>
    </div>
  );
}
