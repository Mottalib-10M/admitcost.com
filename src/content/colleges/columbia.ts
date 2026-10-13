import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('columbia');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;

export default defineCollege({
  slug: 'columbia',
  title: `Columbia Acceptance Rate 2026: ${K.rate('columbia')}, Early Decision Odds`,
  description: `Columbia admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('columbia')}). 2026 guide: Early Decision odds, the SAT range and the net price by family income.`,
  intro: `Columbia College and Columbia Engineering admitted ${K.rate('columbia')} of applicants for fall 2025, and Early Decision applicants were admitted at more than three times the rate of everyone else.`,
  resume: `Columbia's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('columbia')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants to Columbia College and Columbia Engineering, with ${K.num(c.enrolled!)} enrolling, per the Common Data Set 2025-26. Early Decision changed the picture: 14.0% of ED applicants got in, against 4.0% of the rest. Testing stays optional for students entering in fall 2027, then becomes required for the cycle that opens in August 2027, with a waiver for applicants who face challenges in meeting it. Enrolled students who reported the SAT scored ${K.satRange('columbia')} in the middle half. The ${cost.year} first-year budget is ${K.sticker('columbia')} before travel. In ${K.meta.years.net}, aided families paid ${K.net('columbia', 1)} on average between $30,001 and $48,000 and ${K.net('columbia', 3)} between $75,001 and $110,000; today families under $150,000 with typical assets attend tuition-free.`,
  body: (h) => `
<h2>The Early Decision gap at Columbia</h2>
<p>Columbia's early round binds you, and it is where a large share of the class is chosen. For fall 2025, 819 of 5,868 Early Decision applicants were admitted, 14.0%, against 2,127 of the other 53,743 applicants, 4.0%. The two pools are not the same students, so the gap is not a measure of how much ED alone helps. It does show where the seats go: ${h.pct(819 / c.admitted, 0)} of all offers were made in December. The deadline is November 1; the regular round closes January 1, with decisions in late March.</p>
<p>The commitment is real. If admitted in ED you withdraw every other application, which means accepting Columbia's aid offer without comparing it with another school's. The averages below show what aided families at each income level actually paid, the best check before signing.</p>
${h.miniNet('columbia')}
<h2>Test optional for one more year</h2>
<p>Students applying in the 2026-27 cycle may skip the SAT and ACT. From August 2027, for the 2027-28 cycle, Columbia College and Columbia Engineering require one of the two, with a waiver for applicants who cannot test. In the fall 2025 class only ${h.pct(L.scores!.pctSat!, 0)} of enrolled students reported an SAT, so the range of ${h.satRange('columbia')} describes about half of the class.</p>
${h.miniScore('columbia', 'SAT')}
<h2>Where applicants come from, and what it does to the odds</h2>
<p>New York residents had no advantage: 447 of 8,882 were admitted (5.0%), while other US applicants did slightly better at 2,092 of 35,349 (5.9%). International applicants, who are reviewed need-aware, were admitted at 2.6%, 407 out of 15,380. Domestic applicants are read need-blind, and Columbia meets full need with grants and work, no loans in the initial offer. The ${cost.year} first-year budget of ${h.sticker('columbia')} includes ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.fees!)} of fees and on-campus housing, which every first-year must use. Families earning under $66,000 owe no parent contribution. Students older or returning to school apply to Columbia School of General Studies, which publishes its own Common Data Set and is not counted here. For a binding round with the same Ivy pricing, compare ${h.c('upenn', 'Penn')} and ${h.c('brown', 'Brown')}.</p>`,
  faqs: [
    { q: 'Does Early Decision help at Columbia?', a: 'The admit rate is much higher in the early round. For fall 2025, Columbia admitted 819 of 5,868 Early Decision applicants (14.0%) and 2,127 of the remaining 53,743 (4.0%), based on Common Data Set counts. The early pool is a different group of students, so the gap is not a pure effect of the plan, and admitted ED students must enroll.' },
    { q: 'When will Columbia require the SAT again?', a: 'Columbia College and Columbia Engineering stay test optional for the 2026-27 admissions cycle, the students who will start in fall 2027. Starting in August 2027, for the 2027-28 cycle, first-year and transfer applicants must send the ACT or SAT. Students who face real barriers to testing can ask for a waiver and are not disadvantaged for it.' },
    { q: 'Is Columbia free for families under $150,000?', a: 'Tuition is. Students from families with calculated incomes below $150,000 and typical assets attend Columbia College or Columbia Engineering tuition-free, and below $66,000 parents are expected to contribute $0. Typical assets means up to about $250,000, retirement accounts excluded. Housing, food and personal costs above the parent share are covered by grants and a student work contribution.' },
    { q: 'Are international students need-blind at Columbia?', a: `No. Columbia reads applications need-blind for US citizens, eligible noncitizens and undocumented students living in the US, but not for other international applicants. Those admitted with funding still have their full need met. For fall 2025, international applicants were admitted at 2.6%, below the ${K.rate('columbia')} overall rate, according to the Common Data Set.` },
  ],
  related: ['college:upenn', 'college:brown', 'college:cornell', 'college:yale', 'compare-colleges', 'net-price-calculator'],
});
