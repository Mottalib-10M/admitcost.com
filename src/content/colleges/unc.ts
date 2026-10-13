import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('unc');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);

export default defineCollege({
  slug: 'unc',
  title: `UNC Acceptance Rate 2026: ${K.rate('unc')}, In-State vs Out-of-State`,
  description: `UNC-Chapel Hill admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025: ${share(res.inState)} of North Carolinians, ${share(res.outOfState)} from other states. See 2026-27 costs and net price.`,
  intro: `UNC-Chapel Hill admitted ${K.rate('unc')} of first-year applicants for fall 2025, but ${share(res.inState)} of North Carolina residents and ${share(res.outOfState)} of out-of-state applicants.`,
  resume: `The University of North Carolina at Chapel Hill admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an overall rate of ${K.rate('unc')}, with ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-26. That average hides two different competitions: ${K.num(res.inState[1])} of ${K.num(res.inState[0])} North Carolinians were admitted, against ${K.num(res.outOfState[1])} of ${K.num(res.outOfState[0])} out-of-state applicants. Tests are optional for anyone with a weighted GPA of 2.8 or above; enrolled students who sent the SAT scored ${K.satRange('unc')} in the middle half. The 2026-27 on-campus budget is ${K.sticker('unc')} for a resident and ${K.stickerOut('unc')} for a non-resident. In ${K.meta.years.net} aided families paid ${K.net('unc', 0)} on average under $30,000 of income and ${K.net('unc', 2)} between $48,001 and $75,000, and the Carolina Covenant meets full need without loans for the lowest-income students.`,
  body: (h) => `
<h2>Two admission rates under one roof</h2>
<p>At Chapel Hill the overall rate is an average of two very different contests. For fall 2025, ${share(res.inState)} of North Carolina applicants were admitted and ${share(res.outOfState)} of applicants from other states, with international applicants at ${share(res.international)}. The out-of-state pool, ${h.num(res.outOfState[0])} applications, is almost three times the in-state pool for a much smaller number of seats: ${h.num(res.outOfState[2])} out-of-state students enrolled against ${h.num(res.inState[2])} North Carolinians. For a student outside North Carolina, a score inside the range does not change the arithmetic of that pool.</p>
${h.miniScore('unc', 'SAT')}
<h2>October 15, not November 1</h2>
<p>UNC's early round is non-binding Early Action with an October 15 deadline, two weeks before most early dates, and supporting materials and test scores are due by November 7. Regular Decision closes January 15. There is no Early Decision. The waiting list did move for fall 2025: ${h.num(wl.accepted)} students accepted a place and ${h.num(wl.admitted)} were admitted from it, so accepting a place is worth the effort. Admitted students in both rounds confirm by May 1, which leaves time to compare aid offers from other colleges before deciding.</p>
<h2>A test rule tied to GPA</h2>
<p>The UNC System sets a floor rather than a requirement. An applicant with a weighted GPA of 2.8 or above on a 4.0 scale may apply without scores; below 2.8, an ACT of 17 or an SAT of 930 is required. In practice the enrolled class sits far above that line, with an average weighted GPA of ${L.gpa!.average}. Among students who sent scores, ${h.pct(sc.pctAct!, 0)} used the ACT and ${h.pct(sc.pctSat!, 0)} the SAT (a student could send both), and the SAT median was ${h.num(sc.satComposite![1]!)}.</p>
${h.miniGap('unc')}
<h2>What a year in Chapel Hill costs</h2>
<p>For 2026-27 a resident pays ${h.usd(cin.tuition)} in tuition and ${h.usd(cin.fees)} in fees, and the on-campus budget adds ${h.usd(cin.housingFood)} for housing and food. A non-resident's tuition is ${h.usd(cout.tuition)}. Student Blue health insurance is not in the budget; an enrolled student billed for it can ask for a budget adjustment. Travel is set at ${h.usd(cin.travel)} for residents and ${h.usd(cout.travel)} for non-residents, the only living-cost line that differs. Compare with ${h.c('uva', 'UVA')} and ${h.c('umich', 'Michigan')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Is UNC harder to get into from out of state?', a: `Much harder. For fall 2025 UNC-Chapel Hill admitted ${K.num(res.outOfState[1])} of ${K.num(res.outOfState[0])} out-of-state applicants, ${share(res.outOfState)}, against ${share(res.inState)} for North Carolina residents, according to its Common Data Set 2025-26. Out-of-state students made up ${K.num(res.outOfState[2])} of the ${K.num(c.enrolled!)} first-years who enrolled. The in-state pool is about a third the size and still fills most of the seats.` },
    { q: 'When is the UNC Early Action deadline?', a: 'UNC-Chapel Hill’s Early Action deadline for fall 2027 entry is October 15, with supporting materials and test scores due November 7. The plan is non-binding, so admitted students keep until May 1 to decide. Regular Decision applications are due January 15, with supporting materials and scores by February 21.' },
    { q: 'Does UNC require the SAT or ACT?', a: 'Only below a GPA line. UNC-Chapel Hill, following the UNC System rule for 2026-27 applicants and beyond, does not require a score from students with a weighted GPA of 2.8 or above on a 4.0 scale. Applicants under 2.8 must submit an ACT of 17 or higher or an SAT of 930 or higher. Self-reported scores are used and superscored.' },
    { q: 'What is the Carolina Covenant at UNC?', a: 'The Carolina Covenant is UNC-Chapel Hill’s aid package for students from families at or below 200% of the federal poverty guideline who meet other economic criteria. It meets full financial need with grants, scholarships and Work-Study, with no loans, so qualifying students can graduate debt-free. Eligibility is assessed automatically from the regular aid application.' },
  ],
  related: ['college:uva', 'college:umich', 'college:georgia-tech', 'compare-colleges', 'net-price-calculator'],
});
