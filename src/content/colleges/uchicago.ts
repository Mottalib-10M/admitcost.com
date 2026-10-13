import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('uchicago');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'uchicago',
  title: `UChicago Acceptance Rate 2026: ${K.rate('uchicago')}, SAT Range, Net Price`,
  description: `UChicago admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('uchicago')}). Its ${cost.year} cost of attendance is ${K.sticker('uchicago')}; see the 2026 net price paid by income.`,
  intro: `UChicago admitted ${K.rate('uchicago')} of applicants for fall 2025, and families under $125,000 pay nothing for tuition, housing or meals.`,
  resume: `The University of Chicago admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('uchicago')}, and ${K.num(c.enrolled!)} enrolled, a yield close to nine in ten, according to its Common Data Set 2025-2026. Testing is optional under a "no harm" rule, yet ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('uchicago')}. The ${cost.year} on-campus cost of attendance is ${K.sticker('uchicago')}, of which tuition is ${K.usd(cost.tuition!)}. The aid promise is among the broadest on this site: free tuition for families under $250,000 and for every first-generation student, and nothing to pay for tuition, fees, housing and meals under $125,000. In ${K.meta.years.net}, before the higher thresholds, aided families between $48,001 and $75,000 paid an average of ${K.net('uchicago', 2)}.`,
  body: (h) => `
<h2>A yield that shapes the admit rate</h2>
<p>Chicago's rate is low partly because almost everyone it admits comes. With ${h.num(c.enrolled!)} enrolled out of ${h.num(c.admitted)} admitted, the university can fill its class with very few offers, and much of that class arrives through binding Early Decision. It runs four rounds: Early Decision I and a non-binding, non-restrictive Early Action on November 2, Early Decision II and regular decision on January 4. Applicants can switch from Early Action to Early Decision I until December 1, and deferred or regular applicants can move to Early Decision II until mid-January, an unusual flexibility that many use once they are sure.</p>
<h2>"No harm" testing</h2>
<p>UChicago is test-optional and adds a rule few universities state: a submitted SAT or ACT is used only if it helps the applicant. More than half of the fall 2025 class still sent an SAT, which is why its range, ${h.satRange('uchicago')}, is a fairly complete picture compared with other test-optional schools. A score inside it is worth sending; below it, the no-harm rule means it should not hurt, but it is unlikely to help.</p>
${h.miniScore('uchicago', 'SAT')}
<h2>Free tuition up to $250,000</h2>
<p>The federal net prices already showed a generous school: in ${h.meta.years.net} the average for families under $30,000 was below zero, meaning grants exceeded the cost, and the band from $30,001 to $48,000 paid ${h.net('uchicago', 1)}. The current promise goes further. Families with typical assets earning under $125,000 pay nothing for tuition, fees, housing and meals; under $250,000, and for any student who is the first in the family to attend college, tuition is free. Above that line the price climbs toward the ${h.sticker('uchicago')} budget, with health insurance added unless waived.</p>
${h.miniNet('uchicago')}
<h2>Chicago and its rivals</h2>
<p>Admitted students often weigh UChicago against ${h.c('northwestern', 'Northwestern')}, ${h.c('columbia', 'Columbia')} and ${h.c('stanford', 'Stanford')}. Northwestern's free-tuition line sits at $150,000, so the comparison flips for a family earning $200,000: the ${h.a('compare-colleges', 'comparison tool')} shows it, keeping in mind that the federal averages predate both promises.</p>`,
  faqs: [
    { q: 'What is UChicago’s acceptance rate for the Class of 2029?', a: `UChicago admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('uchicago')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. That yield of almost nine in ten is one of the highest among the universities on this site.` },
    { q: 'Is UChicago free for families under $125,000?', a: 'For families with typical assets, yes: UChicago covers tuition, fees and standard housing and meals for incomes under $125,000. Families earning under $250,000, and all students who are the first in their family to attend college, receive free tuition. Books, travel and personal costs are handled through the regular need-based aid package.' },
    { q: 'What does UChicago’s “no harm” test policy mean?', a: 'UChicago does not require the SAT or ACT, and when a student does send a score, the admissions office uses it only if it improves the applicant’s chances. A score below the published range therefore should not count against a student, though in practice most enrolled students who sent an SAT scored inside the range.' },
  ],
  related: ['college:northwestern', 'college:columbia', 'college:stanford', 'college:washu', 'compare-colleges', 'net-price-calculator'],
});
