import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('uc-berkeley');
const a = s.adm!;
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const inS = cost.inState!;
const outS = cost.outOfState!;
const gpa = s.latest!.gpa!;

export default defineCollege({
  slug: 'uc-berkeley',
  title: `UC Berkeley Acceptance Rate 2026: ${K.rate('uc-berkeley')} and Real Cost`,
  description: `UC Berkeley admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026 (${K.rate('uc-berkeley')}). See the 2026-27 cost for residents and nonresidents and net price.`,
  intro: `UC Berkeley admitted ${K.rate('uc-berkeley')} of first-year applicants for fall 2026, and a new Californian living on campus is budgeted ${K.sticker('uc-berkeley')} for 2026-27.`,
  resume: `UC Berkeley admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, an acceptance rate of ${K.rate('uc-berkeley')}, in the University of California's preliminary snapshot of offers. The fall 2025 class, the newest in its Common Data Set, drew ${K.num(c.applicants)} applications for ${K.num(c.admitted)} offers and ${K.num(c.enrolled!)} enrolled students. Berkeley does not use the SAT or ACT; enrolled students averaged a ${gpa.average} high school GPA. For ${cost.year} the financial aid office budgets ${K.sticker('uc-berkeley')} for a new California resident in a residence hall, health plan included, and ${K.stickerOut('uc-berkeley')} for a new nonresident. Federal figures for ${K.meta.years.net} show what aided families paid: ${K.net('uc-berkeley', 0)} on average under $30,000 and ${K.net('uc-berkeley', 2)} between $48,001 and $75,000, and most California families earning up to $100,000 have tuition covered under Blue and Gold.`,
  body: (h) => `
<h2>Why Berkeley costs more than UCLA for a Californian</h2>
<p>Berkeley's budget for a student starting in 2026-27 lists ${h.usd(inS.tuition!)} of tuition and fees, ${h.usd(inS.housingFood!)} for a residence hall room with the meal plan and the Student Health Insurance Plan, which can be waived with equivalent coverage. Books, transportation and personal costs bring the total to ${h.sticker('uc-berkeley')}, against ${h.sticker('ucla')} at ${h.c('ucla', 'UCLA')}. The gap comes from housing, campus fees and the health plan, not from systemwide tuition, which is the same at every campus. Nonresidents add the Nonresident Supplemental Tuition, ${h.usd(outS.total! - inS.total!)} a year.</p>
<p>Tuition is fixed by entering cohort. On Berkeley's own table, a student who began in 2025-26 pays $17,560 in tuition and fees for 2026-27, versus $18,214 for a new student.</p>
${h.miniGap('uc-berkeley')}
<h2>An admission decision without a single test score</h2>
<p>Berkeley, like every UC campus, ignores the SAT and ACT for admission and for Regents and Chancellor's scholarships. The record is in the grades: 39.8% of the fall 2025 class had a 4.0 and 50.1% between 3.75 and 3.99, and the UC snapshot puts the middle half of fall 2026 admits between 4.16 and 4.28 on the weighted, capped UC scale. Two students with identical grades are separated by course rigor, the personal insight questions and context.</p>
<p>The fall 2026 offers split as follows: 9,445 to Californians, 3,155 to students from other states and 1,367 to international students. The fall 2025 waiting list was unusual: 9,102 were offered a place and 6,479 accepted, but Berkeley reported none admitted from it as of May 2026.</p>
${h.miniNet('uc-berkeley')}
<h2>Applying: one form, November 30, no early round</h2>
<p>There is no Early Decision or Early Action at Berkeley. Applicants file the UC application between October 1 and November 30 and can list several campuses at once; California students in the top 9 percent of their school or the state are guaranteed a seat somewhere in the UC system. Weigh Berkeley against ${h.c('ucsd', 'UC San Diego')}, ${h.c('stanford', 'Stanford')} and ${h.c('uc-davis', 'UC Davis')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is UC Berkeley’s acceptance rate for fall 2026?', a: `In the University of California’s preliminary snapshot, UC Berkeley admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, a rate of ${K.rate('uc-berkeley')}. Its Common Data Set for fall 2025 shows ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications. Californians received 9,445 of the fall 2026 first-year offers.` },
    { q: 'How much does UC Berkeley cost per year for an out-of-state student?', a: `For a new nonresident in a residence hall in 2026-27, the budget is ${K.stickerOut('uc-berkeley')}: the ${K.sticker('uc-berkeley')} resident cost of attendance plus ${K.usd(outS.total! - inS.total!)} of Nonresident Supplemental Tuition. That total includes the student health plan, which can be waived with equivalent coverage. Blue and Gold tuition coverage does not apply to nonresidents.` },
    { q: 'Does UC Berkeley accept SAT scores?', a: 'Berkeley accepts them only for limited uses. The UC Regents ended the use of SAT and ACT scores in admission decisions and Regents and Chancellor’s scholarships, a test-blind rule in place since fall 2023 for California applicants and extended to nonresidents. Scores can still help meet minimum UC eligibility, the statewide guarantee or course placement after enrollment.' },
  ],
  related: ['college:ucla', 'college:ucsd', 'college:stanford', 'college:uc-davis', 'compare-colleges', 'net-price-calculator'],
});
