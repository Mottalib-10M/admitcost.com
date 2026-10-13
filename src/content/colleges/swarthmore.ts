import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('swarthmore');
const c = s.latest!.cycle!;
const n = s.latest!.cycleNewer!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'swarthmore',
  title: `Swarthmore Acceptance Rate 2026: ${K.rate('swarthmore')} for the Class of 2030`,
  description: `Swarthmore admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} applicants for fall 2026 (${K.rate('swarthmore')}). See the 2026-27 cost of ${K.sticker('swarthmore')}, the 2027 tuition guarantee and the net price by income.`,
  intro: `Swarthmore admitted ${K.rate('swarthmore')} of applicants for fall 2026, and from fall 2027 families earning $200,000 or less with typical assets will pay no tuition.`,
  resume: `Swarthmore's newest admission figure covers the Class of 2030: ${K.num(n.admitted)} students admitted out of ${K.num(n.applicants)} applicants for fall 2026, an acceptance rate of ${K.rate('swarthmore')}, with ${K.num(n.enrolled!)} enrolled as of June 2026. The year before, its Common Data Set 2025-2026 counted ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications. The college suspended its testing requirement for the 2026-27 cycle; in the fall 2025 class ${K.pct(sc.pctSat!, 0)} sent an SAT, scoring ${K.satRange('swarthmore')} in the middle half. The ${cost.year} cost of attendance is ${K.sticker('swarthmore')}, of which billed charges are ${K.usd(cost.tuition! + cost.fees! + cost.housingFood!)}. Aid meets full need without loans, and a new tuition guarantee starts in fall 2027 for families earning $200,000 or less. Federal averages for ${K.meta.years.net} show what aided families paid: ${K.net('swarthmore', 1)} between $30,001 and $48,000 and ${K.net('swarthmore', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Two Early Decision dates and a three-application limit</h2>
<p>Swarthmore splits its binding round in two: Fall Early Decision closes November 15 and Winter Early Decision January 4, the same day as Regular Decision. For fall 2025, 1,281 students applied early and 228 were admitted, about 23% of all offers. The college also caps persistence: a student may apply at most three times, first-year and transfer applications combined, and a fourth application is withdrawn.</p>
<p>The fall 2026 numbers are early. Swarthmore published them in June 2026, and they can shift slightly before the Common Data Set 2026-2027 fixes the final count.</p>
${h.miniScore('swarthmore', 'SAT')}
<h2>Testing suspended again for the 2026-27 cycle</h2>
<p>Swarthmore's standardized testing page now says scores are optional and that applicants who leave them out are not penalized. Applicants pick one of two options at submission, consider all SAT and ACT scores or suppress them all, and cannot change that choice afterward. The SAT is superscored by section; the ACT is read by its best single-sitting composite. With only ${h.pct(sc.pctSat!, 0)} of the last class sending an SAT and ${h.pct(sc.pctAct!, 0)} an ACT, the range of ${h.satRange('swarthmore')} is a portrait of the students who chose to show a score.</p>
<h2>Billed charges, published increases and the 2027 guarantee</h2>
<p>For ${cost.year} Swarthmore bills ${h.usd(cost.tuition!)} for tuition and books (an $800 textbook credit is folded into tuition), ${h.usd(cost.housingFood!)} for housing and food and a ${h.usd(cost.fees!)} activities fee, then adds ${h.usd(cost.books!)} for course materials and ${h.usd(cost.personal!)} for personal expenses to reach ${h.sticker('swarthmore')}. Pennsylvania's Act 69 makes the college publish estimates three years ahead: billed costs of $99,961 for 2027-28 and $110,197 for 2029-30. The Swarthmore Tuition Guarantee, starting in fall 2027, covers at least full tuition for domestic families earning $200,000 or less with typical assets, on top of a need-blind admission policy for domestic students and loan-free aid. Above $110,000, families paid an average of ${h.net('swarthmore', 4)} in ${h.meta.years.net}.</p>
${h.miniNet('swarthmore')}
<h2>Swarthmore, the Tri-College Consortium and Penn</h2>
<p>Students can cross-register at Bryn Mawr and Haverford and at the University of Pennsylvania, and Swarthmore offers an engineering degree inside a liberal arts college. Weigh it against ${h.c('pomona', 'Pomona')}, ${h.c('williams', 'Williams')} and ${h.c('upenn', 'Penn')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is Swarthmore’s acceptance rate for the Class of 2030?', a: `Swarthmore reported ${K.num(n.applicants)} applicants and ${K.num(n.admitted)} admitted students for fall 2026, an acceptance rate of ${K.rate('swarthmore')}, with ${K.num(n.enrolled!)} enrolled as of June 2026. For fall 2025 its Common Data Set gives ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications. The June figures may move slightly in the next Common Data Set.` },
    { q: 'Does Swarthmore require SAT or ACT scores for fall 2027 applicants?', a: 'No. Swarthmore’s Common Data Set says it suspended its requirement that applicants submit SAT or ACT scores for the 2026-27 admissions cycle, and its testing page says applicants without scores are not penalized. You choose at submission between having all SAT and ACT scores considered or suppressing them, and that choice cannot be changed later.' },
    { q: 'What is the Swarthmore Tuition Guarantee?', a: 'Starting in fall 2027, Swarthmore will cover at least the cost of tuition for domestic students whose families earn $200,000 or less a year and have typical assets, and aid can reach the full cost of attendance. It applies to students who complete the FAFSA, CSS Profile and tax documents by the deadlines. International students keep loan-free aid meeting full need but are not covered by the guarantee.' },
  ],
  related: ['college:williams', 'college:pomona', 'college:amherst', 'college:upenn', 'compare-colleges', 'net-price-calculator'],
});
