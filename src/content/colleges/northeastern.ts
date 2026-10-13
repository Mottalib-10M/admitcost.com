import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('northeastern');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'northeastern',
  title: `Northeastern Acceptance Rate 2026: ${K.rate('northeastern')}, Co-op and Cost`,
  description: `Northeastern admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants in its newest published cycle (${K.rate('northeastern')}). See the ${cost.year} cost of attendance and net price by family income.`,
  intro: `Northeastern admitted ${K.rate('northeastern')} of almost a hundred thousand applicants in its newest published cycle, and families under $48,000 paid little on federal figures.`,
  resume: `Northeastern University's newest published admissions counts, in its Common Data Set 2024-2025, describe the class that entered in fall 2024: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} first-year applicants, an acceptance rate of ${K.rate('northeastern')}, with ${K.num(c.enrolled!)} enrolling. Its news office has since reported more than 105,000 applicants for fall 2025 and 106,300 for fall 2026, but no admit counts for those years. Testing is optional and only ${K.pct(sc.pctSat!, 0)} of the enrolled class sent an SAT, whose middle 50% was ${K.satRange('northeastern')}. The ${cost.year} cost of attendance is ${K.sticker('northeastern')}. Northeastern meets full demonstrated need, and the federal figures for ${K.meta.years.net} show it: families under $30,000 paid an average of ${K.net('northeastern', 0)}, families between $48,001 and $75,000 paid ${K.net('northeastern', 2)}, among the lowest averages on this site for those two bands.`,
  body: (h) => `
<h2>One of the most applied-to private universities</h2>
<p>Few private universities draw a pool this size. Northeastern's applications have hovered around a hundred thousand for three cycles, while its first-year class stays under three thousand. That arithmetic puts its admit rate in the same band as the Ivy League, which surprises families who remember it as a regional school. The four rounds matter here: Early Decision I and Early Action on November 1, Early Decision II and regular decision on January 1. In fall 2024, Northeastern admitted 1,492 of 3,466 Early Decision applicants, a rate many times the overall figure, so binding early application is the clearest signal a student can send.</p>
${h.miniScore('northeastern', 'SAT')}
<h2>Starting abroad and the co-op years</h2>
<p>Northeastern admits some students to a first semester or year outside Boston, through N.U.in or the London Scholars program. These options change the price in ways the main budget does not show: the N.U.in fall semester has its own direct cost and is not eligible for federal aid. The co-op program, six-month professional jobs alternating with classes, is the other singularity. Most students spend part of their five years at work, often paid, and many receive a job offer from a former co-op employer. Tuition is not charged during co-op periods, but rent usually is, which is why the five-year cost should be planned with care.</p>
<h2>What families on aid paid</h2>
<p>Northeastern commits to meeting the full demonstrated need of every student who attends, and reports record grant spending. The ${h.meta.years.net} federal net prices are among the lowest on this site for low incomes, ${h.net('northeastern', 0)} under $30,000 and ${h.net('northeastern', 1)} between $30,001 and $48,000, before rising steeply to ${h.net('northeastern', 4)} above $110,000. The ${cost.year} budget of ${h.sticker('northeastern')} includes tuition of ${h.usd(cost.tuition!)} and ${h.usd(cost.housingFood!)} for housing and food in Boston.</p>
${h.miniNet('northeastern')}
<h2>Boston alternatives</h2>
<p>Students admitted to Northeastern often hold offers from ${h.c('boston-university', 'Boston University')}, ${h.c('tufts', 'Tufts')} or ${h.c('boston-college', 'Boston College')}. Their aid rules differ sharply above $75,000 of income; the ${h.a('compare-colleges', 'comparison tool')} shows the gap for your family.</p>`,
  faqs: [
    { q: 'What is Northeastern’s acceptance rate?', a: `The newest admit counts Northeastern has published are for fall 2024: ${K.num(c.admitted)} admitted of ${K.num(c.applicants)} applicants, an acceptance rate of ${K.rate('northeastern')}, in its Common Data Set 2024-2025. The university later reported more than 105,000 applicants for fall 2025 and 106,300 for fall 2026, without admit counts.` },
    { q: 'Does Northeastern Early Decision improve the odds?', a: 'On the published counts, yes. For fall 2024 Northeastern admitted 1,492 of 3,466 Early Decision applicants, far above its overall rate. Early Decision is binding, though, so a family that needs to compare aid offers can use the non-binding Early Action round on November 1 instead, or Early Decision II in January.' },
    { q: 'How much does Northeastern cost in 2026-27?', a: `Northeastern’s ${cost.year} cost of attendance is ${K.sticker('northeastern')}, with tuition of ${K.usd(cost.tuition!)} and ${K.usd(cost.housingFood!)} for housing and food. First years that start abroad through N.U.in or London Scholars have separate prices, and the N.U.in semester is not eligible for federal aid, so it is priced and paid differently.` },
  ],
  related: ['college:boston-university', 'college:tufts', 'college:boston-college', 'college:case-western', 'compare-colleges', 'net-price-calculator'],
});
