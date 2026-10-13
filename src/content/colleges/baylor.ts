import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('baylor');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;
const GUAR = 75556; // Guaranteed Tuition Option, research/schools/baylor.json facts
const reg4 = [0, 1, 2, 3].reduce((t, k) => t + cost.tuition! * Math.pow(1.065, k), 0);

export default defineCollege({
  slug: 'baylor',
  title: `Baylor Acceptance Rate 2026: ${K.rate('baylor')}, Tuition and Net Price`,
  description: `Baylor admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('baylor')}). See the ${cost.year} tuition, the guaranteed rate option and the net price by family income.`,
  intro: `Baylor admitted ${K.rate('baylor')} of applicants for fall 2025, and offers a tuition rate locked for four years at a higher price.`,
  resume: `Baylor University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('baylor')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Its small Early Decision round admitted 453 of 566 applicants. Baylor is test-optional, and the ${K.pct(sc.pctSat!, 0)} who sent an SAT had a middle 50% of ${K.satRange('baylor')}. The ${cost.year} cost of attendance is ${K.sticker('baylor')}, with tuition of ${K.usd(cost.tuition!)} that can rise each year unless the family chooses the guaranteed tuition option. Baylor publishes no full-need promise, and its federal net prices are high for low incomes: in ${K.meta.years.net} aided families paid an average of ${K.net('baylor', 0)} under $30,000 and ${K.net('baylor', 2)} between $48,001 and $75,000, well above the averages of universities with need-based guarantees.`,
  body: (h) => `
<h2>Fixed or rising tuition</h2>
<p>Baylor lets each new student choose how tuition will move. The regular rate for ${cost.year} is ${h.usd(cost.tuition!)} and can rise every year; the Guaranteed Tuition Option locks a higher rate, $75,556, for four years. The choice is a bet on future increases. The Board of Regents approved an average increase of 6.5% for 2026-27; if the regular rate rose that much every year, four years would cost about ${h.usd(Math.round(reg4 / 100) * 100)}, against ${h.usd(GUAR * 4)} for four guaranteed years, so the lock pays off only if increases run higher than that. Students who make no election pay the regular rate.</p>
<h2>Early Decision with a small bonus</h2>
<p>Baylor's binding Early Decision on November 1 admitted most of its small pool for fall 2025, and Early Decision admits may receive a non-renewable scholarship. Early Action, on the same date and non-binding, gives automatic consideration for merit awards and scholarship events; regular decision closes on February 1. The waiting list almost never moves: only 19 students were admitted from it for fall 2025.</p>
${h.miniScore('baylor', 'SAT')}
<h2>Mostly Texan, mostly merit</h2>
<p>Texans made up most of the applicants, and out-of-state students were admitted at a slightly higher rate. Baylor's aid relies largely on merit scholarships, with a Baylor Benefit Scholarship that gives free tuition to a select number of students from families earning under $50,000; it is not an entitlement. The federal averages for ${h.meta.years.net} reflect that: ${h.net('baylor', 1)} between $30,001 and $48,000, rising to ${h.net('baylor', 3)} between $75,001 and $110,000 and ${h.net('baylor', 4)} above, a narrower gap between incomes than at need-based universities.</p>
${h.miniNet('baylor')}
<h2>Comparing Baylor</h2>
<p>For a Texas family, the useful comparison is with the public flagships at resident prices, ${h.c('texas-am', 'Texas A&M')} and ${h.c('ut-austin', 'UT Austin')}, and with the other private universities of the state, ${h.c('tcu', 'TCU')} and ${h.c('smu', 'SMU')}. The ${h.a('compare-colleges', 'comparison tool')} puts their net prices side by side at your income, with the residency question answered.</p>`,
  faqs: [
    { q: 'What is Baylor’s acceptance rate for fall 2025?', a: `Baylor University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('baylor')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Texas residents were most of the applicants, and out-of-state applicants were admitted at a slightly higher rate.` },
    { q: 'What is Baylor’s Guaranteed Tuition Option?', a: 'New students can lock tuition at $75,556 a year for four years instead of paying the regular rate, which was $67,756 for 2026-27 and can rise every year. The guarantee costs more at first and pays off only if yearly increases stay large. Students who do not choose it pay the regular rate.' },
    { q: 'Does Baylor meet full financial need?', a: `Baylor publishes no full-need guarantee. It combines merit scholarships, need-based aid and the Baylor Benefit Scholarship, which gives free tuition to a select number of students from families earning under $50,000. In ${K.meta.years.net} aided families under $30,000 paid an average net price of ${K.net('baylor', 0)}.` },
  ],
  related: ['college:tcu', 'college:smu', 'college:texas-am', 'college:ut-austin', 'compare-colleges', 'college-tuition'],
});
