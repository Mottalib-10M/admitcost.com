/** Mini: share of enrolled first-years scoring below a given SAT or ACT score at one university. */
import type { MiniSpec } from '../mini-types';
import { num, pct, parseArg } from './_kit';
import { position } from '../engine/odds';

interface Arg { short: string; test: 'SAT' | 'ACT'; p25: number; p75: number; iqr: number; label: string }
export default function scorePosition(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { short: 'this school', test: 'SAT', p25: 1200, p75: 1400, iqr: 1.349, label: '' });
  const sat = a.test === 'SAT';
  return {
    title: `${a.short}: where your ${a.test} score lands`,
    cta: 'Odds and net price at other universities',
    inputs: [{ id: 's', label: `Your ${a.test} ${sat ? 'total' : 'composite'}`, def: sat ? Math.round((a.p25 + a.p75) / 20) * 10 : Math.round((a.p25 + a.p75) / 2), max: sat ? 1600 : 36 }],
    run: (v) => {
      const p = position(v.s, a.p25, a.p75, a.iqr);
      const zone = v.s >= a.p75 ? 'above the 75th percentile' : v.s >= a.p25 ? 'inside the middle 50%' : 'below the 25th percentile';
      return { head: ['Enrolled students scoring below you (approx.)', p === null ? 'n/a' : pct(p, 0)], rows: [['Middle 50%', `${num(a.p25)} to ${num(a.p75)}`], ['Your score is', zone]], note: `${a.label}. Normal curve fitted to the two published percentiles.` };
    },
  };
}
