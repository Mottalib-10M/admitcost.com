import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('caltech');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;

export default defineCollege({
  slug: 'caltech',
  title: `Caltech Acceptance Rate 2026: ${K.rate('caltech')}, a Class of ${K.num(c.enrolled!)}`,
  description: `Caltech admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('caltech')}) to fill a class of ${K.num(c.enrolled!)}. 2026 SAT scores, net price by family income and the full cost.`,
  intro: `Caltech admitted ${K.rate('caltech')} of applicants for fall 2025 and enrolled only ${K.num(c.enrolled!)} first-year students in all, from 136 men and 112 women.`,
  resume: `Caltech's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('caltech')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants, and ${K.num(c.enrolled!)} enrolled, according to the Caltech Common Data Set 2025-26. The federal figure for the year before was ${K.pct(s.admRate!, 2)}, on a larger pool. The SAT or ACT is required; Caltech reports section scores only, so the composite of ${K.satRange('caltech')} is an approximation from the section ranges, and the ACT range is ${K.actRange('caltech')}. The ${cost.year} cost of attendance is ${K.sticker('caltech')}, health insurance aside. In ${K.meta.years.net}, aided families under $48,000 paid ${K.net('caltech', 1)} on average and families between $75,001 and $110,000 paid ${K.net('caltech', 3)}. Most families under $100,000 now get a no-loan package covering tuition, fees, housing and food.`,
  body: (h) => `
<h2>A freshman class of ${h.num(c.enrolled!)}, and a rate that rose</h2>
<p>Caltech's whole entering class in fall 2025 was ${h.num(c.enrolled!)} students: 136 men and 112 women. Caltech received ${h.num(c.applicants)} applications for that class and made ${h.num(c.admitted)} offers, an admit rate of ${h.rate('caltech')}, above the federal ${h.pct(s.admRate!, 2)} reported for the fall 2024 class. Of those admitted, ${h.pct(c.enrolled! / c.admitted, 0)} chose to enroll.</p>
<p>Restrictive Early Action, due November 1, 2026, is non-binding: admitted students have until May 1 to decide and can compare aid offers from other schools. Caltech says most of its admitted students applied in Regular Decision, which closes January 4, 2027. The waiting list is nearly closed; for fall 2025, 211 students accepted a place and 1 was admitted.</p>
${h.miniScore('caltech', 'SAT')}
<h2>Scores at the top of both scales</h2>
<p>Enrolled students who sent the SAT had a Math range of ${h.num(L.scores!.satMath![0])} to ${h.num(L.scores!.satMath![2])} and a reading and writing range of ${h.num(L.scores!.satEbrw![0])} to ${h.num(L.scores!.satEbrw![2])}; ${h.pct(L.scores!.pctSat!, 0)} reported the SAT and ${h.pct(L.scores!.pctAct!, 0)} the ACT. Applicants who took AP or IB exams are asked to send those scores as well. With about ${h.oneIn('caltech')} applicants per offer, these ranges show what enrolled students brought, not a score that earns an offer.</p>
${h.miniNet('caltech')}
<h2>Full need, but loans above $100,000</h2>
<p>Caltech meets 100% of demonstrated need and gives no merit scholarships. Its packages can include loans: under $100,000 of income with typical assets, most students get a no-loan offer covering tuition, fees, housing and food, and under $200,000 aid typically covers tuition. Domestic applicants are read need-blind, including undocumented and DACA students from US high schools; international applicants are need-aware because aid funds for them are limited. The ${cost.year} budget is ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.fees!)} of fees and ${h.usd(cost.housingFood!)} for housing and food, plus books and personal costs. The student health plan, $5,388 for those without comparable coverage, can be added to the aid budget on request. Compare Caltech with ${h.c('mit', 'MIT')} and ${h.c('stanford', 'Stanford')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How many students does Caltech admit each year?', a: `For the class that entered in fall 2025, Caltech admitted ${K.num(c.admitted)} students out of ${K.num(c.applicants)} applicants, and ${K.num(c.enrolled!)} of them enrolled, according to the Caltech Common Data Set 2025-26. That is an acceptance rate of ${K.rate('caltech')}. Only one student was admitted from a waiting list of 211 who had accepted a place.` },
    { q: 'Is Caltech need-blind for international students?', a: 'No. Caltech admits domestic students need-blind, including undocumented and DACA students who graduate from a US high school, but it is need-aware for international applicants because its financial aid funds for them are limited. All admitted students who apply for aid still have 100% of their demonstrated need met, through grants, work-study and loans.' },
    { q: 'Does Caltech give merit scholarships?', a: 'No. Caltech awards aid only on financial need, with no merit scholarships, and students are encouraged to apply for outside awards. For the incoming fall 2026 class, the average grant was just under $69,000 and 20% of first-year students were Pell eligible. Families under $100,000 with typical assets usually get a package without loans.' },
    { q: 'Is Caltech Early Action binding?', a: 'No. Caltech’s Restrictive Early Action, due November 1, 2026, lets admitted students wait until May 1, 2027 to decide and compare financial aid offers from other schools. The restriction limits early applications elsewhere. Caltech notes that most of its admitted students applied in Regular Decision, due January 4, 2027, with decisions in mid-March.' },
  ],
  related: ['college:mit', 'college:stanford', 'college:princeton', 'college:harvard', 'compare-colleges', 'what-is-a-good-sat-score'],
});
