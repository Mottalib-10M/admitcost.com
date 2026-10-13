import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('bowdoin');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'bowdoin',
  title: `Bowdoin Acceptance Rate 2026: ${K.rate('bowdoin')}, No Test Rule Since 1969`,
  description: `Bowdoin admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('bowdoin')}). See the 2026-27 cost of ${K.sticker('bowdoin')}, its no-loan aid and the net price paid by family income.`,
  intro: `Bowdoin admitted ${K.rate('bowdoin')} of applicants for fall 2025, about 1 in ${K.oneIn('bowdoin')}, and puts no loans in any aid package.`,
  resume: `Bowdoin College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025 (Class of 2029), an acceptance rate of ${K.rate('bowdoin')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. The college dropped its testing requirement in 1969 and still treats scores as optional: only ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('bowdoin')}. The ${cost.year} cost of attendance is ${K.sticker('bowdoin')}, of which ${K.usd(cost.tuition! + cost.fees! + cost.housingFood!)} is billed for tuition, the activities fee, housing and the full meal plan. Bowdoin is need-blind for domestic and international applicants and meets full need with grants and a campus job, never loans. In ${K.meta.years.net} the federal average net price was ${K.net('bowdoin', 0)} for families under $30,000 and ${K.net('bowdoin', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Need-blind abroad, and 6,041 international applications</h2>
<p>Bowdoin counts itself among only eleven U.S. schools that are need-blind and meet full calculated need for all applicants, domestic and international. The effect on the pool is visible in the Common Data Set: international students filed 6,041 of the ${h.num(c.applicants)} applications for fall 2025, about 43%, but received 76 of the ${h.num(c.admitted)} offers. Maine residents filed 540 applications and received 74 admissions. For a U.S. applicant from outside Maine, the effective odds are higher than the overall rate suggests.</p>
<p>Early Decision weighs heavily too. Bowdoin runs ED I on November 15 and ED II on January 5, the same day as Regular Decision, plus the QuestBridge Match on November 1. For fall 2025, 1,985 students applied early and 296 were admitted, close to a third of all offers. Only 5 students came off the waiting list.</p>
${h.miniScore('bowdoin', 'SAT')}
<h2>The oldest test-optional policy in the country</h2>
<p>Bowdoin was the first school to stop requiring standardized tests, in 1969. Applicants answer yes or no for each SAT and ACT and can change their answer until the deadline; the college superscores the ACT from the English, reading and math sections and leaves science out of the composite. Homeschooled applicants are the exception and must send either a graded paper or test scores. Because only ${h.pct(sc.pctSat!, 0)} of the class submitted an SAT and ${h.pct(sc.pctAct!, 0)} an ACT, the range of ${h.satRange('bowdoin')} tells you about the senders, not about the class.</p>
<h2>What the bill covers, and what aid replaces</h2>
<p>For ${cost.year} Bowdoin charges tuition of ${h.usd(cost.tuition!)}, a ${h.usd(cost.fees!)} activities fee and ${h.usd(cost.housingFood!)} for housing with the 21-meal plan, then budgets ${h.usd(cost.books!)} for books and ${h.usd(cost.personal!)} for personal costs, for ${h.sticker('bowdoin')} before travel. Aid replaces loans entirely: packages combine grants with a campus job, and need-based Bowdoin scholarships in the most recent admitted class ranged from $3,820 to $98,800. The $70 application fee is waived for aid applicants and first-generation students. Families between $30,001 and $48,000 paid an average of ${h.net('bowdoin', 1)} in ${h.meta.years.net}, and families above $110,000 paid ${h.net('bowdoin', 4)}.</p>
${h.miniNet('bowdoin')}
<h2>Bowdoin among the New England colleges</h2>
<p>Bowdoin is the most selective of the colleges in this group by the latest rate, slightly ahead of ${h.c('amherst', 'Amherst')} and ${h.c('williams', 'Williams')}, and the most generous to international students alongside Amherst. ${h.c('wellesley', 'Wellesley')} completes the set in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'How hard is it to get into Bowdoin for fall 2025?', a: `Bowdoin admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('bowdoin')}, according to its Common Data Set 2025-2026, and ${K.num(c.enrolled!)} enrolled. Early Decision applicants received 296 of the offers from 1,985 applications, and international applicants received 76 offers from 6,041 applications.` },
    { q: 'Does Bowdoin give loans in its financial aid?', a: 'No. Bowdoin’s admissions page says all aid packages are grants and need-based scholarships that never need to be repaid, combined with a campus job, and lists $0 as the amount of loans in its aid packages. The college is need-blind and meets the full calculated need of every admitted student, domestic and international.' },
    { q: 'Does Bowdoin superscore the ACT?', a: 'Yes. Bowdoin, test optional since 1969, considers the highest English, reading and math subscores from any test date or format and recalculates its own composite; the science score is not part of that composite even if you send it. You decide separately for each SAT and ACT whether the committee should use it, until the application deadline.' },
  ],
  related: ['college:amherst', 'college:williams', 'college:wellesley', 'college:dartmouth', 'compare-colleges', 'net-price-calculator'],
});
