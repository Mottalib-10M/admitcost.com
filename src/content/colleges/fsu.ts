import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('fsu');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const gpaU = (L.gpa as unknown as { unweighted: number }).unweighted;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);

export default defineCollege({
  slug: 'fsu',
  title: `FSU Acceptance Rate 2026: ${K.rate('fsu')}, Deadlines, SAT and Cost`,
  description: `Florida State admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025 (${K.rate('fsu')}). See the 2026 Early Decision rules, the SAT range and the ${L.cost!.year} cost.`,
  intro: `Florida State University admitted ${K.rate('fsu')} of first-year applicants for fall 2025, and its Regular Decision deadline is December 1, not January.`,
  resume: `Florida State University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('fsu')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-26. Floridians were admitted at ${share(res.inState)}, applicants from other states at ${share(res.outOfState)}. A test score is required by Florida Board of Governors rule; the enrolled middle range was ${K.satRange('fsu')} on the SAT and ${K.actRange('fsu')} on the ACT, and the average weighted high school GPA was ${L.gpa!.average}. The ${L.cost!.year} on-campus budget in Tallahassee is ${K.sticker('fsu')} for a Florida resident and ${K.stickerOut('fsu')} for a non-resident. In ${K.meta.years.net}, aided families under $30,000 paid ${K.net('fsu', 0)} on average and those between $75,001 and $110,000 paid ${K.net('fsu', 3)}, figures that describe students on aid rather than any one household.`,
  body: (h) => `
<h2>Four deadlines, and the early ones differ by residency</h2>
<p>Florida State's calendar for fall 2027 entry has more moving parts than most. Early Decision, binding, is for domestic students outside the talent-based majors and the CARE Summer Bridge program, due October 15. Early Action, non-binding and due the same day, is for Florida residents only. Both are answered on December 17. Regular Decision closes December 1, with decisions on February 18, and a rolling deadline of March 1 follows with decisions in April. An out-of-state student who wants an early answer therefore has one choice, and it is binding, with a deposit due January 15.</p>
${h.miniScore('fsu', 'SAT')}
<h2>Scores are required, and self-reported on the portal</h2>
<p>FSU must ask for an ACT, CLT or SAT under the state rule, and at least one score has to arrive before the materials deadline. It does not take self-reported scores from the Common App; students report them on the FSU Admissions Portal instead. In the fall 2025 class, ${h.pct(sc.pctSat!, 0)} of enrolled students sent an SAT and ${h.pct(sc.pctAct!, 0)} an ACT, with a median SAT of ${h.num(sc.satComposite![1]!)}. The Common Data Set also gives an unweighted average GPA of ${gpaU}, a useful counterpart to the weighted ${h.num(L.gpa!.average)} for a student whose school does not weight honors classes.</p>
<h2>Who gets in, and who comes</h2>
<p>For fall 2025, ${h.num(res.inState[1])} of ${h.num(res.inState[0])} Florida applicants were admitted, against ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} from other states and ${h.num(res.international[1])} of ${h.num(res.international[0])} international applicants. Floridians filled ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} seats. The waiting list offers little: ${h.num(wl.accepted)} students accepted a place and ${h.num(wl.admitted)} were admitted.</p>
${h.miniGap('fsu')}
<h2>The ${L.cost!.year} budget in Tallahassee</h2>
<p>The tuition office prices a year at 13 credits per term: ${h.usd(cin.tuition)} of tuition for a resident and ${h.usd(cout.tuition)} for a non-resident, ${h.usd(cin.fees)} of fees, ${h.usd(cin.housingFood)} for housing and food on campus, ${h.usd(cin.books)} of books and ${h.usd(cin.personal)} of personal costs. Transportation is set at ${h.usd(cin.travel)} for residents and ${h.usd(cout.travel)} for non-residents. FSU has also given public notice of proposed market-rate fee increases for fall 2027. Compare with ${h.c('uf', 'UF')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Can out-of-state students apply Early Action to FSU?', a: 'No. Florida State University’s Early Action plan, due October 15, is open to Florida residents only. Domestic students from other states who want an early answer can apply Early Decision on the same date, which is binding and requires a deposit by January 15 if admitted. Both early plans are answered on December 17; Regular Decision closes December 1.' },
    { q: 'Does FSU accept self-reported test scores?', a: 'Yes, but not from the Common App. Florida State University asks students to self-report SAT, ACT or CLT results on its own Admissions Portal through the Self-reported Test Scores form. At least one score must be in before the materials deadline, and February is the last exam date that can be used for admission.' },
    { q: 'What GPA do FSU freshmen have?', a: `Florida State's fall 2025 first-years averaged a weighted high school GPA of ${L.gpa!.average} and an unweighted GPA of ${gpaU}, according to the Common Data Set 2025-26, with nearly every student reporting one. Grades are read together with a required ACT, CLT or SAT under Florida Board of Governors regulation 6.002.` },
  ],
  related: ['college:uf', 'college:georgia-tech', 'college:unc', 'compare-colleges', 'net-price-calculator'],
});
