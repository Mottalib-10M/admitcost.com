import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

type Res3 = { inState: number[]; outOfState: number[]; international: number[] };
const s = K.s('texas-am');
const L = s.latest!;
const c = L.cycle!;
const sc = L.scores!;
const res = (c as unknown as { byResidency: Res3 }).byResidency;
const cin = L.cost!.inState! as Record<string, number>;
const cout = L.cost!.outOfState! as Record<string, number>;
const share = (a: number[]) => K.pct(a[1] / a[0], 1);
const sat1300 = K.satPos('texas-am', 1300)!;

export default defineCollege({
  slug: 'texas-am',
  title: `Texas A&M Acceptance Rate 2026: ${K.rate('texas-am')}, Top 10% Rule, Cost`,
  description: `Texas A&M admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025 (${K.rate('texas-am')}). See the top 10% rule, the 2026-27 tuition and the net price by family income.`,
  intro: `Texas A&M admitted ${K.rate('texas-am')} of its first-year applicants for fall 2025, and Texans in the top 10% of their class are admitted automatically.`,
  resume: `Texas A&M University in College Station admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('texas-am')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Texans saw ${share(res.inState)} admitted, applicants from other states ${share(res.outOfState)}. Testing is optional; among enrolled students who sent scores, the SAT middle range was ${K.satRange('texas-am')} and the ACT ${K.actRange('texas-am')}. For 2026-27, first-year tuition is ${K.usd(cin.tuition)} for a Texas resident and ${K.usd(cout.tuition)} for a non-resident, plus ${K.usd(cin.fees)} of required fees and ${K.usd(cin.housingFood)} for housing and food on campus. In ${K.meta.years.net}, aided families under $30,000 paid ${K.net('texas-am', 0)} on average, and families earning $60,000 or less now have tuition and fees covered under Aggie Assurance. Those averages describe students on aid, not a quote for one household.`,
  body: (h) => `
<h2>Top 10 percent, then holistic review</h2>
<p>Texas residents who rank in the top 10 percent of their graduating class are admitted automatically, and A&M starts sending those decisions in September. The rank has to be reported on the self-reported transcript (STARS) and verified by an official transcript, or the automatic decision is delayed. Home-schooled Texans applying for fall 2027 count as top 10 percent with an SAT of 1290 or an ACT of 27. Everyone else, including every out-of-state applicant, goes through holistic review, with decisions from October. One exception cuts across both paths: applicants to the College of Engineering, automatic admits included, are reviewed separately for placement into General Engineering.</p>
${h.miniGap('texas-am')}
<h2>A public flagship that still admits half</h2>
<p>For fall 2025 A&M admitted ${h.num(res.inState[1])} of ${h.num(res.inState[0])} Texas applicants and ${h.num(res.outOfState[1])} of ${h.num(res.outOfState[0])} from other states, plus ${h.num(res.international[1])} of ${h.num(res.international[0])} international applicants. Texans took ${h.num(res.inState[2])} of the ${h.num(c.enrolled!)} seats. There is no waiting list and no Early Decision: the fall application for College Station opens August 1 and closes December 1, with documents due December 15, and decisions roll out from the fall onward.</p>
${h.miniScore('texas-am', 'SAT')}
<h2>Optional tests, real ranges</h2>
<p>A&M does not require the SAT or ACT and says sending scores creates no advantage or disadvantage. Most of the enrolled class sent one anyway: ${h.pct(sc.pctSat!, 0)} an SAT and ${h.pct(sc.pctAct!, 0)} an ACT. The median SAT was ${h.num(sc.satComposite![1]!)}, and a 1,300 sits around the ${h.pct(sat1300, 0)} mark of those who submitted. When scores are sent, A&M uses the highest total from a single test date rather than a superscore.</p>
<h2>What the 2026-27 year costs</h2>
<p>The Common Data Set lists ${h.usd(cin.tuition)} of first-year tuition for Texans and ${h.usd(cout.tuition)} for non-residents, ${h.usd(cin.fees)} of required fees, ${h.usd(cin.housingFood)} for a double room and meal plan, ${h.usd(cin.books)} of books, ${h.usd(cin.travel)} of transportation and ${h.usd(cin.personal)} of other expenses. Tuition varies by major, and the university points families to its tuition calculator rather than one published total. The Scorecard cost of attendance shown in the band above, ${h.sticker('texas-am')}, is the newest complete federal figure, for ${s.sticker!.year}, and it sets the scale for the federal net price averages. Aggie Assurance changes the low end: families earning $60,000 or less have tuition and fees covered, and College Station adds grants of $500 to $1,500 up to $130,000 of income. Compare with ${h.c('ut-austin', 'UT Austin')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Does Texas A&M automatically admit the top 10 percent?', a: 'Yes. Texas A&M automatically admits Texas residents who rank in the top 10 percent of their graduating class, reported on the STARS record and confirmed by an official transcript with a numeric rank. Decisions for these students begin in September. Engineering applicants who qualify are still reviewed separately for placement into General Engineering.' },
    { q: 'Is Texas A&M test-optional?', a: `Yes. Texas A&M says it is test optional and will not require the ACT or SAT for freshman applicants, while encouraging students who have scores to send them through the testing agency. In the fall 2025 class, ${K.pct(sc.pctSat!, 0)} of enrolled students submitted an SAT; the middle half scored ${K.satRange('texas-am')}.` },
    { q: 'What is Aggie Assurance at Texas A&M?', a: 'Aggie Assurance is Texas A&M’s tuition pledge: students whose family income is $60,000 or less have tuition and fees covered by grants or scholarships, a promise extended to fees from fall 2023. At College Station, students with family income above $60,000 and up to $130,000 can also receive tuition support grants of $500 to $1,500.' },
  ],
  related: ['college:ut-austin', 'college:georgia-tech', 'college:uf', 'compare-colleges', 'net-price-calculator'],
});
