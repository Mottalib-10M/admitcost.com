import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('yale');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;

export default defineCollege({
  slug: 'yale',
  title: `Yale Acceptance Rate 2026: ${K.rate('yale')} and the Real Net Price`,
  description: `Yale admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('yale')}). The 2026 guide covers the SAT range, net price by family income and the full ${cost.year} budget.`,
  intro: `Yale offered places to ${K.rate('yale')} of the students who applied for fall 2025, roughly 1 in ${K.oneIn('yale')}, and parents earning under $100,000 with typical assets owe nothing.`,
  resume: `Yale admitted ${K.rate('yale')} of first-year applicants for the class that entered in fall 2025 (Class of 2029): ${K.num(c.admitted)} offers from ${K.num(c.applicants)} applications, with ${K.num(c.enrolled!)} students enrolling, per the Yale Common Data Set 2025-2026. Federal data for the year before showed ${K.pct(s.admRate!, 2)}, so the door narrowed slightly. Enrolled students who reported the SAT scored ${K.satRange('yale')} in the middle half, and ${K.actRange('yale')} on the ACT. The ${cost.year} cost of attendance listed by the financial aid office adds up to ${K.sticker('yale')} before travel. Families on aid paid much less in ${K.meta.years.net}: ${K.net('yale', 0)} on average under $30,000 of income and ${K.net('yale', 3)} between $75,001 and $110,000. Under the current policy, families below $200,000 with typical assets get at least full tuition covered.`,
  body: (h) => `
<h2>Yale took away the AP and IB route</h2>
<p>The class that entered in fall 2025 applied under a test-flexible rule: an ACT, an SAT, a set of AP results or IB results all counted. That rule is gone. Anyone applying for fall 2027 must send the SAT or the ACT, and AP or IB scores can only be added on top. In the fall 2025 class, ${h.pct(L.scores!.pctSat!, 0)} of enrolled students sent an SAT and ${h.pct(L.scores!.pctAct!, 0)} an ACT, and some sent both. The SAT range below describes only the students who chose to report an SAT, under a rule that did not force anyone to.</p>
<p>With a middle half of ${h.satRange('yale')} and a median of ${h.num(L.scores!.satComposite![1])}, the scale is compressed at the top: a few dozen points separate the 25th and 75th percentiles. Scores above the range do not move an application into a different tier at a school that turns away about ${h.oneIn('yale')} applicants for every one it admits.</p>
${h.miniScore('yale', 'SAT')}
<h2>Single-Choice Early Action, and no edge for using it</h2>
<p>Yale's early round is Single-Choice Early Action, due November 1, with decisions in mid-December. It is not binding, but it rules out early applications to other private colleges. Yale states plainly that applying early brings no advantage in its review, and a student denied in December cannot try again in Regular Decision, due January 2. The waiting list is long and slow: 944 students were offered a spot for fall 2025 and 32 were finally admitted, according to the CDS.</p>
${h.miniNet('yale')}
<h2>A zero parent share that includes the plane ticket</h2>
<p>Yale's most generous award goes to families earning below $100,000 with typical assets. It covers tuition and fees, housing, food and travel, adds hospitalization coverage, and gives a $2,000 start-up grant in the first year. Up to $200,000, the scholarship covers at least tuition. Admission is need-blind for every applicant in the world, and aid offers never require a loan, which is why 88% of graduates leave without student debt. The ${cost.year} line items are ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.housingFood!)} for housing and food and ${h.usd(cost.personal!)} of personal costs, plus books and a small activity fee.</p>
<p>The federal averages above are for students who received aid in ${h.meta.years.net}, before the current thresholds. For a figure built on your own income and assets, Yale's calculator remains the reference. To weigh Yale against its closest rivals, see ${h.c('harvard', 'Harvard')}, ${h.c('princeton', 'Princeton')} and ${h.c('columbia', 'Columbia')}.</p>`,
  faqs: [
    { q: 'How many students did Yale admit for the Class of 2029?', a: `Yale admitted ${K.num(c.admitted)} students out of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('yale')}, and ${K.num(c.enrolled!)} of them enrolled. The counts come from Yale's Common Data Set 2025-2026. Another 32 students came off the waiting list, out of the 944 who had been offered a place on it.` },
    { q: 'Can I still use AP or IB scores instead of the SAT at Yale?', a: 'Not any more. Yale now requires every first-year and transfer applicant to submit the SAT or the ACT. AP and IB results may still be reported in the testing section, and Yale encourages it for students who took that coursework, but they no longer replace the SAT or ACT as they did under the test-flexible rule used for the fall 2025 class.' },
    { q: 'What does Yale cost for a family earning $150,000?', a: `Families earning below $200,000 with typical assets receive a Yale scholarship that covers at least full tuition, so the bill at $150,000 is limited to part of housing, food and personal costs. In ${K.meta.years.net}, aided families above $110,000 paid ${K.net('yale', 4)} on average, a band that mixes $150,000 with far higher incomes, while the ${cost.year} sticker price is ${K.sticker('yale')} before travel.` },
    { q: 'Does applying early to Yale improve the odds?', a: 'Yale says no. Its Single-Choice Early Action is reviewed with the same criteria as Regular Decision, and the admissions office states that early applicants get no advantage. The plan is non-binding, but it bars early applications to other private colleges, and a student denied in December cannot reapply in the January 2 regular round.' },
  ],
  related: ['college:harvard', 'college:princeton', 'college:columbia', 'college:brown', 'compare-colleges', 'net-price-calculator'],
});
