import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('uva');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const ed = (c as unknown as { earlyDecision: { applied: number; admitted: number } }).earlyDecision;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);
const edRate = K.pct(ed.admitted / ed.applied, 1);

export default defineCollege({
  slug: 'uva',
  title: `UVA Acceptance Rate 2026: ${K.rate('uva')}, Early Decision and Cost`,
  description: `UVA admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025 (${K.rate('uva')}), ${edRate} in Early Decision. See 2026-27 tuition, the SAT range and the net price.`,
  intro: `The University of Virginia admitted ${K.rate('uva')} of its first-year applicants for fall 2025, and ${edRate} of those who applied Early Decision.`,
  resume: `The University of Virginia admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('uva')}, and ${K.num(c.enrolled!)} enrolled, according to the UVA Common Data Set 2025-2026. Binding Early Decision ran far higher, ${K.num(ed.admitted)} offers for ${K.num(ed.applied)} applications. Tests are optional for fall 2027 applicants; among enrolled students who sent them, the SAT middle range was ${K.satRange('uva')} and the ACT ${K.actRange('uva')}. For 2026-27, first-year tuition is ${K.usd(cin.tuition)} for a Virginian and ${K.usd(cout.tuition)} for a non-resident, before ${K.usd(cin.fees)} of required fees and ${K.usd(cin.housingFood)} for housing and food on Grounds. The newest complete federal cost of attendance, ${K.sticker('uva')} for ${s.sticker!.year}, set the base for the federal net price averages: ${K.net('uva', 0)} for aided families under $30,000 and ${K.net('uva', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Residency is rated very important</h2>
<p>UVA says so in its own Common Data Set: state residency is a "very important" factor, on the same level as course rigor, class rank, GPA and character. The numbers follow. For fall 2025 the university admitted ${h.num(res.inState[1])} of ${h.num(res.inState[0])} Virginia applicants (${share(res.inState)}) and ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} applicants from other states (${share(res.outOfState)}). International applicants faced ${share(res.international)}. Virginians made up ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} students who enrolled. A non-resident applying here is in a pool more than twice as large as the in-state one, competing for fewer than half the seats.</p>
${h.miniScore('uva', 'SAT')}
<h2>Early Decision, Early Action or neither</h2>
<p>UVA runs both plans with a November 1 deadline. Early Decision is binding, answered by December 15, with a deposit due January 15; for fall 2025 it produced ${h.num(ed.admitted)} admits from ${h.num(ed.applied)} applications, a rate of ${edRate} against ${h.rate('uva')} overall. Early Action is non-binding and answered by February 15, and Regular Decision closes January 5 with decisions by April 1. Part of the ED gap reflects who applies early, and UVA does not publish separate in-state and out-of-state ED figures, so the number is a signal rather than a promise. The waiting list rarely moves: ${h.num(wl.accepted)} students held a place for fall 2025 and ${h.num(wl.admitted)} were admitted.</p>
<h2>Reading the score data</h2>
<p>Fewer than half of the enrolled class sent an SAT (${h.pct(sc.pctSat!, 1)}) and ${h.pct(sc.pctAct!, 1)} sent an ACT, so the published ranges describe a self-selected group of students who chose to send scores. The SAT median was ${h.num(sc.satComposite![1]!)}. UVA lists test scores as "considered", below the factors it rates very important. Essays, recommendations, activities and talent are rated important, and an interview is not considered at all, so there is no meeting to prepare for.</p>
${h.miniGap('uva')}
<h2>What a year on Grounds costs in 2026-27</h2>
<p>Tuition varies by year of study and by school, and the Common Data Set gives first-year figures: ${h.usd(cin.tuition)} in state, ${h.usd(cout.tuition)} out of state, ${h.usd(cin.fees)} of required fees, ${h.usd(cin.housingFood)} for a double room and full meal plan, ${h.usd(cin.books)} of books, ${h.usd(cin.travel)} of transportation and ${h.usd(cin.personal)} of other expenses. The student financial services office publishes the full estimated budget; compare it with ${h.c('unc', 'UNC')} and ${h.c('umich', 'Michigan')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Does Early Decision help at UVA?', a: `On the published numbers, the early round is far kinder. For fall 2025 UVA admitted ${K.num(ed.admitted)} of ${K.num(ed.applied)} Early Decision applicants, ${edRate}, while the overall rate was ${K.rate('uva')}, according to the Common Data Set 2025-2026. ED is binding: an admitted student cancels other applications and pays a deposit by January 15.` },
    { q: 'Is UVA test-optional for 2027 applicants?', a: `Yes. UVA's Common Data Set marks the SAT and ACT as not required for fall 2027 applicants but considered if submitted, with January 15 as the last date for scores. In the fall 2025 class, ${K.pct(sc.pctSat!, 1)} of enrolled students submitted an SAT and ${K.pct(sc.pctAct!, 1)} an ACT.` },
    { q: 'How hard is it to get into UVA from out of state?', a: `Harder than from Virginia. For fall 2025 UVA admitted ${K.num(res.outOfState[1])} of ${K.num(res.outOfState[0])} out-of-state applicants, ${share(res.outOfState)}, against ${share(res.inState)} for Virginians, and its Common Data Set rates state residency as a very important admission factor. Out-of-state first-year tuition for 2026-27 is ${K.usd(cout.tuition)}, against ${K.usd(cin.tuition)} for a Virginia resident.` },
  ],
  related: ['college:unc', 'college:umich', 'college:georgia-tech', 'compare-colleges', 'net-price-calculator'],
});
