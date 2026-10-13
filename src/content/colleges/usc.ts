import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('usc');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'usc',
  title: `USC Tuition 2026 and Acceptance Rate: ${K.rate('usc')}, Net Price`,
  description: `USC tuition for 2026-27 is ${K.usd(cost.tuition!)} and the full cost of attendance ${K.sticker('usc')}. Fall 2025 admit rate ${K.rate('usc')}, the SAT range and what families paid by income band.`,
  intro: `USC charges ${K.usd(cost.tuition!)} in tuition for ${cost.year}, yet families earning $80,000 or less with typical assets pay none of it; ${K.rate('usc')} of applicants got in for fall 2025.`,
  resume: `USC's tuition for ${cost.year} is ${K.usd(cost.tuition!)}, and the full on-campus cost of attendance published by its financial aid office is ${K.sticker('usc')}, with housing, food, books, transportation and personal costs. Admission is the other hurdle: for the class that entered in fall 2025, USC admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants, an acceptance rate of ${K.rate('usc')}, according to its Common Data Set 2025-2026. Testing is optional, and only ${K.pct(sc.pctSat!, 0)} of the enrolled class sent an SAT, whose middle 50% was ${K.satRange('usc')}. The price after grants is far below the sticker for most families on aid: in ${K.meta.years.net} the federal average net price was ${K.net('usc', 0)} for incomes under $30,000, ${K.net('usc', 2)} between $48,001 and $75,000 and ${K.net('usc', 4)} for families above $110,000 a year.`,
  body: (h) => `
<h2>A $100,000 sticker with a tuition-free line under $80,000</h2>
<p>USC is one of the private universities whose published budget now crosses six figures: ${h.sticker('usc')} for ${cost.year}, up from the 2025-26 budget, plus a one-time new student fee in the first semester. The tuition line alone, ${h.usd(cost.tuition!)}, is what most search results quote. For a large share of applicants it is not the price. Since the class that entered in 2020, students from American families earning $80,000 a year or less, with typical assets, attend tuition free; housing and food are then covered by need-based grants as far as the aid formula allows.</p>
<p>The federal figures show what that means in practice. Families in the $30,001 to $48,000 band paid an average of ${h.net('usc', 1)} in ${h.meta.years.net}, a fraction of the ${h.usd(s.coa!)} cost of attendance of that year. Between $75,001 and $110,000 the average rose to ${h.net('usc', 3)}, and above $110,000 it reached ${h.net('usc', 4)}, a band where many families receive little need-based aid and some receive merit scholarships instead.</p>
${h.miniNet('usc')}
<h2>Who gets in: Californians, out-of-state students and the score question</h2>
<p>USC's Common Data Set splits its offers in a way few schools publish. Of the ${h.num(c.admitted)} students admitted for fall 2025, roughly four in ten were California residents, a little over a third came from other states and about a quarter from abroad; of the ${h.num(c.enrolled!)} who enrolled, ${h.num(1701)} were Californians. Residency does not change the price at a private university, but it shows that USC draws heavily from its home state even without a resident tuition.</p>
<p>The score ranges deserve care. Because testing is optional, the SAT range of ${h.satRange('usc')} describes the ${h.pct(sc.pctSat!, 0)} of the class who chose to send a score, and the ACT range of ${h.actRange('usc')} only ${h.pct(sc.pctAct!, 0)}. Those students are, on average, the ones whose scores helped them. A score near the bottom of the range is often better left out; a score at or above ${h.num(s.sat!.p75)} reinforces an application.</p>
${h.miniScore('usc', 'SAT')}
<h2>Early Decision, Early Action and the arts</h2>
<p>USC now offers both a binding Early Decision and a non-binding Early Action on November 1 for most majors, with regular applications due January 10. Students applying to dance, drama or music cannot use the early rounds and apply by December 1 with an audition. The World Bachelor in Business takes applications only in November. Compare the offer with ${h.c('ucla', 'UCLA')}, its public neighbor, and with ${h.c('nyu', 'NYU')}, another private university whose tuition promise starts at a different income, in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How much is USC tuition for 2026-27?', a: `USC’s financial aid office lists tuition of ${K.usd(cost.tuition!)} for ${cost.year} for 12 to 18 units over two semesters, plus ${K.usd(cost.fees!)} in fees. With housing, food, books, transportation and personal costs, the on-campus cost of attendance is ${K.sticker('usc')}, before a one-time fee for new students in the first semester.` },
    { q: 'Is USC free for families earning under $80,000?', a: 'Tuition is. USC states that students from U.S. families with an annual income of $80,000 or less and typical assets attend tuition free, a policy in place for first-year students since fall 2020. Housing, food and other costs are not automatically free, but need-based grants usually cover a large part of them for families in that income range.' },
    { q: 'What is USC’s acceptance rate for fall 2025?', a: `For the class that entered in fall 2025, USC admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants, an acceptance rate of ${K.rate('usc')}, according to its Common Data Set 2025-2026. ${K.num(c.enrolled!)} students enrolled. The federal figure for the previous class, fall 2024, was ${K.pct(s.admRate!, 2)} in IPEDS.` },
    { q: 'Does USC require the SAT or ACT?', a: `No. USC is test-optional for current applicants and superscores the SAT and ACT by section when scores are sent, but it accepts only official scores from the testing agencies. Only ${K.pct(sc.pctSat!, 0)} of the fall 2025 class submitted an SAT, so the published range describes a minority of enrolled students.` },
  ],
  related: ['college:ucla', 'college:nyu', 'college:stanford', 'college:pepperdine', 'compare-colleges', 'college-tuition'],
});
