import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('princeton');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;
const sat1450 = K.satPos('princeton', 1450)!;

export default defineCollege({
  slug: 'princeton',
  title: `Princeton Acceptance Rate 2026: ${K.rate('princeton')}, SAT Optional to 2028`,
  description: `Princeton admitted ${K.rate('princeton')} of applicants for fall 2025 and stays test optional for fall 2027 entry. 2026 figures: SAT range, net price by income, ${cost.year} cost.`,
  intro: `Princeton admitted ${K.rate('princeton')} of applicants for fall 2025, and it is the last year a test-free application is possible: scores return for students entering in fall 2028.`,
  resume: `Princeton's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('princeton')}, with ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants and ${K.num(c.enrolled!)} enrolled, according to the Princeton Common Data Set 2025-2026. Students applying now, for fall 2027, can still leave the SAT and ACT off without a penalty; the requirement comes back one cycle later. Among enrolled students who did report the SAT, the middle half scored ${K.satRange('princeton')}, and ${K.actRange('princeton')} on the ACT. The ${cost.year} cost of attendance is ${K.sticker('princeton')} before transportation. Aided families paid very little in ${K.meta.years.net}: an average of ${K.net('princeton', 1)} between $30,001 and $48,000 and ${K.net('princeton', 3)} between $75,001 and $110,000. Princeton's own table puts the typical family contribution at $0 for a $150,000 income with modest assets.`,
  body: (h) => `
<h2>One last test-optional cycle, then scores are back</h2>
<p>Princeton paused its testing requirement in 2020 and kept the pause for several years. Applicants for fall 2027 are the final group allowed to apply without a score; for fall 2028 the SAT or ACT is required again, except for active military personnel. The university gave its reason: in five years of data, students who had sent scores did better academically at Princeton than those who had not. In the fall 2025 class, ${h.pct(L.scores!.pctSat!, 0)} of enrolled students reported an SAT and ${h.pct(L.scores!.pctAct!, 0)} an ACT.</p>
<p>The range ${h.satRange('princeton')} only covers students who chose to report a score, so it may sit higher than the whole class would. A 1,450 falls at about ${h.pct(sat1450, 0)} of reporting students on our curve, below the range. For this cycle, the question is whether such a score adds anything, since Princeton says an application without scores is complete and not at a disadvantage.</p>
${h.miniScore('princeton', 'SAT')}
<h2>New Jersey residents get no head start</h2>
<p>The Common Data Set splits the pool by home address. For fall 2025, 229 of 4,602 New Jersey applicants were admitted (5.0%), against 1,398 of 27,134 from other states (5.2%) and 241 of 10,567 international applicants (2.3%). Being local does not help at Princeton, while applying from abroad means odds less than half the domestic rate. There is no binding round either: Single-Choice Early Action closes November 1, Regular Decision January 1, and 36 students were taken from a waiting list of 1,086 who accepted a spot.</p>
${h.miniNet('princeton')}
<h2>A price that falls to zero well into the middle class</h2>
<p>Princeton is need-blind, meets full need with grants and does not expect students to borrow; 89% of recent seniors graduated debt free. Its published family contribution table reads $0 at $150,000 of income, $12,500 at $200,000 and $25,000 at $250,000, for families with assets under $175,000. The ${cost.year} budget behind those figures combines ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.housingFood!)} for housing and food, ${h.usd(cost.fees!)} of fees and ${h.usd(cost.books! + cost.personal!)} for books and personal costs.</p>
<p>For the Class of 2030, which arrived in September 2026, 71% of students qualified for aid and 25% for Pell grants. Compare the result with ${h.c('yale', 'Yale')} and ${h.c('harvard', 'Harvard')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Is Princeton still test optional for the Class of 2031?', a: 'Yes. Students applying in the 2026-27 cycle to enter Princeton in fall 2027 may apply without the SAT or ACT and are not at a disadvantage. Princeton requires the SAT or ACT again for the 2027-28 cycle, meaning students who will enter in fall 2028, with an exemption for active military personnel who cannot test on schedule.' },
    { q: 'What GPA do admitted Princeton students have?', a: `The Common Data Set 2025-2026 reports an average high school GPA of ${L.gpa!.average} for first-year students who entered in fall 2025, with ${K.pct(L.gpa!.pctSubmitting!, 0)} of them reporting a GPA. On the 4.0 scale, 72% of the class had exactly 4.0. Grades are near the ceiling for nearly every admit, so courses and recommendations do the sorting.` },
    { q: 'Does Princeton favor New Jersey applicants?', a: 'No measurable edge appears in its own numbers. For fall 2025, Princeton admitted 229 of 4,602 New Jersey applicants (5.0%) and 1,398 of 27,134 applicants from other states (5.2%), according to the Common Data Set. International applicants were admitted at 2.3%, 241 out of 10,567, well below either domestic group.' },
    { q: 'How much does Princeton cost for a family earning $200,000?', a: `Princeton's 2026-27 aid table shows an average family contribution of $12,500 at $200,000 of income, for US families with assets under $175,000 and one child in college. That compares with a ${cost.year} cost of attendance of ${K.sticker('princeton')} before travel. Families with more assets or several incomes should use the net price calculator for a closer figure.` },
  ],
  related: ['college:harvard', 'college:yale', 'college:columbia', 'college:upenn', 'compare-colleges', 'what-is-a-good-sat-score'],
});
