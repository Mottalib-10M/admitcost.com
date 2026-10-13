import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('ucsd');
const a = s.adm!;
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const inS = cost.inState!;
const outS = cost.outOfState!;
const gpa = s.latest!.gpa!;

export default defineCollege({
  slug: 'ucsd',
  title: `UC San Diego Acceptance Rate 2026: ${K.rate('ucsd')}, Cost and Aid`,
  description: `UC San Diego admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026 (${K.rate('ucsd')}). Read the 2026-27 resident and nonresident cost and the net price by income.`,
  intro: `UC San Diego admitted ${K.rate('ucsd')} of its fall 2026 first-year applicants, and out-of-state applicants were admitted at a higher rate than Californians the year before.`,
  resume: `UC San Diego admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, an acceptance rate of ${K.rate('ucsd')}, in the University of California's preliminary snapshot. Its Common Data Set 2025-2026 covers the class before: ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications and ${K.num(c.enrolled!)} enrolled first-years. No test scores are read; the enrolled class averaged a ${gpa.average} high school GPA among the ${K.pct(gpa.pctSubmitting!, 0)} who reported one. The ${cost.year} figures in the same document come to ${K.sticker('ucsd')} for a Californian living on campus and ${K.stickerOut('ucsd')} for a nonresident, before health insurance. In ${K.meta.years.net} the federal average net price was ${K.net('ucsd', 0)} for families under $30,000 and ${K.net('ucsd', 3)} between $75,001 and $110,000, and Blue and Gold covers tuition for most California families earning up to $100,000. Residency matters a great deal in San Diego, because the campus admitted out-of-state applicants at a clearly higher rate than Californians in fall 2025.`,
  body: (h) => `
<h2>Residency changes the odds at UC San Diego</h2>
<p>UC San Diego publishes its admission counts by residency, and the split runs against the home state. For fall 2025, California residents filed 87,584 applications and received 21,677 admissions, about 24.7%, while out-of-state U.S. applicants received 9,881 of 24,912, about 39.7%. International applicants received 7,496 offers from 24,254 applications, and 1,409 of them enrolled. A Californian therefore faces a lower admit rate than the overall figure, and a nonresident a higher one, at a price that is nearly double.</p>
<p>The waiting list was a real second round: 36,709 students were offered a place for fall 2025, 25,411 accepted and 5,284 were eventually admitted.</p>
${h.miniGap('ucsd')}
<h2>A tuition frozen for six years</h2>
<p>The Common Data Set lists ${cost.year} costs for a first-year student: tuition of ${h.usd(inS.tuition!)} for a Californian or ${h.usd(outS.tuition!)} for a nonresident, ${h.usd(inS.fees!)} of required fees and ${h.usd(inS.housingFood!)} for food and housing on campus, plus ${h.usd(inS.books!)} for books, ${h.usd(inS.travel!)} for transportation and ${h.usd(inS.personal!)} of other expenses. The campus notes that the UC Tuition Stability Plan freezes an incoming cohort's tuition for six years, so the figure a student pays as a freshman is the figure for the whole degree. Health insurance is not in these totals and is billed unless waived.</p>
${h.miniNet('ucsd')}
<h2>Applying to San Diego without scores or an early round</h2>
<p>The UC system does not use SAT or ACT results for admission. The UC snapshot puts the middle half of fall 2026 admits at a 4.12 to 4.28 high school GPA, slightly below ${h.c('ucla', 'UCLA')} and ${h.c('uc-berkeley', 'UC Berkeley')}, and the admit rate is more than twice theirs. There is no Early Decision or Early Action: one UC application, filed between October 1 and November 30, reaches San Diego and any other campus chosen. California students in the top 9 percent of their school or the state are guaranteed a UC seat, not necessarily this one. Compare San Diego with ${h.c('uc-irvine', 'UC Irvine')} and ${h.c('uc-davis', 'UC Davis')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Is it easier to get into UC San Diego from out of state?', a: 'On the fall 2025 numbers, yes. UC San Diego’s Common Data Set shows 21,677 admissions from 87,584 California applications, about 24.7%, against 9,881 from 24,912 out-of-state U.S. applications, about 39.7%. The higher rate comes with a higher bill: nonresidents pay Nonresident Supplemental Tuition on top of the resident budget, and the overall fall 2025 rate sits between the two groups.' },
    { q: 'What GPA do you need for UC San Diego?', a: `There is no cutoff above the UC minimum, but the University of California’s fall 2026 snapshot puts the middle half of UC San Diego admits between 4.12 and 4.28 on the weighted, capped UC scale. The fall 2025 enrolled class averaged ${gpa.average}. Test scores are not considered, so course rigor and the personal insight questions decide between similar records.` },
    { q: 'How much does UC San Diego cost for 2026-27?', a: `UC San Diego’s Common Data Set lists ${cost.year} costs of ${K.sticker('ucsd')} for a California first-year living on campus, counting tuition, fees, food, housing, books, transportation and other expenses, and ${K.stickerOut('ucsd')} for a nonresident. Health insurance is not included. Under the UC Tuition Stability Plan, the tuition charged at entry stays the same for six years.` },
  ],
  related: ['college:ucla', 'college:uc-berkeley', 'college:uc-irvine', 'college:uc-davis', 'compare-colleges', 'net-price-calculator'],
});
