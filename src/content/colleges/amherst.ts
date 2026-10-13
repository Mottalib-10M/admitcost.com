import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('amherst');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'amherst',
  title: `Amherst Acceptance Rate 2026: ${K.rate('amherst')} and Need-Blind Aid`,
  description: `Amherst admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025, or ${K.rate('amherst')}. The 2026-27 budget, the optional SAT range and the net price paid by income band.`,
  intro: `Amherst took ${K.rate('amherst')} of its fall 2025 applicants and reads every application without regard to a family's ability to pay, including those from abroad.`,
  resume: `Amherst College admitted ${K.rate('amherst')} of applicants for the class that entered in fall 2025 (Class of 2029): ${K.num(c.admitted)} out of ${K.num(c.applicants)}, with ${K.num(c.enrolled!)} enrolling, according to its Common Data Set 2025-2026. Testing is optional for every applicant; the ${K.pct(sc.pctSat!, 0)} of the class who sent an SAT scored ${K.satRange('amherst')} in the middle half and ACT senders ${K.actRange('amherst')}. The ${cost.year} budget is ${K.sticker('amherst')}: tuition, housing, meals and the activities fee billed by the college plus an allowance for personal costs, with travel extra and health insurance billed unless waived. Aid is need-based only and admission is need-blind for domestic and international students. In ${K.meta.years.net} families under $30,000 paid an average of ${K.net('amherst', 0)}, and families between $48,001 and $75,000 paid ${K.net('amherst', 2)}.`,
  body: (h) => `
<h2>Need-blind for the whole world, and what that does to the pool</h2>
<p>Amherst reads international applications without looking at the family's finances, and the applicant pool shows it. Of the ${h.num(c.applicants)} applications for fall 2025, 6,346 came from international students, about four in ten, and only 92 of them were admitted. Massachusetts residents filed 1,061 applications and received 123 offers; students from other states filed 8,412 and received 1,007. For an international student the published rate overstates the odds; for a domestic student it understates them a little.</p>
<p>Early Decision is the only early round, due November 9, 2026 for the next class, with regular applications due January 5, 2027. For fall 2025, 971 students applied early and 216 were admitted, and Amherst says about 17 percent of its admitted students come through that round.</p>
${h.miniScore('amherst', 'SAT')}
<h2>Scores at a college where most students sent none</h2>
<p>Only ${h.pct(sc.pctSat!, 0)} of the entering class submitted an SAT and ${h.pct(sc.pctAct!, 0)} an ACT. The range of ${h.satRange('amherst')} therefore describes a minority that chose to show a strong result. Amherst accepts self-reported scores and treats the ACT science section as optional. A score close to the median of ${h.num(s.sat!.p50!)} supports an application; a score well below the lower end is usually better withheld, since students without scores were admitted on transcripts, essays and recommendations.</p>
<h2>A comprehensive fee that does not cover the full cost</h2>
<p>For ${cost.year} Amherst bills tuition of ${h.usd(cost.tuition!)}, housing and meals of ${h.usd(cost.housingFood!)} and ${h.usd(cost.fees!)} of student activities fees, then adds ${h.usd(cost.personal!)} for personal expenses in its budget, for ${h.sticker('amherst')}. The college says a year of education actually costs it about $140,000; the endowment covers the difference for every student. Aid is never based on merit. Amherst calls itself a no-loan school, and more than 80% of the Class of 2025 graduated with no student debt. The federal averages for ${h.meta.years.net} were ${h.net('amherst', 1)} for incomes between $30,001 and $48,000, ${h.net('amherst', 3)} between $75,001 and $110,000 and ${h.net('amherst', 4)} above that.</p>
${h.miniNet('amherst')}
<h2>Amherst beside Williams and Wellesley</h2>
<p>Amherst and ${h.c('williams', 'Williams')} admit at similar rates and charge within a few thousand dollars of each other, yet Williams adds free tuition up to $200K while Amherst extends need-blind reading abroad. ${h.c('wellesley', 'Wellesley')} and ${h.c('bowdoin', 'Bowdoin')} complete the comparison in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How many students applied to Amherst for fall 2025?', a: `Amherst received ${K.num(c.applicants)} first-year applications for fall 2025 and admitted ${K.num(c.admitted)}, an acceptance rate of ${K.rate('amherst')} in its Common Data Set 2025-2026. Of the applicants, 6,346 were international students, of whom 92 were admitted. ${K.num(c.enrolled!)} students enrolled, and 44 were taken from the waiting list.` },
    { q: 'Is Amherst need-blind for international students?', a: 'Yes. Amherst’s financial aid page says its admission policy is need-blind for all students, domestic and international, and that it meets each admitted student’s full calculated need with need-based aid only. There are no merit scholarships. Being need-blind does not make international admission easier: only 92 of 6,346 international applicants were admitted for fall 2025.' },
    { q: 'When is the Amherst Early Decision deadline for fall 2027?', a: 'Amherst’s first-year application page lists November 9, 2026 as the Early Decision deadline, with decisions in early to mid December. Regular Decision applications are due January 5, 2027. Early Decision is binding, and Amherst has no Early Action round; about 17 percent of its admitted students apply through Early Decision.' },
  ],
  related: ['college:williams', 'college:wellesley', 'college:bowdoin', 'college:swarthmore', 'compare-colleges', 'net-price-calculator'],
});
