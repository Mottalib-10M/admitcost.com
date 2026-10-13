import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('ut-austin');
const L = s.latest!;
const c = L.cycle!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const cin = L.cost!.inState! as unknown as Record<string, string | number>;
const cout = L.cost!.outOfState! as unknown as Record<string, string | number>;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);
const range = (v: string | number) => String(v).split('-').map((x) => K.usd(Number(x))).join(' to ');

export default defineCollege({
  slug: 'ut-austin',
  title: `UT Austin Acceptance Rate 2026: ${K.rate('ut-austin')}, Top 5% Rule, Cost`,
  description: `UT Austin admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025: ${share(res.inState)} of Texans, ${share(res.outOfState)} from other states. See the 2026 admission rules, costs and net price.`,
  intro: `UT Austin admitted ${K.rate('ut-austin')} of first-year applicants for fall 2025, and Texans in the top 5% of their class for fall 2027 are admitted automatically.`,
  resume: `The University of Texas at Austin admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('ut-austin')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Texas residents saw ${share(res.inState)} admitted, applicants from other states ${share(res.outOfState)}. An SAT, ACT or CLT score is required; UT left the score table of its Common Data Set blank, so the range shown here is the federal fall 2024 figure, about ${K.satRange('ut-austin')} on the SAT and ${K.actRange('ut-austin')} on the ACT. The 2026-27 cost of attendance runs from ${range(cin.totalRange)} for a Texas resident and from ${range(cout.totalRange)} for a non-resident, depending on the program. Aided families paid ${K.net('ut-austin', 0)} on average under $30,000 of income in ${K.meta.years.net}, and Texans with family income up to $100,000 and financial need now have tuition covered.`,
  body: (h) => `
<h2>The automatic admission rule</h2>
<p>Texas law shapes UT Austin's class more than any essay. The university must automatically admit enough Texas students to fill 75 percent of the seats available to residents, and it sets the class rank each year. For students applying for summer or fall 2027, the cutoff is the top 5 percent of a Texas high school class, the same as for 2026. Automatic admission covers the university, not the major: competitive programs still choose among those admitted. Home-schooled Texans can qualify too, with an SAT of 1570 or an ACT of 36 for 2027 entry.</p>
${h.miniGap('ut-austin')}
<h2>Outside the top 5 percent, and outside Texas</h2>
<p>Everyone else competes in holistic review for the remaining seats. The numbers show how narrow that door is from out of state: for fall 2025, ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} applicants from other states were admitted, against ${h.num(res.inState[1])} of ${h.num(res.inState[0])} Texans, and ${h.num(res.international[1])} of ${h.num(res.international[0])} international applicants. Texans filled ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} places. UT reports no waiting list.</p>
<h2>Early Action on October 15</h2>
<p>The early deadline is October 15, with supplemental materials due October 22. Early applicants receive a decision or a deferral by January 15, 2027; deferred and regular applicants, whose deadline is December 1, hear by February 15, 2027. There is no Early Decision. An official score must arrive from the testing agency, and an applicant who wants to use a score to show calculus readiness has until December 10.</p>
${h.miniNet('ut-austin')}
<h2>Price ranges, not one price</h2>
<p>UT charges flat-rate tuition that varies by college, which is why the 2026-27 cost of attendance comes as a range: ${range(cin.tuitionRange)} of tuition for residents and ${range(cout.tuitionRange)} for non-residents, plus ${range(cin.housingFoodRange)} for housing and food, ${h.usd(cin.books as number)} of books and ${h.usd(cin.travel as number)} of transportation. The Texas Advance Commitment covers tuition with gift aid for Texans with family income up to $100,000 and need, and gives tuition support up to $125,000. Compare with ${h.c('texas-am', 'Texas A&M')} and ${h.c('georgia-tech', 'Georgia Tech')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is the UT Austin automatic admission cutoff for 2027?', a: 'For summer and fall 2027 applicants, UT Austin automatically admits Texas students who rank in the top 5 percent of their high school class, the same cutoff as for 2026. The university must fill 75 percent of its resident seats this way under the Texas Education Code. Admission to the university does not guarantee the first-choice major.' },
    { q: 'Is it hard to get into UT Austin from out of state?', a: `Yes. For fall 2025 UT Austin admitted ${K.num(res.outOfState[1])} of ${K.num(res.outOfState[0])} out-of-state applicants, ${share(res.outOfState)}, compared with ${share(res.inState)} for Texas residents, according to its Common Data Set 2025-2026. Most Texas seats go to automatic admits, so out-of-state applicants compete in holistic review for a small share of the class.` },
    { q: 'Does UT Austin require SAT or ACT scores?', a: 'Yes. UT Austin requires official ACT or SAT scores sent from the testing agency to complete the application, and official CLT scores also satisfy the rule. The SAT essay, ACT Writing and the ACT Science section are not required; an ACT with or without Science is treated the same. Scores for the final deadline must arrive by December 10.' },
    { q: 'Who qualifies for the Texas Advance Commitment at UT Austin?', a: 'Texas residents entering UT Austin as freshmen or transfers, and continuing students, with a family adjusted gross income up to $100,000 and financial need shown on the FAFSA or TASFA have tuition covered by grants and scholarships. Between $100,000 and $125,000, UT gives partial tuition support. The commitment covers tuition only, not housing or books.' },
  ],
  related: ['college:texas-am', 'college:georgia-tech', 'college:umich', 'compare-colleges', 'net-price-calculator'],
});
