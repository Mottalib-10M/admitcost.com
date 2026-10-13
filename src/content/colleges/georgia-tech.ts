import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('georgia-tech');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);
const sat1450 = K.satPos('georgia-tech', 1450)!;

export default defineCollege({
  slug: 'georgia-tech',
  title: `Georgia Tech Acceptance Rate 2026: ${K.rate('georgia-tech')}, SAT, Cost`,
  description: `Georgia Tech admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('georgia-tech')}). SAT or ACT required, EA1 for Georgians. The 2026-27 budget is ${K.sticker('georgia-tech')} in state.`,
  intro: `Georgia Tech admitted ${K.rate('georgia-tech')} of its first-year applicants for fall 2025, and an SAT or ACT score is required of everyone.`,
  resume: `Georgia Tech admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('georgia-tech')}, and ${K.num(c.enrolled!)} enrolled, according to the Institute's Common Data Set 2025-2026. The SAT or ACT is required for every first-year applicant; the middle half of enrolled students scored ${K.satRange('georgia-tech')} on the SAT and ${K.actRange('georgia-tech')} on the ACT, and ${K.pct(sc.pctSat!, 0)} of them sent an SAT. Residency splits the odds sharply, with ${share(res.inState)} of Georgians admitted against ${share(res.outOfState)} of out-of-state applicants. The 2026-27 first-year budget on campus is ${K.sticker('georgia-tech')} for a Georgia resident and ${K.stickerOut('georgia-tech')} for an out-of-state student. In ${K.meta.years.net} aided families under $30,000 paid ${K.net('georgia-tech', 0)} on average, and those above $110,000 paid ${K.net('georgia-tech', 4)}, a spread of ${K.usd(K.netRaw('georgia-tech', 4)! - K.netRaw('georgia-tech', 0)!)} between the lowest and highest income bands.`,
  body: (h) => `
<h2>Two Early Action dates, split by residency</h2>
<p>Georgia Tech splits its early round by where the applicant lives. Early Action 1, due October 15, is for students at a Georgia high school or Georgia residents living elsewhere. Early Action 2, due November 2, is for everyone else, international students included. Both are non-binding and reviewed the same way as Regular Decision, which closes January 6. One detail matters for money: merit awards such as the Stamps President's Scholars Program are open only to students who apply through an Early Action plan, with no separate scholarship application.</p>
${h.miniScore('georgia-tech', 'SAT')}
<h2>Scores are required and read by section</h2>
<p>Every first-year applicant must submit at least one SAT or ACT, and Georgia Tech recommends self-reporting. It takes the highest Evidence-Based Reading and Writing and Math sections across SAT sittings, and the highest English, Math and Reading on the ACT; the ACT Science and Writing sections are not used. A 1,450 lands around the ${h.pct(sat1450, 0)} point of the enrolled class on our curve, below the median of ${h.num(sc.satComposite![1]!)}. The enrolled class's SAT Math range runs from ${h.num(sc.satMath![0]!)} to ${h.num(sc.satMath![2]!)}.</p>
<h2>In-state and out-of-state are different schools</h2>
<p>The resident advantage is large. For fall 2025, ${h.num(res.inState[1])} of ${h.num(res.inState[0])} Georgia applicants were admitted, against ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} from other states and ${h.num(res.international[1])} of ${h.num(res.international[0])} from abroad. Georgians filled ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} seats. The waiting list helped a few: ${h.num(wl.accepted)} accepted a place and ${h.num(wl.admitted)} were admitted.</p>
${h.miniGap('georgia-tech')}
<h2>The 2026-27 bill</h2>
<p>The out-of-state premium is the whole story of the price. A Georgia resident pays ${h.usd(cin.tuition)} in tuition and ${h.usd(cin.fees)} in mandatory fees; an out-of-state student pays ${h.usd(cout.tuition)} in tuition. Housing and the standard meal plan come to ${h.usd(cin.housingFood)}. The financial aid office has already posted an estimated budget for 2027-28, useful for a student applying this fall who wants the figure for the actual first year. Federal averages show aided families paying far less than the sticker: ${h.net('georgia-tech', 2)} on average between $48,001 and $75,000 of income in ${h.meta.years.net}. In-state students from families under $55,500 can earn a degree debt free through the Georgia Tech Promise scholarship. Compare with ${h.c('umich', 'Michigan')} and ${h.c('ut-austin', 'UT Austin')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is the difference between Georgia Tech EA1 and EA2?', a: 'Georgia Tech’s Early Action 1, due October 15, is reserved for students attending a Georgia high school or Georgia residents living outside the state. Early Action 2, due November 2, is for applicants from outside Georgia, international students included. Both are non-binding, decisions come in early December for EA1 and late January for EA2, and both make a student eligible for merit scholarships.' },
    { q: 'Does Georgia Tech require the SAT or ACT for 2027?', a: `Yes. Georgia Tech requires at least one SAT or ACT score from every first-year applicant and recommends self-reporting it. For the fall 2025 class, ${K.pct(sc.pctSat!, 0)} of enrolled students submitted an SAT and ${K.pct(sc.pctAct!, 0)} an ACT. CLT, AP and IB results may be added but do not replace the requirement.` },
    { q: 'How much does Georgia Tech cost out of state in 2026-27?', a: `Georgia Tech budgets ${K.stickerOut('georgia-tech')} for an out-of-state first-year living on campus in 2026-27, against ${K.sticker('georgia-tech')} for a Georgia resident. Tuition is ${K.usd(cout.tuition)} against ${K.usd(cin.tuition)}; fees, housing, food and books are the same for both, and only the travel allowance differs. International students pay slightly more in tuition and fees.` },
  ],
  related: ['college:umich', 'college:ut-austin', 'college:unc', 'compare-colleges', 'net-price-calculator'],
});
