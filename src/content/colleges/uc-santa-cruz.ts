import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res2 = { caResident: number[]; domesticNonresident: number[]; international: number[] };
const s = K.s('uc-santa-cruz');
const L = s.latest!;
const c = L.cycle!;
const n = L.cycleNewer!;
const resN = (n as unknown as { byResidency: Res2 }).byResidency;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const r25 = K.pct(c.admitted / c.applicants, 1);

export default defineCollege({
  slug: 'uc-santa-cruz',
  title: `UC Santa Cruz Acceptance Rate 2026: ${K.rate('uc-santa-cruz')} and Cost`,
  description: `UC Santa Cruz admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025. See the 2026 preliminary offers, ${L.cost!.year} budget and net price by income.`,
  intro: `UC Santa Cruz offered places to ${K.rate('uc-santa-cruz')} of its fall 2026 first-year applicants on preliminary counts, after ${r25} for fall 2025.`,
  resume: `UC Santa Cruz is one of the more open doors in the University of California: preliminary counts from the UC Office of the President show ${K.num(n.admitted)} first-year offers for fall 2026 against ${K.num(n.applicants)} applications, a rate of ${K.rate('uc-santa-cruz')}. For the class that entered in fall 2025 the campus Common Data Set 2025-2026 reports ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)}, a rate of ${r25}, and only ${K.num(c.enrolled!)} enrolled. There is no SAT or ACT range to aim for, since UC admission is test-free; enrolled students averaged a ${L.gpa!.average} high school GPA. The ${L.cost!.year} on-campus budget for an entering student is ${K.sticker('uc-santa-cruz')} for a California resident and ${K.stickerOut('uc-santa-cruz')} for a non-resident. In ${K.meta.years.net}, aided students from families under $30,000 paid ${K.net('uc-santa-cruz', 0)} on average, and those between $75,001 and $110,000 paid ${K.net('uc-santa-cruz', 3)}.`,
  body: (h) => `
<h2>An easy offer, a low yield</h2>
<p>The striking number at Santa Cruz is not the admit rate but what happens after it. Of ${h.num(c.admitted)} students admitted for fall 2025, ${h.num(c.enrolled!)} enrolled, fewer than one in ten. Most applicants list several UC campuses on one application and pick another when the offers arrive. For a student who would happily attend, that means the odds are generous: the campus admits far more students than it needs because it knows most will decline. The preliminary fall 2026 tables point the same way, with ${h.num(resN.caResident[1])} offers to ${h.num(resN.caResident[0])} California applicants, ${h.num(resN.domesticNonresident[1])} to ${h.num(resN.domesticNonresident[0])} applicants from other states and ${h.num(resN.international[1])} to ${h.num(resN.international[0])} international applicants. These are offers as of June 17, 2026, and the enrolled count will only be known in December.</p>
${h.miniNet('uc-santa-cruz')}
<h2>Tuition frozen by entry year</h2>
<p>Santa Cruz publishes a separate 2026-27 budget for each cohort, which makes the UC Tuition Stability Plan visible. An entering student is charged ${h.usd(cin.tuition + cin.fees)} in tuition and fees: ${h.usd(cin.tuition)} of UC tuition and Student Services Fee and ${h.usd(cin.fees)} of campus fees. A student who started a year earlier pays less, and the gap widens for each older cohort, because each class keeps the rate it entered with for up to six years. Housing and food on campus come to ${h.usd(cin.housingFood)}, and ${h.usd(cin.health)} of UC student health insurance is charged to everyone who does not file a waiver, so it sits inside the ${h.sticker('uc-santa-cruz')} total.</p>
${h.miniGrant('uc-santa-cruz')}
<h2>The non-resident question</h2>
<p>A student from outside California adds ${h.usd(cout.tuition - cin.tuition)} of Non-Resident Tuition, for a budget of ${h.stickerOut('uc-santa-cruz')}. Blue and Gold grants are for California residents, so an out-of-state family should compare this figure with its own state university before applying. Within California, ${h.c('ucsb', 'UC Santa Barbara')} is more selective for residents and ${h.c('uc-riverside', 'UC Riverside')} costs slightly less on campus; the ${h.a('net-price-calculator', 'net price calculator')} applies each one to your income.</p>`,
  faqs: [
    { q: 'Why does UC Santa Cruz admit so many applicants?', a: `Because few admitted students enroll. UC Santa Cruz admitted ${K.num(c.admitted)} first-year applicants for fall 2025 and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Students apply to several UC campuses through one application and accept only one offer, so the campus has to admit many more students than it has seats.` },
    { q: 'Does UC Santa Cruz consider SAT or ACT scores?', a: 'No. Like every University of California campus, UC Santa Cruz is test-free: SAT and ACT scores are not used for admission or for scholarships. They can be reported only after the application is submitted and may later count toward course placement. The A-G course list, the GPA and the personal insight questions carry the decision.' },
    { q: 'How much is UC Santa Cruz housing and food in 2026-27?', a: `The UC Santa Cruz financial aid office budgets ${K.usd(cin.housingFood)} for on-campus housing and food in 2026-27, within a ${K.sticker('uc-santa-cruz')} total for a California resident entering that year. The budget also counts ${K.usd(cin.books)} of books and supplies, ${K.usd(cin.travel)} of transportation and the UC student health insurance charge.` },
  ],
  related: ['college:ucsb', 'college:uc-riverside', 'college:usc', 'net-price-calculator', 'compare-colleges'],
});
