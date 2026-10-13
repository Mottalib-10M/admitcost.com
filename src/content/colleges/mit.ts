import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('mit');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;

export default defineCollege({
  slug: 'mit',
  title: `MIT Acceptance Rate 2026: ${K.rate('mit')}, Early Action and Net Price`,
  description: `MIT admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('mit')}). 2026 guide: Early Action odds, the SAT range and the tuition-free aid line at $200,000.`,
  intro: `MIT admitted ${K.rate('mit')} of applicants for fall 2025, and since 2025-26 families earning under $200,000 with typical assets attend tuition-free.`,
  resume: `MIT's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('mit')}: ${K.num(c.admitted)} offers out of ${K.num(c.applicants)} applications, and ${K.num(c.enrolled!)} students enrolled, according to MIT's Common Data Set 2025-26. MIT requires the SAT or ACT, and it shows in the class: ${K.pct(L.scores!.pctSat!, 0)} of enrolled students reported an SAT, with a middle half of ${K.satRange('mit')}, and the ACT range was ${K.actRange('mit')}. The ${cost.year} cost of attendance is ${K.sticker('mit')} before travel, and every first-year student lives on campus, so housing is part of the bill for all. In ${K.meta.years.net}, aided families paid ${K.net('mit', 1)} on average between $30,001 and $48,000 and ${K.net('mit', 2)} between $48,001 and $75,000. Since 2025-26, parents earning below $100,000 with typical assets pay nothing, and under $200,000 tuition is covered.`,
  body: (h) => `
<h2>Early Action that defers more than it admits</h2>
<p>MIT's early round is Early Action with no restriction, due November 1. For the Class of 2029, 12,052 students applied early and 721 were admitted, 6.0%. Far more, 7,486, were deferred to the regular round, where 175 of them were finally admitted. Regular Action then admitted 603 students out of 24,715 considered, deferred students included. A deferral is the most common early outcome, and it ends in an offer for few. MIT allows one application per entry year, early or regular, and Regular Action is due January 4. There is no Early Decision.</p>
<p>The international pool is the hardest door: 136 of 6,926 international applicants were admitted, 2.0%, against 1,198 of 22,355 US citizens and permanent residents, 5.4%. The waiting list barely moved for fall 2025, with 561 students offered a place and 10 admitted.</p>
${h.miniScore('mit', 'SAT')}
<h2>A math score at the ceiling</h2>
<p>Testing is required at MIT, and the fall 2025 class shows it: ${h.pct(L.scores!.pctSat!, 0)} reported an SAT and ${h.pct(L.scores!.pctAct!, 0)} an ACT. The section scores tell the story. Enrolled students had an SAT Math range of ${h.num(L.scores!.satMath![0])} to ${h.num(L.scores!.satMath![2])}, with a median of ${h.num(L.scores!.satMath![1])}, while reading and writing ran ${h.num(L.scores!.satEbrw![0])} to ${h.num(L.scores!.satEbrw![2])}. Tests must be taken before November 30 for Early Action and December 31 for Regular Action, and MIT superscores all sittings you report.</p>
${h.miniNet('mit')}
<h2>The ${cost.year} bill and who pays it</h2>
<p>MIT's budget is ${h.usd(cost.tuition!)} of tuition, a ${h.usd(cost.fees!)} student life fee, ${h.usd(cost.housingFood!)} for housing and food, ${h.usd(cost.books!)} for books and supplies and ${h.usd(cost.personal!)} of personal costs, for ${h.sticker('mit')}. Housing is set at the most expensive double room and food at the 21-meal plan, the levels MIT uses to set aid. MIT says even full payers attend at about half of what the education costs the institute. Admission is need-blind, aid meets full demonstrated need for four years, and the income lines are $100,000 for a zero parent share and $200,000 for free tuition. Federal data put earnings ten years after entry at ${h.usd(s.earn10!)}. Compare MIT with ${h.c('caltech', 'Caltech')} and ${h.c('stanford', 'Stanford')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What are the odds of getting into MIT Early Action?', a: 'For the Class of 2029, MIT admitted 721 of 12,052 Early Action applicants, 6.0%, and deferred 7,486 to Regular Action, where 175 of them were admitted. Early Action is non-binding and non-restrictive, so you may apply early elsewhere, but MIT allows only one application per entry year, either early or regular.' },
    { q: 'Is MIT tuition free for families under $200,000?', a: 'Yes, starting with the 2025-26 academic year. Students whose family income is under $200,000 a year with typical assets receive an MIT Scholarship that covers at least tuition, and families below $100,000 are not expected to contribute anything toward the full cost. Students still contribute through summer earnings and part-time work during the year.' },
    { q: 'How hard is MIT for international applicants?', a: 'Much harder than for US applicants. For the Class of 2029, MIT admitted 136 of 6,926 international applicants, 2.0%, compared with 1,198 of 22,355 US citizens and permanent residents, 5.4%, according to MIT admissions statistics. Admitted international students were about a tenth of all offers that year.' },
    { q: 'Does MIT require the SAT for 2027 applicants?', a: 'Yes. MIT requires the SAT or the ACT from all first-year and transfer applicants. You self-report every official sitting, including future ones, and MIT considers the superscore. Tests must be taken before November 30 for Early Action or December 31 for Regular Action. A practice test or a self-calculated superscore should not be listed as a sitting.' },
  ],
  related: ['college:caltech', 'college:stanford', 'college:harvard', 'college:princeton', 'compare-colleges', 'what-is-a-good-sat-score'],
});
