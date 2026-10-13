import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('williams');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'williams',
  title: `Williams Acceptance Rate 2026: ${K.rate('williams')}, SAT and Net Price`,
  description: `Williams admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('williams')}). See the 2026-27 comprehensive fee of ${K.sticker('williams')} and what families paid by income band.`,
  intro: `Williams offered a place to ${K.rate('williams')} of applicants for fall 2025, and families earning $200K or less with typical assets pay no tuition.`,
  resume: `Williams admitted ${K.rate('williams')} of its applicants for the class that entered in fall 2025 (Class of 2029): ${K.num(c.admitted)} offers for ${K.num(c.applicants)} applications, with ${K.num(c.enrolled!)} students enrolling, according to the college's Common Data Set 2025-2026. Scores are optional; the ${K.pct(sc.pctSat!, 0)} of enrolled students who sent an SAT had a middle 50% of ${K.satRange('williams')}, and those who sent the ACT ${K.actRange('williams')}. The comprehensive fee for ${cost.year} is ${K.sticker('williams')}, which covers tuition, housing, meals and house fees but not books or travel. Aided families pay far less. In ${K.meta.years.net} the federal average net price was ${K.net('williams', 0)} for incomes under $30,000 and ${K.net('williams', 3)} between $75,001 and $110,000, and Williams now promises free tuition to families earning $200K or less with typical assets, with no loans and no work-study expectation in its aid.`,
  body: (h) => `
<h2>One binding round in Williamstown</h2>
<p>Williams runs a single early plan, binding Early Decision due November 15, with decisions by December 14. There is no Early Action and no second ED date. The Common Data Set shows why the choice of round matters here: 964 students applied early for fall 2025 and 256 were admitted, about one in four, while the rest of the pool saw roughly one offer for every thirteen applications. Part of that gap reflects who applies early rather than a lower bar, but the arithmetic is plain: those 256 early offers covered close to half of the ${h.num(c.enrolled!)} seats in the class before a single regular application was decided.</p>
<p>The waiting list is a thin backup. Williams offered 2,193 students a place on it, 850 accepted, and 25 were eventually admitted.</p>
${h.miniScore('williams', 'SAT')}
<h2>A score range drawn from fewer than half the class</h2>
<p>Williams leaves the testing decision entirely to the applicant, who can switch between sending and withholding scores until the deadline of the round. Only ${h.pct(sc.pctSat!, 0)} of the entering class sent an SAT and ${h.pct(sc.pctAct!, 0)} an ACT, so the range of ${h.satRange('williams')} describes a minority of students on campus, and the ones whose scores helped them. A result below ${h.num(s.sat!.p25)} does not close the door; it simply adds little to an application in a group whose median sits at ${h.num(s.sat!.p50!)}. With roughly ${h.oneIn('williams')} applicants per offer, the label stays a reach for everyone, including students at the top of the scale.</p>
<h2>Free tuition up to $200K, books included</h2>
<p>The ${cost.year} fee of ${h.sticker('williams')} splits into tuition of ${h.usd(cost.tuition!)}, housing and meals of ${h.usd(cost.housingFood!)} and ${h.usd(cost.fees!)} of activities and residential house fees; a semester away adds a study away fee. Families earning $200K or less with typical assets pay no tuition, and many receive aid well beyond it. Aid packages carry no loans and no work-study expectation, and Williams pays for books for every aided student whatever the size of the grant. The federal averages show the effect: ${h.net('williams', 1)} for families between $30,001 and $48,000 and ${h.net('williams', 2)} between $48,001 and $75,000 in ${h.meta.years.net}. Above $110,000 the average was ${h.net('williams', 4)}, a band that runs from families just past the tuition line to very high incomes.</p>
${h.miniNet('williams')}
<h2>Williams next to its New England rivals</h2>
<p>With about ${h.num(s.undergrads!)} undergraduates, Williams competes for the same students as ${h.c('amherst', 'Amherst')}, ${h.c('bowdoin', 'Bowdoin')} and ${h.c('wellesley', 'Wellesley')}, all test-optional and all priced close to Williams before aid. The differences sit in the early rounds and the aid rules, which the ${h.a('compare-colleges', 'comparison tool')} lines up side by side.</p>`,
  faqs: [
    { q: 'What was the Williams College acceptance rate for fall 2025?', a: `Williams admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('williams')} in its Common Data Set 2025-2026, and ${K.num(c.enrolled!)} enrolled. Early Decision applicants did better on paper: 256 of 964 were admitted. The federal figure for the previous class was ${K.pct(s.admRate!, 2)}.` },
    { q: 'Is Williams tuition free for families earning under $200,000?', a: 'Yes, for families earning $200K or less with typical assets, according to the Williams tuition and aid page. Many of those families also receive grants beyond tuition toward housing and meals. Williams meets full demonstrated need without loans or work-study expectations and covers the cost of books for every student on financial aid, regardless of the size of the award.' },
    { q: 'Do I need to send SAT or ACT scores to Williams?', a: `No. Williams describes itself as truly test optional: you state on the application whether to use scores and can change that choice until your round's deadline. In the fall 2025 class, ${K.pct(sc.pctSat!, 0)} sent the SAT, with a middle 50% of ${K.satRange('williams')}, and ${K.pct(sc.pctAct!, 0)} sent the ACT.` },
  ],
  related: ['college:amherst', 'college:bowdoin', 'college:wellesley', 'college:swarthmore', 'compare-colleges', 'net-price-calculator'],
});
