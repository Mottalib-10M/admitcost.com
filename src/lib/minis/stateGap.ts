/** Mini: what being a nonresident adds at a public university, over the years of study. */
import type { MiniSpec } from '../mini-types';
import { usd, parseArg } from './_kit';

interface Arg { short: string; state: string; tin: number; tout: number; year: string }
export default function stateGap(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { short: 'this university', state: 'the state', tin: 10000, tout: 30000, year: '' });
  return {
    title: `${a.short}: the out-of-state premium`,
    cta: 'Compare public and private universities',
    inputs: [{ id: 'y', label: 'Years of study', def: 4, max: 8, decimals: 0 }],
    run: (v) => {
      const gap = Math.max(0, a.tout - a.tin);
      return { head: [`Extra tuition for a non-${a.state} student`, usd(gap * v.y)], rows: [[`In-state tuition and fees ${a.year}`, usd(a.tin)], [`Out-of-state tuition and fees ${a.year}`, usd(a.tout)], ['Gap per year', usd(gap)]], note: 'Published tuition and fees, before any nonresident scholarship; future increases not included.' };
    },
  };
}
