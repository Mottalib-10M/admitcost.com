import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('harvard');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sat1500 = K.satPos('harvard', 1500)!;

export default defineCollege({
  slug: 'harvard',
  title: `Harvard Acceptance Rate 2026: ${K.rate('harvard')}, SAT Range, Net Price`,
  description: `Harvard admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('harvard')}). See the 2026 net price by family income, the SAT range and the ${cost.year} cost of attendance.`,
  intro: `Harvard took ${K.rate('harvard')} of its applicants for the class that entered in fall 2025, about 1 in ${K.oneIn('harvard')}; families under $100,000 pay nothing toward the bill.`,
  resume: `Harvard's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('harvard')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants, and ${K.num(c.enrolled!)} enrolled, according to the university's Common Data Set 2025-2026. The figure many sites still show, ${K.pct(s.admRate!, 2)}, describes the previous class. Testing is required again: the middle half of enrolled students who sent the SAT scored ${K.satRange('harvard')}, the ACT ${K.actRange('harvard')}. The sticker price for ${cost.year} is ${K.sticker('harvard')} before travel, yet families on federal aid paid far less: in ${K.meta.years.net} the average net price was ${K.net('harvard', 0)} for incomes under $30,000 and ${K.net('harvard', 2)} for incomes between $48,001 and $75,000. Since 2025-26, parents earning under $100,000 are expected to contribute nothing, and aid covers at least full tuition up to $200,000.`,
  body: (h) => `
<h2>Why the 2029 figure is higher than the 2028 one</h2>
<p>Harvard's rate went up, not down: from ${h.pct(s.admRate!, 2)} for the fall 2024 class to ${h.rate('harvard')} for fall 2025. The cause is the applicant count, which fell to ${h.num(c.applicants)} the first year scores were required again, while the number of offers barely moved, to ${h.num(c.admitted)}. Fewer students applied without a score to show. For a student with a strong SAT this changes little, since the competition inside the pool did not soften. Harvard published no Class of 2030 counts in the spring of 2026, so the 2025-26 Common Data Set is the newest official figure.</p>
${h.miniScore('harvard', 'SAT')}
<h2>Reading the score range at Harvard</h2>
<p>A middle 50% of ${h.satRange('harvard')} means a quarter of the enrolled class scored below its lower end. On our fitted curve a 1,500 sits at about ${h.pct(sat1500, 0)} of the class, inside the range and still competitive on paper. With an admit rate this low the label stays "reach" for every applicant, including those at 1,600: with about ${h.oneIn('harvard')} applicants for every offer, far more students with scores inside this range are turned down than admitted, and the reader of an application spends more time on courses, recommendations and essays than on the score. The score is a threshold to clear, not a ticket.</p>
<h2>What families actually paid</h2>
<p>The price that matters is the one after grants. Harvard gives need-based aid only, meets the full demonstrated need of every admitted student, international students included, and never requires a loan. The federal Scorecard shows the result: an average of ${h.net('harvard', 1)} for families between $30,001 and $48,000 and ${h.net('harvard', 3)} between $75,001 and $110,000 in ${h.meta.years.net}, against a federal cost of attendance of ${h.usd(s.coa!)} that year. Above $110,000 the average climbs to ${h.net('harvard', 4)}, because that band runs from comfortable to very high incomes.</p>
${h.miniNet('harvard')}
<p>The ${cost.year} budget published by the financial aid office adds up tuition, fees, housing and food (${h.usd(cost.tuition! + cost.fees! + cost.housingFood!)} billed by the university), then books and personal costs, for ${h.sticker('harvard')}. Travel of zero to $5,000 comes on top, and the student health insurance plan is billed unless a family plan already covers the student. Harvard's own calculator, linked under the tool above, gives a figure for your household's assets and siblings, which the federal averages cannot.</p>
<h2>Applying early</h2>
<p>Harvard has no binding Early Decision. Its early round is Restrictive Early Action, due November 1, which forbids applying early to other private colleges but leaves the final choice open until May. Regular decision applications are due January 1. Compare the price and the odds with ${h.c('yale', 'Yale')}, ${h.c('princeton', 'Princeton')} and ${h.c('stanford', 'Stanford')}, or put the three side by side in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is Harvard’s acceptance rate for the Class of 2029?', a: `For the class that entered in fall 2025, Harvard admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants, an acceptance rate of ${K.rate('harvard')}, according to its Common Data Set 2025-2026. ${K.num(c.enrolled!)} of the admitted students enrolled. The rate for the previous class, fall 2024, was ${K.pct(s.admRate!, 2)} in the federal IPEDS data.` },
    { q: 'Does Harvard require the SAT or ACT again?', a: 'Yes. Harvard ended its test-optional period with the class that entered in fall 2025 and requires the SAT or the ACT. When neither test can be taken, AP or IB results, A-Level results or a national leaving exam can stand in; English tests such as TOEFL or Duolingo cannot. The rule applies to everyone applying in the 2026-27 cycle.' },
    { q: 'How much does Harvard cost for a family earning $90,000?', a: `Under Harvard's rules from 2025-26, parents earning below $100,000 with typical assets are expected to pay nothing, so the student's own summer work and term-time job cover the remaining share. In ${K.meta.years.net} the federal average net price for families between $75,001 and $110,000 was ${K.net('harvard', 3)}, before the higher thresholds took effect.` },
    { q: 'Is Harvard Early Action binding?', a: 'No. Harvard’s early plan is Restrictive Early Action: you apply by November 1, hear in mid-December and still have until May 1 to decide. The restriction is that you may not apply early to another private college at the same time, though early applications to public universities and non-binding foreign programs are generally allowed.' },
  ],
  related: ['college:yale', 'college:princeton', 'college:stanford', 'college:mit', 'compare-colleges', 'net-price-calculator'],
});
