/** Cost of attendance lines (no route import: safe from content files). */
import { SCHOOLS, SC_META, type School } from './data';
import type { CoaSchool } from '../components/calc/CoaCalc';
const TUITION_YEAR = SC_META.years.tuition;
/** Cost lines of one school: the university's newest published budget, else the federal 2024-25 components. */
export function coaOf(s: School): CoaSchool {
  const c = s.latest?.cost;
  const linesOf = (x: Record<string, unknown> | null | undefined): Array<[string, number]> => {
    if (!x) return [];
    const L: Array<[string, unknown]> = [['Tuition', x.tuition], ['Fees', x.fees], ['Housing and food', x.housingFood], ['Books and supplies', x.books], ['Personal', x.personal], ['Travel', x.travel]];
    return L.filter(([, v]) => typeof v === 'number' && v > 0) as Array<[string, number]>;
  };
  if (c) {
    const isPub = s.control === 'public' && (c.inState || c.outOfState);
    const lines = isPub ? linesOf(c.inState as Record<string, unknown>) : linesOf(c as unknown as Record<string, unknown>);
    const total = (isPub ? c.inState?.total : c.total) ?? null;
    if (lines.length && total) {
      const outLines = isPub && c.outOfState ? linesOf(c.outOfState as Record<string, unknown>) : undefined;
      return { slug: s.slug, name: s.name, control: s.control, year: c.year, lines, total, outLines: outLines?.length ? outLines : undefined, outTotal: (isPub && c.outOfState?.total) || undefined, source: `${s.name}, published budget ${c.year}` };
    }
  }
  const lines: Array<[string, number]> = ([['Tuition and fees', s.tuitionIn], ['Housing and food', s.roomBoard], ['Books and supplies', s.books], ['Other expenses', s.other]] as Array<[string, number | null]>).filter(([, v]) => typeof v === 'number' && v > 0) as Array<[string, number]>;
  const total = lines.reduce((a, [, v]) => a + v, 0);
  const out: Array<[string, number]> | undefined = s.control === 'public' && s.tuitionOut ? lines.map(([l, v]) => [l, l === 'Tuition and fees' ? s.tuitionOut! : v]) : undefined;
  return { slug: s.slug, name: s.name, control: s.control, year: TUITION_YEAR, lines, total, outLines: out, outTotal: out ? out.reduce((a, [, v]) => a + v, 0) : undefined, source: `College Scorecard (IPEDS), ${TUITION_YEAR} on-campus budget components` };
}
export const COAS = (): CoaSchool[] => SCHOOLS.map(coaOf).filter((c) => c.total > 0).sort((a, b) => a.name.localeCompare(b.name));
