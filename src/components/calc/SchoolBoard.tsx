/**
 * The 110 universities in one table that recalculates: admit rates with the student's label, tuition,
 * or the net price at the family's income. Sorted and filtered in the browser.
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { Note, usd, num } from './parts';
import { position, label as oddsLabel, type OddsRule } from '../../lib/engine/odds';
import { netPrice, bandIndex, type Band } from '../../lib/engine/netprice';
import { readParams, num as pnum, str, updateURL } from '../../lib/url-state';
import type { CalcSchool } from '../../lib/data';

type Mode = 'rates' | 'tuition' | 'net';
interface Props { mode: Mode; schools: CalcSchool[]; rule: OddsRule; bands: Band[]; bandLabels: string[]; netYear: string; tuitionYear: string; methodHref: string; schoolHrefs: Record<string, string> }
const LABEL = { reach: 'Reach', target: 'Target', likely: 'Likely' } as const;
const pctTxt = (x: number, d = 1) => `${num(x * 100, d)}%`;

export default function SchoolBoard({ mode, schools, rule, bands, bandLabels, netYear, tuitionYear, methodHref, schoolHrefs }: Props) {
  const [sat, setSat] = useState(1300);
  const [income, setIncome] = useState(75000);
  const [kind, setKind] = useState('all');
  const [sort, setSort] = useState(mode === 'rates' ? 'adm' : mode === 'net' ? 'net' : 'out');
  useEffect(() => { const u = readParams(window.location.search); setSat(pnum(u, 'sat', 1300)); setIncome(pnum(u, 'inc', 75000)); setKind(str(u, 'k', 'all')); setSort(str(u, 's', mode === 'rates' ? 'adm' : mode === 'net' ? 'net' : 'out')); }, []);
  useEffect(() => { updateURL({ sat: mode === 'rates' ? sat : undefined, inc: mode === 'net' ? income : undefined, k: kind === 'all' ? undefined : kind, s: sort }); }, [sat, income, kind, sort]);

  const rows = useMemo(() => {
    const list = schools.filter((s) => kind === 'all' || s.control === kind).map((s) => {
      const p = s.test !== 'blind' && s.sat ? position(sat, s.sat[0], s.sat[1], rule.iqrToSd) : null;
      const lab = s.adm !== null ? oddsLabel(s.adm, p, rule) : null;
      const n = netPrice({ netByIncome: s.net, control: s.control, tuitionIn: s.tuitionIn, tuitionOut: s.tuitionOut }, income, bands, true);
      return { s, p, lab, net: n.shown };
    });
    const key = (x: (typeof list)[number]): number => {
      switch (sort) {
        case 'adm': return x.s.adm ?? 9;
        case 'sat': return -(x.s.sat?.[1] ?? 0);
        case 'net': return x.net ?? 1e9;
        case 'in': return x.s.tuitionIn ?? 1e9;
        case 'out': return -(x.s.tuitionOut ?? 0);
        case 'sticker': return -(x.s.sticker ?? 0);
        default: return 0;
      }
    };
    return list.sort((a, b) => key(a) - key(b) || a.s.name.localeCompare(b.s.name));
  }, [schools, sat, income, kind, sort, rule, bands]);

  const fit = rows.filter((r) => r.lab === 'target' || r.lab === 'likely').length;
  const cheapest = rows.reduce((m, r) => (r.net !== null && (m === null || r.net < m.net!) ? r : m), null as (typeof rows)[number] | null);
  const stickers = rows.map((r) => r.s.sticker).filter((x): x is number => x !== null).sort((a, b) => a - b);
  const median = stickers.length ? stickers[Math.floor(stickers.length / 2)] : null;
  const head: [string, string, string] = mode === 'rates'
    ? ['Universities that are a target or likely for this score', `${fit} of ${rows.length}`, 'Every school admitting under 15% stays a reach.']
    : mode === 'net'
      ? [`Lowest net price for ${bandLabels[bandIndex(income, bands)]}`, cheapest?.net != null ? usd(cheapest.net) : 'n/a', cheapest ? `${cheapest.s.name}, ${netYear}` : '']
      : ['Median sticker price of the list', median === null ? 'n/a' : usd(median), 'Newest published year of each school'];
  const sorts = mode === 'rates' ? [{ value: 'adm', label: 'Lowest admit rate' }, { value: 'sat', label: 'Highest SAT range' }]
    : mode === 'net' ? [{ value: 'net', label: 'Lowest net price' }, { value: 'sticker', label: 'Highest sticker price' }]
      : [{ value: 'out', label: 'Highest out-of-state tuition' }, { value: 'in', label: 'Lowest in-state tuition' }, { value: 'sticker', label: 'Highest sticker price' }];
  const name = (s: CalcSchool) => (schoolHrefs[s.slug] ? <a className="font-medium text-accent-700 underline-offset-2 hover:underline" href={schoolHrefs[s.slug]}>{s.name}</a> : s.name);
  return (
    <div className="rechner rounded-xl border border-navy-200 bg-white p-4 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <form className="grid content-start gap-x-5 gap-y-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          {mode === 'rates' && <NumberField id="sb-sat" label="Your SAT total" value={sat} onChange={setSat} min={400} max={1600} help="ACT? Convert it first (concordance)" />}
          {mode === 'net' && <NumberField id="sb-inc" label="Family income per year" value={income} onChange={setIncome} unit="$" max={5000000} help="Parents’ total income before tax" />}
          <SelectField id="sb-k" label="Type" value={kind} onChange={setKind} options={[{ value: 'all', label: 'Public and private' }, { value: 'public', label: 'Public only' }, { value: 'private', label: 'Private only' }]} />
          <SelectField id="sb-s" label="Sort by" value={sort} onChange={setSort} options={sorts} className={mode === 'tuition' ? '' : 'sm:col-span-2'} />
        </form>
        <div data-resultat aria-live="polite" className="rounded-xl bg-accent-50 p-4 sm:p-5">
          <p className="text-sm font-medium text-navy-700">{head[0]}</p>
          <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{head[1]}</p>
          <p className="mt-1 text-sm text-navy-700">{head[2]}</p>
          <Note methodHref={methodHref}>{mode === 'tuition' ? `Tuition and fees ${tuitionYear} (College Scorecard); sticker price: newest year each school published.` : mode === 'net' ? `Average paid after grants by students on federal aid, ${netYear}; public universities: in-state students.` : 'Admit rate of the newest cycle each school published; score position approximated from its 25th and 75th percentiles.'}</Note>
        </div>
      </div>
      <div className="mt-6 max-h-[36rem] overflow-auto">
        <table className="journal w-full min-w-[36rem] text-sm">
          <thead className="sticky top-0 bg-white"><tr>
            <th scope="col" className="px-2 py-2 text-left font-semibold text-navy-900">University</th>
            {mode === 'rates' && <><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">Admit rate</th><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">SAT middle 50%</th><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">You</th></>}
            {mode === 'tuition' && <><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">In-state tuition</th><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">Out-of-state tuition</th><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">Sticker price</th></>}
            {mode === 'net' && <><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">Net price</th><th scope="col" className="px-2 py-2 text-right font-semibold text-navy-900">Sticker price</th></>}
          </tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.s.slug} className="border-b border-navy-100">
                <td className="px-2 py-1.5 text-navy-900">{name(r.s)} <span className="text-xs text-navy-500">{r.s.state}</span></td>
                {mode === 'rates' && <><td className="tabular-nums px-2 py-1.5 text-right">{r.s.adm === null ? 'n/a' : pctTxt(r.s.adm, r.s.adm < 0.1 ? 2 : 1)}</td><td className="tabular-nums px-2 py-1.5 text-right">{r.s.test === 'blind' ? 'test-free' : r.s.sat ? `${num(r.s.sat[0])} to ${num(r.s.sat[1])}` : 'n/a'}</td><td className="px-2 py-1.5 text-right">{r.lab ? LABEL[r.lab] : 'n/a'}</td></>}
                {mode === 'tuition' && <><td className="tabular-nums px-2 py-1.5 text-right">{r.s.tuitionIn === null ? 'n/a' : usd(r.s.tuitionIn)}</td><td className="tabular-nums px-2 py-1.5 text-right">{r.s.tuitionOut === null ? 'n/a' : usd(r.s.tuitionOut)}</td><td className="tabular-nums px-2 py-1.5 text-right">{r.s.sticker === null ? 'n/a' : `${usd(r.s.sticker)}`}</td></>}
                {mode === 'net' && <><td className="tabular-nums px-2 py-1.5 text-right font-semibold">{r.net === null ? 'n/a' : usd(r.net)}</td><td className="tabular-nums px-2 py-1.5 text-right">{r.s.sticker === null ? 'n/a' : usd(r.s.sticker)}</td></>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
