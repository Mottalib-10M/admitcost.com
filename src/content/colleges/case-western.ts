import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('case-western');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'case-western',
  title: `Case Western Acceptance Rate 2026: ${K.rate('case-western')}, SAT and Net Price`,
  description: `Case Western Reserve admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('case-western')}). See its ${cost.year} cost, the SAT range and the 2026 net price by family income.`,
  intro: `Case Western Reserve admitted ${K.rate('case-western')} of applicants for fall 2025, and its Early Decision round admitted a smaller share than the pool as a whole.`,
  resume: `In its newest cycle, Case Western Reserve University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('case-western')}, according to its Common Data Set 2025-2026, yet only ${K.num(c.enrolled!)} enrolled. Testing is optional; about half of the enrolled class sent an SAT, with a middle 50% of ${K.satRange('case-western')}, and the ACT range was ${K.actRange('case-western')}. The ${cost.year} residential cost of attendance is ${K.sticker('case-western')} before travel. Its federal net prices are flatter across incomes than at most private universities: in ${K.meta.years.net} families under $30,000 paid an average of ${K.net('case-western', 0)} and families between $75,001 and $110,000 paid ${K.net('case-western', 3)}, while merit scholarships and full-tuition competitions also reach students from families well above the need-based bands.`,
  body: (h) => `
<h2>Early Decision is not the easy door here</h2>
<p>At most private universities, binding Early Decision admits a larger share than the regular round. Case Western's Common Data Set shows the opposite for fall 2025: 263 of 1,053 Early Decision I applicants were admitted, a lower share than the overall ${h.rate('case-western')}. The likely reason is that the strongest applicants use the non-binding Early Action round, also on November 1, to keep their options open, while the university admits generously across the whole pool and accepts that most admits go elsewhere. The waiting list is real too: 688 students were admitted from it for fall 2025.</p>
${h.miniScore('case-western', 'SAT')}
<h2>Four rounds and a pre-professional track</h2>
<p>CWRU runs Early Action and Early Decision I on November 1, Early Decision II and regular decision on January 15, and a December 1 deadline for its Pre-Professional Scholars Program, which links undergraduate admission to a later place in its medical, dental, law or social work schools. Students aiming for that track apply earlier than the regular round and should check its requirements on the admissions site.</p>
<h2>A net price that changes little with income</h2>
<p>The federal figures for ${h.meta.years.net} show a narrow spread in the lower bands: ${h.net('case-western', 0)} under $30,000, ${h.net('case-western', 1)} between $30,001 and $48,000, ${h.net('case-western', 2)} between $48,001 and $75,000. That pattern is typical of universities that combine need-based grants with merit awards and expect a family contribution even at low incomes. Above $110,000 the average was ${h.net('case-western', 4)}. The financial aid offer arrives with the admission decision, which makes comparing offers easier in March.</p>
${h.miniNet('case-western')}
<h2>The budget and the nursing fee</h2>
<p>The ${cost.year} budget of ${h.sticker('case-western')} combines tuition of ${h.usd(cost.tuition!)}, fees and ${h.usd(cost.housingFood!)} for housing and food; nursing students pay an additional fee. Compare with ${h.c('rochester', 'Rochester')}, ${h.c('carnegie-mellon', 'Carnegie Mellon')} and ${h.c('ohio-state', 'Ohio State')} at your income in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is Case Western Reserve’s acceptance rate for fall 2025?', a: `Case Western Reserve admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('case-western')}, according to its Common Data Set 2025-2026. Only ${K.num(c.enrolled!)} enrolled, so the university admits far more students than it seats, and 688 were taken from the waiting list.` },
    { q: 'Is Early Decision easier at Case Western?', a: 'Not on the fall 2025 counts. Case Western admitted 263 of 1,053 Early Decision I applicants, a smaller share than its overall rate. Many strong applicants use the non-binding Early Action round on November 1 instead, which leaves them free to compare aid offers, and the university reads both early pools in December.' },
    { q: 'How much does Case Western cost in 2026-27?', a: `The ${cost.year} residential cost of attendance at Case Western Reserve is ${K.sticker('case-western')} before travel, with tuition of ${K.usd(cost.tuition!)} and ${K.usd(cost.housingFood!)} for housing and food. Nursing students pay an extra fee. The aid offer comes with the admission decision, including any merit scholarship.` },
  ],
  related: ['college:rochester', 'college:carnegie-mellon', 'college:ohio-state', 'college:northeastern', 'compare-colleges', 'acceptance-rates'],
});
