import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('smu');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'smu',
  title: `SMU Acceptance Rate 2026: ${K.rate('smu')}, Early Decision and Cost`,
  description: `SMU admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('smu')}), and most Early Decision applicants. See the ${cost.year} cost and the net price by income band.`,
  intro: `SMU admitted ${K.rate('smu')} of applicants for fall 2025, and four out of five Early Decision applicants.`,
  resume: `Southern Methodist University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('smu')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Early Decision admitted a far larger share, 424 of 528 applicants. SMU is fully test-optional, and so few enrolled students sent scores, ${K.pct(sc.pctSat!, 0)} for the SAT, that the published range of ${K.satRange('smu')} describes a small minority. The ${cost.year} cost of attendance is ${K.sticker('smu')}, with fees higher than at most private universities. SMU's federal net prices are among the highest on this site for low incomes: in ${K.meta.years.net} aided families under $30,000 paid an average of ${K.net('smu', 0)}, and families between $75,001 and $110,000 paid ${K.net('smu', 3)}, before any merit award.`,
  body: (h) => `
<h2>Early Decision changes the odds more than anywhere</h2>
<p>SMU's Common Data Set reports 424 admits from 528 Early Decision applicants, a rate of about four in five, against ${h.rate('smu')} overall. Few universities show a gap this wide. The pool is small because SMU also offers a non-binding Early Action on the same November 1 date, and most students use it; Early Decision II and regular decision close on January 15. A student who is sure about SMU and comfortable with its price gains a lot by committing early.</p>
<h2>Texans and everyone else</h2>
<p>Texas and out-of-state applicants are close in number, but out-of-state applicants were admitted at a higher rate for fall 2025: 5,859 of 9,805, against 5,071 of 12,254 Texans. International applicants faced the lowest rate. Every first-year enters as a pre-major in Dedman College, whatever the intended major, except in art, film, dance, music and theatre, where an audition or portfolio decides. The waiting list moved too: a few thousand places were offered for fall 2025, about a thousand students accepted one, and 243 were admitted from it, so accepting a place and confirming interest is worth the effort.</p>
${h.miniNet('smu')}
<h2>Paying for SMU</h2>
<p>SMU publishes no general full-need promise. Access SMU meets full need, with extra merit scholarships, for Pell-eligible Texas residents with family income of $100,000 or less who also earn an SMU academic scholarship. Outside that group, the federal averages show what aided families paid: ${h.net('smu', 1)} between $30,001 and $48,000, ${h.net('smu', 2)} between $48,001 and $75,000, and ${h.net('smu', 4)} above $110,000. The ${cost.year} budget of ${h.sticker('smu')} includes ${h.usd(cost.tuition!)} in tuition and ${h.usd(cost.fees!)} in fees.</p>
${h.miniGrant('smu')}
<h2>Comparisons in Texas</h2>
<p>Families looking at SMU usually also look at ${h.c('tcu', 'TCU')} and ${h.c('baylor', 'Baylor')}, two other private universities in Texas with large merit programs, and at ${h.c('ut-austin', 'UT Austin')} or ${h.c('texas-am', 'Texas A&M')} for resident prices. The ${h.a('compare-colleges', 'comparison tool')} sets them side by side at your income.</p>`,
  faqs: [
    { q: 'What is SMU’s acceptance rate for fall 2025?', a: `Southern Methodist University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('smu')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Its Early Decision round admitted 424 of 528 applicants, a far higher share, from a small early pool.` },
    { q: 'Is SMU test optional?', a: 'Yes. SMU is fully test-optional and says it gives no preference to applicants who submit scores. If scores are sent, SMU superscores the SAT and ACT and uses them for admission and scholarships. Fewer than one enrolled student in ten sent an SAT for fall 2025, so the published ranges describe a small group.' },
    { q: 'What is Access SMU?', a: 'Access SMU is SMU’s program for Pell-eligible Texas residents who enter as full-time first-years directly from high school with family income of $100,000 or less and an SMU academic scholarship. For them, SMU adds merit scholarships until full need is met, provided the FAFSA and CSS Profile are filed on time.' },
  ],
  related: ['college:tcu', 'college:baylor', 'college:ut-austin', 'college:texas-am', 'compare-colleges', 'cost-of-attendance'],
});
