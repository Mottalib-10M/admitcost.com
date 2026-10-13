import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('usf');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'usf',
  title: `USF Acceptance Rate 2026: ${K.rate('usf')}, SAT Minimums and Cost`,
  description: `USF admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025 (${K.rate('usf')}). See its minimum test scores, the ${cost.year} cost and the net price paid by income.`,
  intro: `USF admitted ${K.rate('usf')} of first-year applicants for fall 2025, and sets minimum SAT and ACT section scores for admission.`,
  resume: `The University of South Florida admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('usf')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. USF requires an SAT, ACT or CLT score, superscores across dates and sets minimum section scores; the middle 50% SAT of the enrolled class was ${K.satRange('usf')}. It also recalculates every applicant's GPA from core academic courses with extra weight for advanced classes. The ${cost.year} on-campus budget is ${K.sticker('usf')} for Florida residents and ${K.stickerOut('usf')} for nonresidents. On federal aid, residents paid very little: the average net price in ${K.meta.years.net} was ${K.net('usf', 0)} under $30,000, ${K.net('usf', 2)} between $48,001 and $75,000 and ${K.net('usf', 4)} above $110,000, housing and food included.`,
  body: (h) => `
<h2>Minimum scores, and a GPA rebuilt from core courses</h2>
<p>USF is one of the few universities on this site that publishes floors rather than ranges: an applicant needs at least 490 in SAT reading and writing and 480 in math, or ACT section scores of 19 in reading, 17 in English and 19 in math. Above those floors, the real competition sits much higher, and the fall 2025 enrolled middle 50% was ${h.satRange('usf')}. USF does not take the GPA printed on the transcript at face value. It recalculates it from core academic courses only, adding a full point for AP, IB, AICE and dual enrollment courses and half a point for honors, so the course load counts as much as the grades.</p>
${h.miniScore('usf', 'SAT')}
<h2>Fall is the hard term</h2>
<p>USF admits students for summer and for fall, and the two pools are not alike. Its admitted-student profile for 2026 shows fall admits with a middle 50% SAT of 1290 to 1420 and weighted GPAs of 4.13 to 4.58, while summer admits were at 1140 to 1230 and 3.71 to 4.29. A student whose record sits between the two can be offered a summer start, which leads to the same degree.</p>
<h2>Deadlines that matter for scholarships</h2>
<p>For fall 2027, Early Action closes on November 2, 2026, with decisions in December; regular decision closes on December 16, with decisions in February, and applications stay open until March 1. Automatic merit scholarship consideration needs a complete application by January 15, 2027.</p>
${h.miniGap('usf')}
<h2>The price for residents and nonresidents</h2>
<p>The ${cost.year} budget is ${h.sticker('usf')} for Floridians and ${h.stickerOut('usf')} for nonresidents, most of it billed by USF. Florida residents with federal aid paid ${h.net('usf', 1)} on average between $30,001 and $48,000 and ${h.net('usf', 3)} between $75,001 and $110,000 in ${h.meta.years.net}. Families comparing Florida's public universities can put USF next to ${h.c('ucf', 'UCF')}, ${h.c('uf', 'UF')} and ${h.c('fsu', 'Florida State')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is USF’s acceptance rate for fall 2025?', a: `The University of South Florida admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('usf')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Fall is its most competitive entry term; some students are offered a summer start instead.` },
    { q: 'What are USF’s minimum SAT and ACT scores?', a: 'USF requires at least 490 in SAT Reading and Writing and 480 in SAT Math, or ACT scores of 19 in Reading, 17 in English and 19 in Math. It superscores, taking the highest section scores across all test dates, and also accepts the CLT. Admitted students usually score well above these minimums.' },
    { q: 'How does USF calculate my GPA?', a: 'USF recalculates the high school GPA from core academic courses only, English, math, science, social science and world languages. It adds one quality point for AP, IB, AICE and dual enrollment courses and half a point for honors courses passed with a C or better, so two students with the same transcript GPA can end up with different USF GPAs.' },
  ],
  related: ['college:ucf', 'college:uf', 'college:fsu', 'college:university-of-miami', 'compare-colleges', 'what-is-a-good-sat-score'],
});
