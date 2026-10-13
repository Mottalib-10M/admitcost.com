import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('pomona');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'pomona',
  title: `Pomona Acceptance Rate 2026: ${K.rate('pomona')}, Scores and Net Price`,
  description: `Pomona College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('pomona')}). Read the 2026-27 billed cost, free books and the average net price paid by income band.`,
  intro: `Pomona admitted ${K.rate('pomona')} of applicants for fall 2025, about 1 in ${K.oneIn('pomona')}, and from fall 2026 it hands every student books and supplies at no extra charge.`,
  resume: `Pomona College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025 (Class of 2029), an acceptance rate of ${K.rate('pomona')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. The record pool came during a permanent test-optional policy: ${K.pct(sc.pctSat!, 0)} of the enrolled class sent an SAT, with a middle 50% of ${K.satRange('pomona')}, and ${K.pct(sc.pctAct!, 0)} sent the ACT (${K.actRange('pomona')}). Billed charges for ${cost.year} come to ${K.sticker('pomona')} for tuition, fees, housing and food, before travel and personal costs. Pomona is need-blind for U.S. students, meets full demonstrated need and puts no loans in its aid offers. In ${K.meta.years.net} the federal average net price was ${K.net('pomona', 0)} for families under $30,000 and ${K.net('pomona', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>A Claremont college with a quarter of its offers made in December</h2>
<p>Pomona offers two binding rounds, Early Decision I on November 8 and Early Decision II on January 8, the same day as regular applications. For fall 2025, 1,656 students applied early and 227 were admitted. Those early offers count for more than their share suggests: 210 of the ${h.num(c.enrolled!)} students who enrolled came through Early Decision and 204 through the regular round, with the rest returning from a gap year. A student who is sure about Pomona gives up little by applying ED II, which allows another set of senior grades and one more test date.</p>
<p>The waiting list moved modestly: 1,017 students were offered a place, 716 accepted and 31 were admitted.</p>
${h.miniScore('pomona', 'SAT')}
<h2>Half the class applied without a score</h2>
<p>Pomona made test-optional admission permanent in 2023. In the Class of 2029, 48% submitted scores and 52% did not, and the college states plainly that submitting brings no advantage. Applicants who send the ACT must include the science section, which Pomona superscores across both ACT formats. The SAT range of ${h.satRange('pomona')} describes only the ${h.pct(sc.pctSat!, 0)} who chose the SAT; the median of ${h.num(s.sat!.p50!)} is the point where a score starts to add to the file rather than merely sit in it.</p>
<h2>Free books from fall 2026 and an aid offer without loans</h2>
<p>For ${cost.year} Pomona bills tuition of ${h.usd(cost.tuition!)}, fees of ${h.usd(cost.fees!)} and housing and food of ${h.usd(cost.housingFood!)}, for ${h.sticker('pomona')}. Travel and personal costs add $1,500 to $2,600, and medical insurance is billed unless waived. Starting in fall 2026, books and supplies come through the Access to Course Essentials program at no extra charge, so the budget carries no books line at all. Admission is need-blind for U.S. citizens, permanent residents and undocumented students who graduated from a U.S. high school, and aid meets full demonstrated need with grants and student jobs. The federal averages for ${h.meta.years.net} were ${h.net('pomona', 1)} for incomes between $30,001 and $48,000 and ${h.net('pomona', 2)} between $48,001 and $75,000.</p>
${h.miniNet('pomona')}
<h2>Pomona against other selective liberal arts colleges</h2>
<p>About a third of the Class of 2029 comes from California, which makes Pomona the West Coast counterpart of ${h.c('williams', 'Williams')}, ${h.c('swarthmore', 'Swarthmore')} and ${h.c('amherst', 'Amherst')}. Admit rates are close; the differences are in the early rounds and in who receives need-blind treatment, which the ${h.a('compare-colleges', 'comparison tool')} shows side by side.</p>`,
  faqs: [
    { q: 'What is Pomona College’s acceptance rate for the Class of 2029?', a: `Pomona admitted ${K.num(c.admitted)} of a record ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('pomona')}, according to its Common Data Set 2025-2026, and ${K.num(c.enrolled!)} enrolled. Early Decision accounted for 227 of the admits and 210 of the students who enrolled, so the early rounds filled about half of the class.` },
    { q: 'Is Pomona test-optional for students applying in 2026-27?', a: 'Yes. Pomona adopted a permanent test-optional policy in 2023, so SAT or ACT scores are not required and only self-reported scores are needed from those who send them. If you submit the ACT, Pomona requires the core test plus science and superscores the sections. In the Class of 2029, 52% of students enrolled without submitting scores.' },
    { q: 'Does Pomona charge for textbooks?', a: 'Not from fall 2026. Pomona’s financial aid office says that, starting with that semester, books and supplies are provided to all students through the Access to Course Essentials program at no additional charge, because the cost is built into the comprehensive fee. Aided students taking classes at other Claremont Colleges can appeal for up to $90 per course for those books.' },
  ],
  related: ['college:williams', 'college:swarthmore', 'college:amherst', 'college:stanford', 'compare-colleges', 'net-price-calculator'],
});
