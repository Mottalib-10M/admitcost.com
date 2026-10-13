import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
type Res2 = { caResident: number[]; domesticNonresident: number[]; international: number[] };
const s = K.s('uc-riverside');
const L = s.latest!;
const c = L.cycle!;
const n = L.cycleNewer!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const resN = (n as unknown as { byResidency: Res2 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const r25 = K.pct(c.admitted / c.applicants, 1);

export default defineCollege({
  slug: 'uc-riverside',
  title: `UC Riverside Acceptance Rate 2026: ${K.rate('uc-riverside')}, Cost and Aid`,
  description: `UC Riverside admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 and ${K.rate('uc-riverside')} in 2026 on early counts. The ${L.cost!.year} campus budget is ${K.sticker('uc-riverside')} for Californians.`,
  intro: `UC Riverside offered admission to ${K.rate('uc-riverside')} of its fall 2026 first-year applicants on preliminary counts, and ${r25} for fall 2025.`,
  resume: `UC Riverside admits most of the students who apply: the University of California's preliminary fall 2026 tables show ${K.num(n.admitted)} first-year offers for ${K.num(n.applicants)} applications, a rate of ${K.rate('uc-riverside')}, and the campus Common Data Set 2025-2026 counts ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} for fall 2025 (${r25}), with ${K.num(c.enrolled!)} enrolled. Tests play no part, since every UC campus is test-free, and the enrolled class averaged a ${L.gpa!.average} high school GPA, every student having submitted one. A new Californian living in university housing has a ${L.cost!.year} budget of ${K.sticker('uc-riverside')}; a non-resident's is ${K.stickerOut('uc-riverside')}. The federal figures for ${K.meta.years.net} show what aided families actually paid: ${K.net('uc-riverside', 0)} on average under $30,000 of income and ${K.net('uc-riverside', 1)} between $30,001 and $48,000. Those averages are for students on federal aid, not a quote for any single family.`,
  body: (h) => `
<h2>A campus built on California students</h2>
<p>Riverside's entering class is almost entirely Californian: of the ${h.num(c.enrolled!)} first-years who enrolled in fall 2025, ${h.num(res.inState[2])} were California residents. The admission funnel explains it. The campus admitted ${h.num(res.inState[1])} of ${h.num(res.inState[0])} Californians, ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} out-of-state applicants and ${h.num(res.international[1])} of ${h.num(res.international[0])} international applicants, yet only ${h.num(res.outOfState[2])} out-of-state students enrolled. For fall 2026 the preliminary count is ${h.num(resN.caResident[1])} offers to ${h.num(resN.caResident[0])} Californians. The waiting list exists but did not open for fall 2025: ${h.num(wl.accepted)} students accepted a place and ${h.num(wl.admitted)} were admitted from it.</p>
<p>For an applicant, the practical reading is that Riverside is a likely admit for a California student who meets the UC subject and GPA requirements, and a realistic option for someone whose grades fall short of the more crowded coastal campuses. It is not automatic. For fall 2025, ${h.pct(1 - res.inState[1] / res.inState[0], 1)} of California applicants were turned down, and the review still weighs the course list, the trend in grades and the four personal insight answers. A student who treats the application as a formality risks being in that group.</p>
${h.miniNet('uc-riverside')}
<h2>Low sticker, real grants</h2>
<p>Housing and food in university housing are set at ${h.usd(cin.housingFood)} for 2026-27, below the on-campus figures at Santa Barbara and Santa Cruz. For a new student the budget lists ${h.usd(cin.tuition)} of UC tuition and fees, ${h.usd(cin.fees)} of campus and technology fees and ${h.usd(cin.health)} for UC student health insurance, which the table below folds into the total rather than into a separate line. First-term students also pay a one-time orientation and document fee, listed apart from the yearly budget. Under Blue and Gold, most California families earning up to $100,000 receive enough grants to cover UC tuition.</p>
${h.miniGap('uc-riverside')}
<h2>What a non-resident pays at Riverside</h2>
<p>The out-of-state and international budget for a 2026-27 first-year is ${h.stickerOut('uc-riverside')}, driven by ${h.usd(cout.tuition - cin.tuition)} of Non-resident Supplemental Tuition. That total includes the first-term fees, which the resident budget lists separately. Riverside sits on the same UC application as ${h.c('ucsb', 'UC Santa Barbara')} and ${h.c('uc-santa-cruz', 'UC Santa Cruz')}, filed between October 1 and November 30, with no early round. A non-resident who is weighing Riverside against a home-state flagship should run both through the ${h.a('net-price-calculator', 'net price calculator')}: Blue and Gold is reserved for California residents, so the tuition grant that shrinks a Californian's bill does not apply.</p>`,
  faqs: [
    { q: 'What GPA do you need for UC Riverside?', a: `UC Riverside publishes no cutoff beyond the UC minimums, but its fall 2025 first-years averaged a ${L.gpa!.average} high school GPA, with every enrolled student reporting one, according to the Common Data Set 2025-2026. Because the campus is test-free, grades in A-G courses and the personal insight questions carry the whole academic review.` },
    { q: 'Is UC Riverside cheaper than other UC campuses?', a: `For a new Californian in university housing, UC Riverside budgets ${K.sticker('uc-riverside')} for 2026-27, against ${K.sticker('ucsb')} at UC Santa Barbara and ${K.sticker('uc-santa-cruz')} at UC Santa Cruz for the same year. Tuition is identical across UC; the difference comes from housing, food and the health insurance line each campus sets.` },
    { q: 'Does UC Riverside have early action?', a: 'No. UC Riverside uses only the University of California application, with no Early Decision or Early Action. For fall 2027 entry the filing period runs from October 1 to November 30, 2026, and decisions arrive by March 31, 2027. One application covers every UC campus the student selects, each reviewed separately.' },
  ],
  related: ['college:ucsb', 'college:uc-santa-cruz', 'college:usc', 'net-price-calculator', 'compare-colleges'],
});
