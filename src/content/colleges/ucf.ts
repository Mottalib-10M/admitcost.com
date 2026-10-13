import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('ucf');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'ucf',
  title: `UCF Acceptance Rate 2026: ${K.rate('ucf')}, SAT Range and Florida Cost`,
  description: `UCF admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025 (${K.rate('ucf')}). See the ${cost.year} cost for Floridians and nonresidents and the net price paid.`,
  intro: `UCF admitted ${K.rate('ucf')} of first-year applicants for fall 2025, and nine in ten of its new students are Floridians.`,
  resume: `The University of Central Florida admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('ucf')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. UCF requires the SAT, ACT or CLT, and ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('ucf')}; the average high school GPA, on Florida's weighted scale, was ${K.num(s.latest!.gpa!.average, 2)}. The ${cost.year} on-campus budget is ${K.sticker('ucf')} for Florida residents and ${K.stickerOut('ucf')} for nonresidents, the difference coming almost entirely from tuition. For residents on federal aid the price is low: in ${K.meta.years.net} the average net price was ${K.net('ucf', 0)} for families under $30,000, ${K.net('ucf', 2)} between $48,001 and $75,000 and ${K.net('ucf', 4)} above $110,000, including housing and food.`,
  body: (h) => `
<h2>A Florida university, admitted by Floridians</h2>
<p>UCF is one of the largest universities in the country, and its first-year class is overwhelmingly local: of ${h.num(c.enrolled!)} students who enrolled in fall 2025, 7,417 were Florida residents. Floridians were also admitted at a much higher rate than students from other states, 21,823 of 46,049 against 3,124 of 11,215. Students who come from elsewhere pay a nonresident rate that more than triples tuition, and many of them choose a public university in their own state instead.</p>
${h.miniGap('ucf')}
<h2>Early Action on October 15, and the scholarship clock</h2>
<p>UCF's Early Action deadline is October 15, with materials due by November 15 and decisions in early December. Outcomes include a "Pathway" admission, a route that starts at a partner college. Regular applications are accepted until May 1 on a rolling basis, but the date that matters for money is the early one: students who meet every Early Action deadline get priority for merit scholarships, and UCF warns that first-year scholarship funds usually run out by mid-January. Letters of recommendation are neither required nor read in the general admission process.</p>
<h2>Scores are required, and the 2026 class scored higher</h2>
<p>UCF requires a test score, valid for five years. The middle 50% SAT of the fall 2025 enrolled class was ${h.satRange('ucf')}; the admissions office's profile of students admitted for summer and fall 2026 shows a higher range, 1310 to 1420, because admitted students score higher than those who enroll.</p>
${h.miniScore('ucf', 'SAT')}
<h2>What the bill becomes</h2>
<p>Florida's state universities keep resident tuition among the lowest in the country, and Bright Futures scholarships cover much of it for eligible residents. The federal averages show the result for aided students, ${h.net('ucf', 1)} between $30,001 and $48,000 and ${h.net('ucf', 3)} between $75,001 and $110,000 in ${h.meta.years.net}, figures in which housing and food are the largest part. DirectConnect to UCF also guarantees admission to students who finish an associate degree at a partner state college, a cheaper route to the same degree. Compare with ${h.c('usf', 'USF')}, ${h.c('uf', 'UF')} and ${h.c('fsu', 'Florida State')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is UCF’s acceptance rate for fall 2025?', a: `The University of Central Florida admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('ucf')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Florida residents were admitted at a far higher rate than applicants from other states.` },
    { q: 'Does UCF require the SAT or ACT?', a: 'Yes. UCF requires official SAT, ACT or CLT scores from first-year applicants, and scores remain valid for five years after the test date. Letters of recommendation, on the other hand, are not required and are not considered in the general first-year admission process.' },
    { q: 'How much does UCF cost for out-of-state students?', a: `UCF’s ${cost.year} on-campus budget is ${K.stickerOut('ucf')} for nonresidents against ${K.sticker('ucf')} for Florida residents. The gap comes from tuition: in ${K.meta.years.tuition} tuition and fees were ${K.usd(s.tuitionIn!)} for residents and ${K.usd(s.tuitionOut!)} for nonresidents, while housing and food cost the same for both groups of students.` },
  ],
  related: ['college:usf', 'college:uf', 'college:fsu', 'college:university-of-miami', 'compare-colleges', 'college-tuition'],
});
