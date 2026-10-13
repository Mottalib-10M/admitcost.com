import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('pepperdine');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'pepperdine',
  title: `Pepperdine Acceptance Rate 2026: ${K.rate('pepperdine')}, Cost and Net Price`,
  description: `Pepperdine's Seaver College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('pepperdine')}). See the ${cost.year} cost of attendance and the net price paid by income.`,
  intro: `Pepperdine admitted ${K.rate('pepperdine')} of applicants for fall 2025, but its net price is among the highest on this site at every income.`,
  resume: `Pepperdine University's Seaver College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('pepperdine')}, and only ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Admission is the easier part. Pepperdine is test optional, with a middle 50% SAT of ${K.satRange('pepperdine')} among the ${K.pct(sc.pctSat!, 0)} who sent one, but its price is the real filter. The ${cost.year} cost of attendance for a new student is ${K.sticker('pepperdine')}, and the federal net prices for ${K.meta.years.net} are among the highest of the ${K.schools.length} universities on this site: ${K.net('pepperdine', 0)} on average for aided families under $30,000, ${K.net('pepperdine', 2)} between $48,001 and $75,000 and ${K.net('pepperdine', 4)} above $110,000. Merit scholarships are common, but they rarely close the gap for families with little income.`,
  body: (h) => `
<h2>Why so few admits enroll</h2>
<p>Pepperdine admits most of its applicants and enrolls about one in nine of them. A yield that low usually comes from price: many families who are admitted to a Malibu campus with an ocean view compare the award letter with other offers and choose a cheaper one. The federal averages explain why. In ${h.meta.years.net} even families under $30,000 paid ${h.net('pepperdine', 0)} on average, more than the highest-income band paid at several universities with large endowments, and the band from $30,001 to $48,000 paid ${h.net('pepperdine', 1)}. Pepperdine publishes no full-need or income-based tuition promise; it says that nearly all new Seaver students receive merit scholarships, need-based aid or both.</p>
${h.miniNet('pepperdine')}
<h2>A new Early Decision with guaranteed merit</h2>
<p>Pepperdine added binding Early Decision with the fall 2026 applicant pool, so there are no published counts yet. Its main attraction is money: students admitted through Early Decision are guaranteed at least $25,000 a year in merit aid. Early Action and Early Decision I close on November 1, Early Decision II and regular decision on January 15. Tests are optional for admission but required for the Regents Scholars program. Every applicant also writes a short essay on why they want to attend a Christian university and how they would join conversations of faith on campus.</p>
${h.miniGrant('pepperdine')}
<h2>The waiting list is a real route</h2>
<p>Pepperdine offered about thirteen hundred waiting list places for fall 2025, and 670 students were admitted from them, most of those who accepted a place. A student placed on the list has a better chance there than at most universities on this site.</p>
<h2>Budget and alternatives</h2>
<p>The ${cost.year} budget of ${h.sticker('pepperdine')} includes a flat tuition of ${h.usd(cost.tuition!)} for 12 to 18 units a semester and ${h.usd(cost.housingFood!)} for housing and food. In Southern California, ${h.c('usc', 'USC')} and ${h.c('ucla', 'UCLA')} offer very different prices for families with need; the ${h.a('compare-colleges', 'comparison tool')} shows the gap at your income.</p>`,
  faqs: [
    { q: 'What is Pepperdine’s acceptance rate for fall 2025?', a: `Pepperdine’s Seaver College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('pepperdine')}, according to its Common Data Set 2025-2026. Only ${K.num(c.enrolled!)} of the admitted students enrolled, one of the lowest yields among the universities on this site.` },
    { q: 'Why is Pepperdine’s net price so high?', a: `Pepperdine publishes no full-need or free-tuition promise, and its grants leave a large share of the cost to families. In ${K.meta.years.net} the federal average net price for aided families under $30,000 was ${K.net('pepperdine', 0)}, against a few thousand dollars at universities with large endowments, and ${K.net('pepperdine', 4)} above $110,000.` },
    { q: 'What do Pepperdine Early Decision admits receive?', a: 'Pepperdine introduced binding Early Decision with the fall 2026 applicant pool and guarantees students admitted that way at least $25,000 in merit aid. Early Decision I closes on November 1 with decisions in late December, and Early Decision II closes on January 15 with decisions on February 1.' },
  ],
  related: ['college:usc', 'college:ucla', 'college:tulane', 'college:baylor', 'compare-colleges', 'net-price-calculator'],
});
