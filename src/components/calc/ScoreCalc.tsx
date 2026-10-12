/** Where an SAT or ACT score stands: share of test takers below it, and among the 110 universities. */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import { Card, Result, Rows, Note, Actions, num } from './parts';
import { satBelow } from '../../lib/engine/satpct';
import { actToSat, satToAct, type ActToSat, type SatToAct } from '../../lib/engine/concord';
import { readParams, num as pnum, updateURL } from '../../lib/url-state';
import type { CalcSchool } from '../../lib/data';

interface Props { mode: 'sat' | 'act'; curve: Array<[number, number]>; a2s: ActToSat; s2a: SatToAct; schools: CalcSchool[]; satClass: number; actMean: number; actClass: number; methodHref: string }
export default function ScoreCalc({ mode, curve, a2s, s2a, schools, satClass, actMean, actClass, methodHref }: Props) {
  const def = mode === 'sat' ? 1200 : 25;
  const [x, setX] = useState(def);
  useEffect(() => { setX(pnum(readParams(window.location.search), mode, def)); }, []);
  useEffect(() => { updateURL({ [mode]: x }); }, [x]);
  const out = useMemo(() => {
    const satEq = mode === 'sat' ? x : actToSat(x, a2s)?.point ?? null;
    const below = satEq === null ? null : satBelow(satEq, curve);
    const scored = schools.filter((s) => s.test !== 'blind' && (mode === 'sat' ? s.sat : s.act));
    const r = (s: CalcSchool) => (mode === 'sat' ? s.sat! : s.act!);
    const above = scored.filter((s) => x >= r(s)[1]).length;
    const inside = scored.filter((s) => x >= r(s)[0] && x < r(s)[1]).length;
    return { satEq, below, above, inside, under: scored.length - above - inside, n: scored.length };
  }, [x, mode]);
  const rows: Array<[string, string] | [string, string, boolean]> = [
    [`Universities where you are above the 75th percentile`, `${out.above} of ${out.n}`, true],
    ['Inside the middle 50%', `${out.inside} of ${out.n}`],
    ['Below the 25th percentile', `${out.under} of ${out.n}`],
  ];
  if (mode === 'act') { rows.unshift(['SAT equivalent (concordance)', out.satEq === null ? 'below the table' : num(out.satEq)]); rows.push([`ACT national average, class of ${actClass}`, num(actMean, 1)]); }
  else rows.unshift(['ACT equivalent (concordance)', String(satToAct(x, s2a) ?? 'below the table')]);
  return (
    <Card form={mode === 'sat'
      ? <NumberField id="sc-sat" label="SAT total" value={x} onChange={setX} min={400} max={1600} help="400 to 1600" className="sm:col-span-2" />
      : <NumberField id="sc-act" label="ACT composite" value={x} onChange={setX} min={1} max={36} help="1 to 36" className="sm:col-span-2" />}>
      <Result label={`SAT takers of the class of ${satClass} scoring below ${mode === 'sat' ? num(x) : 'that score'} (estimate)`} figure={out.below === null ? 'n/a' : `${num(out.below * 100, 0)}%`}>
        <Rows rows={rows} />
        <Note methodHref={methodHref}>Share below: interpolated between the quartiles and score bands the College Board published for the class of {satClass}. University ranges: newest cycle each school published.</Note>
        <Actions />
      </Result>
    </Card>
  );
}
