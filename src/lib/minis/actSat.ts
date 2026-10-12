/** Mini: ACT composite to SAT total on the 2018 concordance table. */
import type { MiniSpec } from '../mini-types';
import { num, parseArg } from './_kit';
import { actToSat, type ActToSat } from '../engine/concord';

interface Arg { table: ActToSat }
export default function actSat(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { table: [] });
  return {
    title: 'ACT to SAT in one step',
    cta: 'Full ACT and SAT conversion',
    inputs: [{ id: 'a', label: 'ACT composite', def: 27, max: 36 }],
    run: (v) => {
      const r = actToSat(v.a, a.table);
      return { head: ['SAT equivalent', r ? num(r.point) : 'below the table'], rows: r ? [['SAT range for that ACT', `${num(r.low)} to ${num(r.high)}`]] : [['Table covers', 'ACT 9 to 36']], note: '2018 ACT/SAT Concordance Tables.' };
    },
  };
}
