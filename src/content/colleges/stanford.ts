import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('stanford');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;
const sat1500 = K.satPos('stanford', 1500)!;

export default defineCollege({
  slug: 'stanford',
  title: `Stanford Acceptance Rate 2026: ${K.rate('stanford')}, SAT Now Required`,
  description: `Stanford admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('stanford')}) and now requires the SAT or ACT. 2026 guide to the net price by family income and the budget.`,
  intro: `Stanford admitted ${K.rate('stanford')} of applicants for fall 2025, about 1 in ${K.oneIn('stanford')}, and families under $100,000 with typical assets pay no parent contribution.`,
  resume: `Stanford's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('stanford')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants, and ${K.num(c.enrolled!)} enrolled, per the Stanford Common Data Set 2025-2026. That class was the last to apply without a test, which makes its score range a picture of students who chose to report. Since applications for fall 2026 entry, the SAT or ACT is required; enrolled students who reported the SAT scored ${K.satRange('stanford')} in the middle half and ${K.actRange('stanford')} on the ACT. The standard ${cost.year} budget is ${K.sticker('stanford')} before travel. Aided families paid little in ${K.meta.years.net}: ${K.net('stanford', 1)} on average between $30,001 and $48,000 and ${K.net('stanford', 3)} between $75,001 and $110,000. Today, parents below $100,000 owe nothing and those below $150,000 see all tuition covered.`,
  body: (h) => `
<h2>The first Stanford class chosen with required scores</h2>
<p>Stanford reinstated its testing requirement starting with applications for fall 2026, so the freshmen who arrived in September 2026 are the first class admitted under the renewed rule. The figures above still describe the fall 2025 class, in which ${h.pct(L.scores!.pctSat!, 0)} of enrolled students reported an SAT and ${h.pct(L.scores!.pctAct!, 0)} an ACT. For now the median reported SAT is ${h.num(L.scores!.satComposite![1])}.</p>
<p>On our fitted curve, a 1,500 sits at about ${h.pct(sat1500, 0)} of reporting students, below the 25th percentile. Applicants self-report scores and send official reports only if they enroll; English proficiency tests cannot replace the SAT or ACT.</p>
${h.miniScore('stanford', 'SAT')}
<h2>Restrictive Early Action rules out MIT early</h2>
<p>Stanford's early round, due November 1, is not binding, but its restriction is strict. An REA applicant may not apply early to any other private US college, under Early Action, Restrictive Early Action, Early Decision or Early Notification, and may not use a binding plan at a public university. Stanford names MIT's non-binding Early Action as off limits. A student denied in December cannot reapply in Regular Decision, due January 5. For fall 2025, 573 students accepted a waiting-list place and 57 were admitted from it.</p>
${h.miniNet('stanford')}
<h2>What the $150,000 line covers on a quarter budget</h2>
<p>The ${cost.year} budget assumes three quarters, Autumn, Winter and Spring: ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.housingFood!)} for housing and food, a ${h.usd(cost.fees!)} fees allowance that includes the mandatory $843 health service fee, ${h.usd(cost.books!)} for books and ${h.usd(cost.personal!)} of personal costs. New students also pay a $525 orientation fee and a $250 document fee. Below $150,000 of parent income with typical assets, the expected contribution is low enough that grants cover all tuition charges; below $100,000 the parents owe nothing. Home equity and retirement savings are left out of the asset count, which helps families whose wealth sits in a house. Compare Stanford with ${h.c('mit', 'MIT')}, ${h.c('caltech', 'Caltech')} and ${h.c('harvard', 'Harvard')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'When did Stanford start requiring the SAT again?', a: 'Stanford reinstated its standardized testing requirement beginning with applications for fall 2026 entry, according to its Common Data Set 2025-2026. Applicants for fall 2027 must report an ACT or SAT score; they may self-report and send official results only if they enroll. English proficiency tests such as the TOEFL cannot be used in place of the SAT or ACT.' },
    { q: 'Can I apply Early Action to MIT and Stanford REA at the same time?', a: 'No. Stanford’s Restrictive Early Action policy forbids applying early to any other private US college or university, and Stanford names MIT’s Early Action as an example, even though MIT itself sets no limit. You may apply early to public universities if their plan is not binding. A student denied REA cannot reapply to Stanford that year.' },
    { q: 'What GPA did Stanford’s Class of 2029 have?', a: `The Common Data Set 2025-2026 reports an average high school GPA of ${L.gpa!.average} for first-year students who entered Stanford in fall 2025, based on the ${K.pct(L.gpa!.pctSubmitting!, 1)} of students who submitted a GPA. The figure describes students who enrolled, not a threshold that applicants must reach; the rest of the class did not report a GPA at all.` },
    { q: 'Is Stanford free for families earning under $100,000?', a: 'Parents with total income below $100,000 and typical assets are not expected to contribute toward educational costs at Stanford. Students still contribute from summer income, term-time work and their own savings. Between $100,000 and $150,000, the parent contribution is set low enough that all tuition charges are covered by need-based grants.' },
  ],
  related: ['college:mit', 'college:caltech', 'college:harvard', 'college:princeton', 'compare-colleges', 'net-price-calculator'],
});
