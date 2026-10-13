import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('cornell');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;
const ny = (cost as unknown as { contractCollegeNyResident: { tuition: number; total: number } }).contractCollegeNyResident;

export default defineCollege({
  slug: 'cornell',
  title: `Cornell Acceptance Rate 2026: ${K.rate('cornell')}, New York Tuition Edge`,
  description: `Cornell admitted ${K.rate('cornell')} of applicants for fall 2025; New York residents in contract colleges pay ${K.usd(ny.tuition)} tuition. 2026 SAT range and net price by family income.`,
  intro: `Cornell admitted ${K.rate('cornell')} of applicants for fall 2025, the highest rate in the Ivy League, and New York students in its contract colleges pay about a third less tuition.`,
  resume: `Cornell's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('cornell')}: ${K.num(c.admitted)} admitted from ${K.num(c.applicants)} applicants, with ${K.num(c.enrolled!)} enrolling, according to Cornell's Common Data Set 2025-2026. That class applied before scores were required; students applying now must send the SAT or ACT. Enrolled students who reported the SAT scored ${K.satRange('cornell')} in the middle half. The ${cost.year} cost of attendance in the endowed colleges is ${K.sticker('cornell')} before travel, but New York residents in the state contract colleges pay ${K.usd(ny.tuition)} of tuition and ${K.usd(ny.total)} in total. In ${K.meta.years.net}, aided families paid ${K.net('cornell', 1)} on average between $30,001 and $48,000 and ${K.net('cornell', 3)} between $75,001 and $110,000. Under $75,000, aid offers carry no loans and no parent contribution.`,
  body: (h) => `
<h2>Separate front doors and a state contract</h2>
<p>An application to Cornell goes to one undergraduate college or school, each with its own requirements and its own selectivity. Several of them are New York State contract colleges, created by state law, run by Cornell and funded in part under contract with the state: Agriculture and Life Sciences, Human Ecology, Industrial and Labor Relations, the Dyson School and the Brooks School's Bachelor of Science programs. A New York resident in one of them paid ${h.usd(ny.tuition)} of tuition for ${cost.year} instead of ${h.usd(cost.tuition!)}, a difference of ${h.usd(cost.tuition! - ny.tuition)} a year. Students from other states pay the endowed rate wherever they enroll.</p>
<p>That structure shows in the residency table. For fall 2025, 1,720 of 12,978 New York applicants were admitted, 13.3%, against 3,693 of 40,979 from other states, 9.0%, and 664 of 18,566 international applicants, 3.6%.</p>
${h.miniNet('cornell')}
<h2>Early Decision and a very long waiting list</h2>
<p>The binding round accounted for 1,889 of the ${h.num(c.admitted)} offers: 18.8% of Early Decision applicants were admitted, against 6.7% of everyone else. Early Decision closes November 1 and Regular Decision January 2. The waiting list is far longer than at its Ivy peers, with 9,720 students offered a place and 6,598 accepting it for fall 2025; 254 were admitted from it.</p>
<h2>Scores come back for fall 2027</h2>
<p>Only ${h.pct(L.scores!.pctSat!, 0)} of the fall 2025 class reported an SAT and ${h.pct(L.scores!.pctAct!, 0)} an ACT, because that class could apply without one. Every first-year applicant now submits the SAT or ACT; Cornell superscores both and does not require the ACT Science section.</p>
${h.miniScore('cornell', 'SAT')}
<h2>Small loans above $75,000</h2>
<p>Cornell meets full demonstrated need, but unlike most of its peers it still includes a modest loan above $75,000 of income: at most $2,000 a year up to $125,000, $4,000 up to $175,000 and $6,000 above that, next to a $5,000 work-study award. Under $75,000 with typical assets, the expected family contribution is $0 and the loan is $0. Compare the result with ${h.c('dartmouth', 'Dartmouth')}, ${h.c('upenn', 'Penn')} or ${h.c('columbia', 'Columbia')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How much cheaper is Cornell for New York residents?', a: `Only in the New York State contract colleges: Agriculture and Life Sciences, Human Ecology, ILR, the Dyson School and Brooks School BS programs. There, a New York resident pays ${K.usd(ny.tuition)} of tuition for ${cost.year}, against ${K.usd(cost.tuition!)} in the endowed colleges, and the full budget is ${K.usd(ny.total)} instead of ${K.sticker('cornell')}. Arts and Sciences, Engineering and the Nolan School of Hotel Administration charge everyone the endowed rate.` },
    { q: 'Do New York applicants have better odds at Cornell?', a: 'They were admitted at a higher rate for fall 2025: 1,720 of 12,978 New York applicants, 13.3%, compared with 9.0% for applicants from other states and 3.6% for international applicants, according to Cornell’s Common Data Set. Cornell does not publish admit rates by college, so the source of the gap cannot be read from its documents.' },
    { q: 'Is Early Decision worth it at Cornell?', a: 'The numbers favor it. For fall 2025, Cornell admitted 1,889 of 10,057 Early Decision applicants, 18.8%, and 4,188 of the remaining 62,466, 6.7%. Early Decision is binding and due November 1. The early pool differs from the regular one, so part of the gap reflects who applies early rather than the plan itself.' },
    { q: 'Does Cornell financial aid include loans?', a: 'Below $75,000 of family income with typical assets, no: Cornell offers grants and a $5,000 work-study award, with $0 expected from the student and parents. Above $75,000, aid includes a capped loan of $2,000, $4,000 or $6,000 a year depending on income. Students may choose to borrow instead of working, since both count as self-help.' },
  ],
  related: ['college:columbia', 'college:upenn', 'college:dartmouth', 'college:brown', 'compare-colleges', 'net-price-calculator'],
});
