import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('dartmouth');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;

export default defineCollege({
  slug: 'dartmouth',
  title: `Dartmouth Acceptance Rate 2026: ${K.rate('dartmouth')}, Early Decision Edge`,
  description: `Dartmouth admitted ${K.rate('dartmouth')} of applicants for fall 2025, and 21.6% of Early Decision applicants. 2026 guide: SAT range, need-blind aid for all, the ${cost.year} price.`,
  intro: `Dartmouth admitted ${K.rate('dartmouth')} of its applicants for fall 2025, and nearly half of the offers went to students who applied Early Decision.`,
  resume: `Dartmouth's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('dartmouth')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants and ${K.num(c.enrolled!)} enrolled, per the Dartmouth Common Data Set 2025-2026. It is the smallest applicant pool in the Ivy League pages of this site, and the one where Early Decision weighs most: 768 of the offers came from the binding round. Testing is required, with alternatives for students schooled abroad. Enrolled students who reported the SAT scored ${K.satRange('dartmouth')} in the middle half. The ${cost.year} budget for three terms is ${K.sticker('dartmouth')}. Families on aid paid ${K.net('dartmouth', 1)} on average between $30,001 and $48,000 in ${K.meta.years.net}, and ${K.net('dartmouth', 3)} between $75,001 and $110,000. Families under $125,000 with typical assets now owe no parent contribution.`,
  body: (h) => `
<h2>Early Decision fills almost half the class</h2>
<p>For fall 2025, 768 of 3,552 Early Decision applicants were admitted, 21.6%. Among the other 24,678 applicants, 931 got an offer, 3.8%. The early round produced 45% of all admissions. The two groups differ, so the ratio is not a pure effect of the plan, but it shows how much of the class is settled before January. Early Decision is binding and due November 1, with answers in mid-December; Regular Decision closes January 2.</p>
${h.miniNet('dartmouth')}
<h2>Need-blind for every country</h2>
<p>Since January 2022, Dartmouth has applied need-blind admission to international citizens as well as US applicants, and it meets full demonstrated need without loans. That matters for its pool: 8,163 applicants for fall 2025 lived outside the United States, and 154 of them enrolled. Only 516 applicants came from New Hampshire, and 27 enrolled. The current aid rules set a $0 parent contribution below $125,000 of income with typical assets and full tuition between $125,000 and $175,000. The federal figures above are from ${h.meta.years.net}, when the thresholds were lower.</p>
<h2>Testing rules that depend on where you go to school</h2>
<p>Students at a US high school must send the SAT or the ACT. Students schooled abroad may instead send three AP exams, IB predicted or final results, A-Level results, or a national exam such as the French Baccalaureate, WASSCE, CBSE or ICSE. In the fall 2025 class, ${h.pct(L.scores!.pctSat!, 0)} reported the SAT and ${h.pct(L.scores!.pctAct!, 0)} the ACT.</p>
${h.miniScore('dartmouth', 'SAT')}
<h2>Paying by the term on the D-Plan</h2>
<p>Dartmouth runs year-round on quarters, the D-Plan, which allows students flexibility in which terms they enroll. The ${cost.year} budget of ${h.sticker('dartmouth')} assumes the standard three terms: ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.housingFood!)} for housing and food, ${h.usd(cost.fees!)} of fees and ${h.usd(cost.books! + cost.personal!)} for books and personal costs. One term of tuition is $23,899, and both the cost of attendance and aid are prorated when a student enrolls for two or four terms in a year. Compare it with ${h.c('brown', 'Brown')} and ${h.c('cornell', 'Cornell')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How much does Early Decision help at Dartmouth?', a: 'In the Common Data Set 2025-2026, Dartmouth admitted 768 of 3,552 Early Decision applicants, 21.6%, against 931 of the other 24,678 applicants, 3.8%. Early Decision supplied 45% of all offers for fall 2025. The plan is binding, the deadline is November 1, and the two pools are different students, so the gap is not a pure effect of applying early.' },
    { q: 'Is Dartmouth need-blind for international students?', a: 'Yes. Dartmouth extended need-blind admission to all international citizens in January 2022, starting with the Class of 2026, and meets 100% of demonstrated need for every admitted student without loans. When it made the change, Dartmouth counted itself the sixth US college to combine universal need-blind admission with full need. For fall 2025, 8,163 applicants came from outside the United States and 154 enrolled.' },
    { q: 'Can I apply to Dartmouth with IB or A-Level results instead of the SAT?', a: 'Only if you attend high school outside the United States. Those students may use three AP exams, IB predicted or final scores, A-Level results or an equivalent national exam to meet the testing requirement. Students at US high schools must submit the SAT or the ACT, superscored across sittings, according to the Dartmouth admissions testing policy.' },
    { q: 'What does Dartmouth cost for a family earning $150,000?', a: `Families earning between $125,000 and $175,000 with typical assets receive scholarships or grants covering full tuition, so the family share is limited to part of housing, food and personal costs within the ${cost.year} budget of ${K.sticker('dartmouth')}. Below $125,000, the parent contribution is $0. Students still work during the year and in summer.` },
  ],
  related: ['college:brown', 'college:cornell', 'college:yale', 'college:princeton', 'compare-colleges', 'net-price-calculator'],
});
