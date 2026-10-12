/** Mini: net price at one university for a family income (federal average of the band). arg from the page. */
import type { MiniSpec } from '../mini-types';
import { usd, pct, parseArg } from './_kit';
import { netPrice, type Band } from '../engine/netprice';

interface Arg { short: string; net: Array<number | null>; control: 'public' | 'private'; tuitionIn: number | null; tuitionOut: number | null; coa: number | null; bands: Band[]; labels: string[]; year: string }
export default function schoolNet(arg?: string): MiniSpec {
  const a = parseArg<Arg>(arg, { short: 'this school', net: [0, 0, 0, 0, 0], control: 'private', tuitionIn: 0, tuitionOut: 0, coa: 0, bands: [[0, 30000], [30001, 48000], [48001, 75000], [75001, 110000], [110001, null]], labels: ['', '', '', '', ''], year: '' });
  return {
    title: `${a.short}: net price for your family income`,
    cta: 'Compare with other universities',
    inputs: [{ id: 'inc', label: 'Family income per year', def: 60000, unit: '$', max: 5000000 }],
    run: (v) => {
      const n = netPrice({ netByIncome: a.net, control: a.control, tuitionIn: a.tuitionIn, tuitionOut: a.tuitionOut }, v.inc, a.bands, true);
      const rows: Array<[string, string]> = [['Income band', a.labels[n.band]]];
      if (a.coa && n.shown !== null) rows.push([`Share of the ${a.year} cost`, pct(n.shown / a.coa, 0)]);
      if (n.aidAboveCost > 0) rows.push(['Grants above the cost, on average', usd(n.aidAboveCost)]);
      return { head: [`Average net price, ${a.year}`, n.shown === null ? 'not reported' : usd(n.shown)], rows, note: a.control === 'public' ? 'In-state students; federal figure for students on federal aid.' : 'Federal figure for first-year students on federal aid.' };
    },
  };
}
