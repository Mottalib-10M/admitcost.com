/** Mini: share of the latest SAT class scoring below a total (College Board class report, interpolated). */
import type { MiniSpec } from '../mini-types';
import { num, pct, parseArg } from './_kit';
import { satBelow } from '../engine/satpct';

interface Arg { curve: Array<[number, number]>; classOf: number; mean: number }
export default function satNational(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { curve: [[400, 0], [1600, 1]], classOf: 2026, mean: 1045 });
  return {
    title: 'Your SAT against every test taker',
    cta: 'See it against 110 universities',
    inputs: [{ id: 's', label: 'SAT total', def: 1200, max: 1600 }],
    run: (v) => {
      const b = satBelow(v.s, a.curve);
      return { head: [`Class of ${a.classOf} takers scoring below you`, pct(b, 0)], rows: [['Points above or below the mean', `${v.s >= a.mean ? '+' : ''}${num(v.s - a.mean)}`], [`Mean total, class of ${a.classOf}`, num(a.mean)]], note: 'Interpolated between the quartiles and score bands published by the College Board.' };
    },
  };
}
