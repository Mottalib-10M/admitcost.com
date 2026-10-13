import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
type Res2 = { caResident: number[]; domesticNonresident: number[]; international: number[] };
const s = K.s('ucsb');
const L = s.latest!;
const c = L.cycle!;
const n = L.cycleNewer!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const resN = (n as unknown as { byResidency: Res2 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const r25 = K.pct(c.admitted / c.applicants, 1);
const share = (a: number[]) => K.pct(a[1] / a[0], 1);

export default defineCollege({
  slug: 'ucsb',
  title: `UC Santa Barbara Acceptance Rate 2026: ${K.rate('ucsb')}, Net Price`,
  description: `UC Santa Barbara made ${K.num(n.admitted)} first-year offers for fall 2026 from ${K.num(n.applicants)} applicants. See the 2026-27 budget, net price by income and test-free rules.`,
  intro: `UC Santa Barbara's preliminary fall 2026 offers come to ${K.rate('ucsb')} of first-year applicants, up from ${r25} for the class that entered in fall 2025.`,
  resume: `UC Santa Barbara admitted ${K.num(n.admitted)} first-year applicants for fall 2026 out of ${K.num(n.applicants)}, a preliminary rate of ${K.rate('ucsb')} based on University of California Office of the President counts (applications as of January, offers as of June 17, 2026). The last complete class, fall 2025, shows ${K.num(c.admitted)} admitted from ${K.num(c.applicants)} and ${K.num(c.enrolled!)} enrolled, or ${r25}, in the campus Common Data Set 2025-2026. No SAT or ACT range applies: every UC campus is test-free, so the file is read on grades, courses and the personal insight questions, and enrolled first-years averaged a ${L.gpa!.average} high school GPA. The 2026-27 budget for a new student in the residence halls is ${K.sticker('ucsb')} for a Californian and ${K.stickerOut('ucsb')} for a non-resident. Aided families paid far less in ${K.meta.years.net}: ${K.net('ucsb', 0)} on average under $30,000 of income and ${K.net('ucsb', 2)} between $48,001 and $75,000.`,
  body: (h) => `
<h2>Two admit rates a year apart</h2>
<p>The headline figure, ${h.rate('ucsb')}, comes from the preliminary UCOP tables for fall 2026 and will move a little as waitlist offers go out and conditions of admission are checked. The fall 2025 figure of ${r25} is final. Between the two, the applicant pool barely changed, from ${h.num(c.applicants)} to ${h.num(n.applicants)}, while offers rose from ${h.num(c.admitted)} to ${h.num(n.admitted)}. A student reading an older guide that quotes ${h.pct(s.admRate!, 1)} is looking at the fall 2024 class in the federal data, two cycles back.</p>
<h2>Why Californians face the steeper odds</h2>
<p>Residency splits the pool in two. For fall 2025 the campus admitted ${h.num(res.inState[1])} of ${h.num(res.inState[0])} California applicants (${share(res.inState)}), against ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} applicants from other states (${share(res.outOfState)}) and ${h.num(res.international[1])} of ${h.num(res.international[0])} from abroad. Non-residents accept far less often, so ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} students who enrolled were Californians. The preliminary fall 2026 offers follow the same pattern: ${h.num(resN.caResident[1])} of ${h.num(resN.caResident[0])} California applicants. The waiting list is a live route at Santa Barbara: ${h.num(wl.accepted)} students took a place on it for fall 2025 and ${h.num(wl.admitted)} were later admitted.</p>
${h.miniGap('ucsb')}
<h2>The 2026-27 bill for a new Gaucho</h2>
<p>The financial aid office builds its sample budget for the 2026 cohort in the residence halls: ${h.usd(cin.tuition)} of tuition and Student Services Fee, ${h.usd(cin.fees)} of campus fees, ${h.usd(cin.housingFood)} of rent and food, then books, transport, personal costs and a ${h.usd(cin.health)} health care allowance for the UC student insurance plan, which is why the lines in the table below fall short of the ${h.sticker('ucsb')} total. A non-resident adds ${h.usd(cout.tuition - cin.tuition)} of Nonresident Supplemental Tuition, for ${h.stickerOut('ucsb')}. Tuition is fixed for each entering cohort under the UC Tuition Stability Plan, so the figure a 2026 entrant sees is the one paid through graduation, for up to six years.</p>
${h.miniNet('ucsb')}
<h2>One UC application, no early round</h2>
<p>Santa Barbara is reached through the single UC application, with no Early Decision or Early Action. For fall 2027 the filing window runs from October 1 to November 30, 2026, and decisions arrive by March 31, 2027. Applicants often add ${h.c('uc-santa-cruz', 'UC Santa Cruz')} and ${h.c('uc-riverside', 'UC Riverside')} on the same form, at no extra essay cost; the ${h.a('compare-colleges', 'comparison tool')} puts their prices side by side.</p>`,
  faqs: [
    { q: 'Is UC Santa Barbara harder to get into for California residents?', a: `On the fall 2025 figures, yes. UC Santa Barbara admitted ${K.num(res.inState[1])} of ${K.num(res.inState[0])} California applicants, about ${share(res.inState)}, while ${share(res.outOfState)} of out-of-state applicants got an offer. Non-residents pay ${K.usd(cout.tuition - cin.tuition)} more in 2026-27 tuition and enroll far less often, which is why the campus admits a larger share of them to fill its seats.` },
    { q: 'Does UC Santa Barbara look at SAT or ACT scores?', a: 'No. UC Santa Barbara follows the University of California test-free policy: SAT and ACT scores are not used for admission or for scholarships, and they can only be reported after the application is submitted, mainly for course placement once enrolled. The review rests on the A-G GPA, the difficulty of courses taken and the four personal insight answers.' },
    { q: 'What does UC Santa Barbara cost a California family earning under $100,000?', a: `Under the Blue and Gold Opportunity Plan, most California families earning up to $100,000 receive enough grants to cover UC tuition, if they file the FAFSA or California Dream Act Application by March 2. Housing, food and books remain: the federal average net price for families between $48,001 and $75,000 was ${K.net('ucsb', 2)} in ${K.meta.years.net}.` },
    { q: 'How many UC Santa Barbara applicants get in from the waitlist?', a: `More than at most selective campuses. For fall 2025, UC Santa Barbara offered ${K.num(wl.offered)} applicants a waitlist place, ${K.num(wl.accepted)} accepted it and ${K.num(wl.admitted)} were admitted from it, according to the Common Data Set 2025-2026. Accepting the place and keeping grades up through senior year is worth doing here.` },
  ],
  related: ['college:uc-santa-cruz', 'college:uc-riverside', 'college:usc', 'compare-colleges', 'net-price-calculator'],
});
