import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('ucla');
const a = s.adm!;
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const inS = cost.inState!;
const outS = cost.outOfState!;
const gpa = s.latest!.gpa!;

export default defineCollege({
  slug: 'ucla',
  title: `UCLA Tuition 2026 and Acceptance Rate: ${K.rate('ucla')}, Net Price`,
  description: `UCLA admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} applicants for fall 2026 (${K.rate('ucla')}). Its 2026-27 budget is ${K.sticker('ucla')} for Californians and ${K.stickerOut('ucla')} for out-of-state students.`,
  intro: `UCLA offered admission to ${K.rate('ucla')} of its ${K.num(a.applicants!)} first-year applicants for fall 2026, and a nonresident pays ${K.usd(outS.total! - inS.total!)} more than a Californian for the same year.`,
  resume: `UCLA admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, an acceptance rate of ${K.rate('ucla')}, according to the University of California's preliminary snapshot of offers. For the class that entered in fall 2025, its Common Data Set 2025-2026 counts ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications and ${K.num(c.enrolled!)} enrolled students. Scores play no part: UCLA does not consider the SAT or ACT, and the enrolled class averaged a ${gpa.average} high school GPA. The ${cost.year} budget for a new student living on campus is ${K.sticker('ucla')} for a California resident and ${K.stickerOut('ucla')} for a nonresident, health insurance included. Aid narrows the resident figure sharply: in ${K.meta.years.net} the federal average net price was ${K.net('ucla', 0)} for families under $30,000 and ${K.net('ucla', 3)} between $75,001 and $110,000, and the Blue and Gold plan covers tuition for most California families earning up to $100,000.`,
  body: (h) => `
<h2>UCLA tuition in 2026-27: one budget, two prices</h2>
<p>A first-year student starting in fall 2026 pays UC systemwide tuition of ${h.usd(inS.tuition!)} and ${h.usd(inS.fees!)} of campus fees. On campus, the financial aid office adds ${h.usd(inS.housingFood!)} for housing and food, ${h.usd(inS.books!)} for books and supplies, ${h.usd(inS.travel!)} for transportation, ${h.usd(inS.personal!)} for personal costs and health insurance, which can be waived with other coverage. That is ${h.sticker('ucla')} for a Californian. A student from another state or country adds ${h.usd(outS.tuition! - inS.tuition!)} of Nonresident Supplemental Tuition, for ${h.stickerOut('ucla')}.</p>
<p>The tuition line is fixed at entry for up to six years. UCLA's own table shows the effect: a student who started in 2024-25 still pays $14,436 in systemwide tuition in 2026-27.</p>
${h.miniGap('ucla')}
<h2>Test-free, and a crowd of 4.0 students</h2>
<p>UCLA will not consider SAT or ACT scores for admission or scholarships, so there is no score range to aim at. What remains is the transcript: 58.8% of the fall 2025 class reported a 4.0 on the UC scale and the average was ${gpa.average}, which the UC snapshot confirms with a middle 50% of 4.20 to 4.30 among fall 2026 admits. With grades this compressed, the personal insight questions, the rigor of the courses and the context of the school carry the decision.</p>
<p>Residency shapes the class. Of the ${h.num(a.admitted!)} first-year admits for fall 2026, 9,109 were Californians, 4,793 came from other states and 2,001 from abroad. The waiting list was large and active for fall 2025: 20,563 offered, 13,612 accepted and 1,514 admitted.</p>
${h.miniNet('ucla')}
<h2>One application for nine campuses, no early round</h2>
<p>UCLA has no Early Decision or Early Action. Every applicant files the single UC application between October 1 and November 30, choosing as many UC campuses as they wish. California students in the top 9 percent of their school or the state are guaranteed a UC seat, though not necessarily at UCLA. Compare it with ${h.c('uc-berkeley', 'UC Berkeley')}, ${h.c('ucsd', 'UC San Diego')} and its private neighbor ${h.c('usc', 'USC')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How much is UCLA tuition for 2026-27?', a: `For new students in 2026-27, UCLA lists UC systemwide tuition of ${K.usd(inS.tuition!)} plus ${K.usd(inS.fees!)} in campus fees. Nonresidents add ${K.usd(outS.tuition! - inS.tuition!)} of Nonresident Supplemental Tuition. With on-campus housing, food, books, transportation, personal costs and health insurance, the budget is ${K.sticker('ucla')} for Californians and ${K.stickerOut('ucla')} for nonresidents, figures the Regents can still adjust.` },
    { q: 'What is UCLA’s acceptance rate for fall 2026?', a: `UC’s preliminary snapshot shows UCLA admitting ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, a rate of ${K.rate('ucla')}. For fall 2025 the Common Data Set gives ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications. The fall 2026 numbers can still change as waitlist offers are made.` },
    { q: 'Does UCLA look at SAT or ACT scores?', a: 'No. UCLA’s first-year requirements page says it will not consider SAT or ACT scores for admission or scholarship purposes. Scores sent by applicants may only be used as an alternative way to meet minimum UC requirements or for course placement after enrollment. The rule has applied to California applicants since fall 2023 and was extended to nonresidents.' },
    { q: 'Is UCLA free for low-income California students?', a: 'Tuition is, for most. Under the UC Blue and Gold commitment, most California families earning up to $100,000 receive enough grant and scholarship money to cover UC tuition. Housing and food are not included in that promise, but further grants often reduce them. Nonresident students are not covered by Blue and Gold.' },
  ],
  related: ['college:uc-berkeley', 'college:ucsd', 'college:usc', 'college:uc-irvine', 'compare-colleges', 'college-tuition'],
});
