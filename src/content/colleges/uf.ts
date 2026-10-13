import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('uf');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);

export default defineCollege({
  slug: 'uf',
  title: `UF Acceptance Rate 2026: ${K.rate('uf')}, Early Decision, SAT and Cost`,
  description: `The University of Florida admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('uf')}). See binding Early Decision, the 2026-27 costs and the net price by income.`,
  intro: `The University of Florida admitted ${K.rate('uf')} of first-year applicants for fall 2025, and a Florida resident's 2026-27 budget is ${K.sticker('uf')}.`,
  resume: `The University of Florida admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('uf')}, and ${K.num(c.enrolled!)} enrolled, according to the main campus Common Data Set 2025-2026. Floridians and out-of-state applicants were admitted at close rates, ${share(res.inState)} and ${share(res.outOfState)}, but residents filled most seats. The SAT or ACT is required, and UF also accepts the CLT; the enrolled middle range was ${K.satRange('uf')} on the SAT and ${K.actRange('uf')} on the ACT. The 2026-27 budget for an incoming freshman is ${K.sticker('uf')} for a Florida resident and ${K.stickerOut('uf')} for a non-resident. Aided families paid far less in the federal ${K.meta.years.net} figures: ${K.net('uf', 0)} under $30,000 of income and ${K.net('uf', 2)} between $48,001 and $75,000, averages for students on aid rather than a quote.`,
  body: (h) => `
<h2>Binding Early Decision at UF for 2026-27</h2>
<p>For the 2026-27 cycle the University of Florida offers three plans, starting with binding Early Decision, filed through the Common App by October 15, 2026, with a decision by December 11, 2026. Early Action, non-binding, closes November 1 with decisions on January 22, and Regular Decision closes January 15 with decisions on March 19. Early Decision requires a signed agreement from the student, a parent and the counselor and is limited to one college. It is open to every main-campus applicant but not to UF Online. The Common Data Set 2025-2026 gives no Early Decision counts, so there is no ED admit rate to weigh yet.</p>
${h.miniScore('uf', 'SAT')}
<h2>Residents and non-residents, nearly the same odds</h2>
<p>UF admitted out-of-state applicants at almost the same rate as Floridians for fall 2025: ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} against ${h.num(res.inState[1])} of ${h.num(res.inState[0])}. The difference shows up in who comes. Florida residents took ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} seats and out-of-state students ${h.num(res.outOfState[2])}, because a Floridian pays a fraction of the non-resident price. International applicants faced ${share(res.international)}. The waiting list is close to closed: ${h.num(wl.accepted)} students accepted a place for fall 2025 and ${h.num(wl.admitted)} was admitted.</p>
<h2>Scores are required by state rule</h2>
<p>UF requires an SAT or ACT, as do Florida's other public universities under a Board of Governors rule, and accepts the CLT. Most enrolled students sent the SAT (${h.pct(sc.pctSat!, 0)}), and the median was ${h.num(sc.satComposite![1]!)}. Official scores for the 2026-27 cycle are due October 22 for Early Decision, November 8 for Early Action and January 22 for Regular Decision.</p>
${h.miniGap('uf')}
<h2>A low sticker and the Machen scholarship</h2>
<p>The 2026-27 freshman budget lists ${h.usd(cin.tuition + cin.fees)} of tuition and fees for a Florida resident and ${h.usd(cout.tuition + cout.fees)} for a non-resident, both on 30 credit hours, plus ${h.usd(cin.housingFood)} of living expenses, ${h.usd(cin.books)} of books and ${h.usd(cin.travel)} of transportation. Low-income first-generation students whose parents earn under $55,000, with assets under $35,000, can receive a full grant and scholarship package through the Machen Florida Opportunity Scholarship. Compare with ${h.c('fsu', 'Florida State')} and ${h.c('georgia-tech', 'Georgia Tech')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'When is the UF Early Decision deadline?', a: 'The University of Florida’s binding Early Decision deadline is October 15, 2026, through the Common App, with official test scores due October 22 and a decision by December 11, 2026. Early Action closes November 1 and Regular Decision January 15. UF Online applicants cannot use Early Decision, and a student may apply ED to only one college.' },
    { q: 'Is UF easier to get into from out of state?', a: `Almost the same. For fall 2025 the University of Florida admitted ${share(res.outOfState)} of out-of-state applicants and ${share(res.inState)} of Florida residents, according to its Common Data Set 2025-2026. Far fewer out-of-state admits enroll, ${K.num(res.outOfState[2])} against ${K.num(res.inState[2])} Floridians, largely because of the ${K.usd(cout.tuition + cout.fees)} non-resident tuition and fees.` },
    { q: 'How much does UF cost for a Florida resident in 2026-27?', a: `The University of Florida's 2026-27 budget for an incoming Florida freshman is ${K.sticker('uf')}: ${K.usd(cin.tuition + cin.fees)} of projected tuition and fees on 30 credit hours, ${K.usd(cin.housingFood)} of living expenses, books, transportation, personal costs and a small federal loan fee. Tuition and fees for continuing students may be lower than for new freshmen.` },
  ],
  related: ['college:fsu', 'college:georgia-tech', 'college:unc', 'compare-colleges', 'net-price-calculator'],
});
