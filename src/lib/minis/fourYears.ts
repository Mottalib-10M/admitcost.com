/** Mini: the net price at one university over four years, with a yearly increase the reader chooses. */
import type { MiniSpec } from '../mini-types';
import { usd, parseArg } from './_kit';
import { netPrice, type Band } from '../engine/netprice';

interface Arg { short: string; net: Array<number | null>; control: 'public' | 'private'; bands: Band[]; year: string }
export default function fourYears(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { short: 'this school', net: [0, 0, 0, 0, 0], control: 'private', bands: [[0, 30000], [30001, 48000], [48001, 75000], [75001, 110000], [110001, null]], year: '' });
  return {
    title: `${a.short}: four years at your income`,
    cta: 'Compare four-year costs',
    inputs: [
      { id: 'inc', label: 'Family income per year', def: 100000, unit: '$', max: 5000000 },
      { id: 'up', label: 'Yearly increase you assume', def: 4, unit: '%', max: 20, decimals: 1 },
    ],
    run: (v) => {
      const n = netPrice({ netByIncome: a.net, control: a.control, tuitionIn: null, tuitionOut: null }, v.inc, a.bands, true);
      const y1 = n.shown ?? 0;
      const yrs = [0, 1, 2, 3].map((k) => y1 * Math.pow(1 + v.up / 100, k));
      return { head: ['Four-year net price (estimate)', n.shown === null ? 'not reported' : usd(yrs.reduce((s, x) => s + x, 0))], rows: [[`Year one (federal average, ${a.year})`, usd(y1)], ['Year four at your increase', usd(yrs[3])]], note: 'The increase is your assumption; aid is re-assessed every year on the new FAFSA.' };
    },
  };
}
