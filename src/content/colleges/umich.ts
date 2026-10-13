import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('umich');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const wl = (c as unknown as { waitlist: { offered: number; accepted: number; admitted: number } }).waitlist;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const sat1450 = K.satPos('umich', 1450)!;

export default defineCollege({
  slug: 'umich',
  title: `Michigan Acceptance Rate 2026: ${K.rate('umich')}, SAT and Net Price`,
  description: `Michigan admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('umich')}). See the 2026 test-optional rules, the new Early Decision and net price by income.`,
  intro: `The University of Michigan admitted ${K.rate('umich')} of first-year applicants for fall 2025, about 1 in ${K.oneIn('umich')}, and free tuition reaches in-state families earning up to $125,000.`,
  resume: `The University of Michigan's acceptance rate for the class that entered in fall 2025 is ${K.rate('umich')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants, with ${K.num(c.enrolled!)} enrolled, according to the Ann Arbor Common Data Set 2025-2026. Testing stays optional for fall 2027 applicants; among enrolled students who sent scores, the SAT middle range was ${K.satRange('umich')} and the ACT ${K.actRange('umich')}, with ${K.pct(sc.pctSat!, 0)} submitting an SAT. The ${L.cost!.year} budget for a lower-division student is ${K.sticker('umich')} for a Michigan resident and ${K.stickerOut('umich')} for a non-resident. Federal net price data for ${K.meta.years.net} show aided families under $30,000 paying ${K.net('umich', 0)} on average and those between $48,001 and $75,000 paying ${K.net('umich', 2)}, before the latest expansion of the state guarantee. The Go Blue Guarantee now covers tuition for qualifying in-state families up to $125,000 of income.`,
  body: (h) => `
<h2>Binding Early Decision arrives in Ann Arbor</h2>
<p>The class that entered in fall 2025 could apply early only through non-binding Early Action, and the Common Data Set answers no to Early Decision, but the admissions office now lists three plans: binding Early Decision due November 1 with a decision by December 24, Early Action due the same day with an answer by January 29, and Regular Decision due February 1. The ED agreement must carry the signatures of the student, a parent and the counselor, and an admitted student withdraws every other application. Michigan has published no ED admit rate yet, so nobody can say how much the plan helps; what it changes for sure is that a non-resident who applies ED commits before seeing an aid offer from anywhere else.</p>
${h.miniScore('umich', 'SAT')}
<h2>Test-optional, with a self-report rule</h2>
<p>Michigan remains test-optional for fall 2027 and says a missing score is no disadvantage. The catch is timing: an early applicant who wants a score read must self-report it by November 1, and answering no to the testing question cannot be reversed during the early round. A 1,450 sits near the ${h.pct(sat1450, 0)} mark of the enrolled students who sent scores, which places it inside the range but below the median of ${h.num(sc.satComposite![1]!)}. Michigan superscores and accepts self-reported results; admitted students who used them must send official scores to enroll.</p>
<h2>Two prices for the same degree</h2>
<p>A Michigan resident pays ${h.usd(cin.tuition + cin.fees)} in 2026-27 tuition and fees in the lower division; a non-resident pays ${h.usd(cout.tuition + cout.fees)}. Both add ${h.usd(cin.housingFood)} for a residence hall with the unlimited meal plan, plus books, transport and personal costs. Tuition also climbs once a student reaches 55 credits, to an upper-division rate, so the junior and senior years cost more than the first. The Go Blue Guarantee changes the in-state picture: families with income of $125,000 or less and assets below $125,000 qualify for free tuition, which the federal averages for ${h.meta.years.net} only partly show.</p>
${h.miniGap('umich')}
<h2>The waiting list is long</h2>
<p>For fall 2025, ${h.num(wl.offered)} applicants were offered a waitlist place, ${h.num(wl.accepted)} accepted, and ${h.num(wl.admitted)} were finally admitted. Compare the odds and costs with ${h.c('uva', 'UVA')}, ${h.c('unc', 'UNC')} and ${h.c('georgia-tech', 'Georgia Tech')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Does Michigan have Early Decision now?', a: 'Yes. The University of Michigan lists binding Early Decision for first-year applicants, due November 1 with a decision by December 24 and a commitment by January 6. Early Action, also due November 1, stays non-binding with a decision by January 29. The School of Music, Theatre and Dance is the exception and uses Regular Decision only, with a December 1 deadline.' },
    { q: 'Is Michigan test-optional for fall 2027?', a: `Yes. Michigan says it will remain test-optional for the 2027 application cycle and review the policy on an ongoing basis. In the fall 2025 class, ${K.pct(sc.pctSat!, 0)} of enrolled students submitted an SAT and ${K.pct(sc.pctAct!, 0)} an ACT. Early applicants who want a score considered must self-report it by November 1.` },
    { q: 'Who qualifies for Michigan’s Go Blue Guarantee?', a: 'Michigan residents attending full time who are admitted as high-achieving students and come from families with incomes of $125,000 and under and assets below $125,000 receive free tuition for up to four years. The threshold was raised on all three U-M campuses. The guarantee is about tuition: housing, food and books still appear on the bill.' },
    { q: 'How much more does Michigan cost out of state?', a: `In 2026-27 a lower-division non-resident at Michigan is budgeted ${K.stickerOut('umich')} against ${K.sticker('umich')} for a Michigan resident. The difference is almost entirely tuition: ${K.usd(cout.tuition + cout.fees)} against ${K.usd(cin.tuition + cin.fees)} in tuition and fees, on the College of Literature, Science, and the Arts rates published by the financial aid office.` },
  ],
  related: ['college:uva', 'college:unc', 'college:georgia-tech', 'compare-colleges', 'net-price-calculator'],
});
