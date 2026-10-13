import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('rochester');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'rochester',
  title: `Rochester Acceptance Rate 2026: ${K.rate('rochester')}, SAT Range, Net Price`,
  description: `The University of Rochester admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('rochester')}). See its ${cost.year} cost, merit aid and net price by family income.`,
  intro: `The University of Rochester admitted ${K.rate('rochester')} of applicants for fall 2025, and about three admits in four received a merit scholarship.`,
  resume: `The University of Rochester's acceptance rate for the class that entered in fall 2025 is ${K.rate('rochester')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} first-year applicants, with ${K.num(c.enrolled!)} enrolling, according to its Common Data Set 2025-2026. That is a far higher rate than most private research universities of its standing, and only about one admit in seven enrolls. Testing is optional and only ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('rochester')}. The ${cost.year} residential cost of attendance is ${K.sticker('rochester')}, with textbooks included in tuition. Federal figures for ${K.meta.years.net} put the average net price at ${K.net('rochester', 0)} for families under $30,000, ${K.net('rochester', 2)} between $48,001 and $75,000 and ${K.net('rochester', 4)} above $110,000, a band where merit scholarships keep the average well under the sticker.`,
  body: (h) => `
<h2>A selective school that admits four in ten</h2>
<p>Rochester's admit rate looks generous next to universities with similar research budgets, and the reason is yield: most admitted students choose another school, so Rochester admits many more than it can seat. For an applicant this is good news, since a strong student has a realistic path in, but it also means the university competes for its admits with scholarships. The fall 2025 class enrolled ${h.num(c.enrolled!)} of ${h.num(c.admitted)} admits.</p>
<h2>Merit aid is the rule, not the exception</h2>
<p>Unlike most universities in its range, Rochester gives merit scholarships widely: about three in four admitted students received one for 2026-27, averaging around $20,000, and every admitted applicant is considered. Applying by the non-binding December 1 priority scholarship deadline gives the strongest consideration. That is why the federal net price for families above $110,000, ${h.net('rochester', 4)}, sits well below the ${h.usd(s.coa!)} cost of attendance of ${h.meta.years.coa}: many high-income families paid less than the sticker thanks to merit awards.</p>
${h.miniGrant('rochester')}
<h2>The test-flexible option</h2>
<p>Rochester lets applicants choose between test-optional and test-flexible. Test-flexible means sending any of the SAT, the ACT, or two or more results from AP, IB, A-Level or other national exams, which suits students whose strongest evidence is a set of exam grades rather than a single test. The published SAT range of ${h.satRange('rochester')} covers only ${h.pct(sc.pctSat!, 0)} of the class, so it is a weak guide for the many who send nothing.</p>
${h.miniScore('rochester', 'SAT')}
<h2>Early Decision and the budget</h2>
<p>Almost a third of the entering class applied Early Decision, and in fall 2025 Rochester admitted 472 of 1,129 Early Decision applicants. The ${cost.year} budget of ${h.sticker('rochester')} has no separate books line because textbooks and course materials are folded into tuition (${h.usd(cost.tuition!)}). Compare with ${h.c('case-western', 'Case Western Reserve')} and ${h.c('carnegie-mellon', 'Carnegie Mellon')}, two research universities with different aid models.</p>`,
  faqs: [
    { q: 'What is the University of Rochester acceptance rate for fall 2025?', a: `The University of Rochester admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('rochester')}, according to its Common Data Set 2025-2026. Only ${K.num(c.enrolled!)} of the admitted students enrolled, which is why the university admits a larger share than many of its peers.` },
    { q: 'Does Rochester give merit scholarships?', a: 'Yes, widely. About 75% of students admitted for 2026-27 received a merit scholarship, averaging around $20,000, and every admitted applicant is considered automatically. Applying by the non-binding December 1 priority scholarship deadline gives the highest scholarship consideration, which matters most to families who will not qualify for need-based aid.' },
    { q: 'What does test-flexible mean at Rochester?', a: 'When applying, students choose to be read test-optional or test-flexible. Test-flexible applicants send an SAT, an ACT, or two or more exam results such as AP, IB or A-Level scores, and self-reported results are accepted. Test-optional applicants send none, and Rochester states that they are not disadvantaged in review.' },
  ],
  related: ['college:case-western', 'college:carnegie-mellon', 'college:syracuse', 'college:cornell', 'compare-colleges', 'cost-of-attendance'],
});
