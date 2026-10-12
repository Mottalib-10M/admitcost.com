/** Mini: what is left of a university's cost of attendance after the grants in an award letter. */
import type { MiniSpec } from '../mini-types';
import { usd, pct, parseArg } from './_kit';

interface Arg { short: string; coa: number; year: string }
export default function grantLeft(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { short: 'this school', coa: 60000, year: '' });
  return {
    title: `${a.short}: what your grants leave to pay`,
    cta: 'See the net price by income',
    inputs: [{ id: 'g', label: 'Grants and scholarships offered', def: Math.round(a.coa / 2000) * 1000, unit: '$', max: 500000 }],
    run: (v) => {
      const left = Math.max(0, a.coa - v.g);
      return { head: ['Left to pay for the year', usd(left)], rows: [[`Cost of attendance ${a.year}`, usd(a.coa)], ['Grants entered', usd(Math.min(v.g, a.coa))], ['Share covered by grants', pct(Math.min(1, v.g / a.coa), 0)]], note: 'Loans and work-study are not grants: they are ways of paying what is left.' };
    },
  };
}
