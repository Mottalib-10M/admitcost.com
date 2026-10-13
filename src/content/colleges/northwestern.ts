import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('northwestern');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'northwestern',
  title: `Northwestern Acceptance Rate 2026: ${K.rate('northwestern')}, ED Odds, Net Price`,
  description: `Northwestern admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('northwestern')}), far more in Early Decision. See its ${cost.year} cost and the net price paid by income.`,
  intro: `Northwestern admitted ${K.rate('northwestern')} of all applicants for fall 2025 but about one in five in Early Decision.`,
  resume: `Northwestern University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('northwestern')}, according to its Common Data Set 2025-2026, and ${K.num(c.enrolled!)} enrolled. The overall figure hides a wide gap: about one Early Decision applicant in five was admitted, against a far lower rate in the regular round, and Early Decision supplied close to a third of all offers. Testing stays optional for fall 2027 applicants; ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('northwestern')}. The ${cost.year} cost of attendance is ${K.sticker('northwestern')} before transportation. Aid is strictly need-based and loan-free, and most families earning under $150,000 attend tuition-free; in ${K.meta.years.net}, aided families between $48,001 and $75,000 paid an average of ${K.net('northwestern', 2)}.`,
  body: (h) => `
<h2>Early Decision versus the regular round</h2>
<p>Northwestern published the counts behind its Early Decision round, which few universities do: 1,212 admits out of 5,939 Early Decision applicants for fall 2025. The regular round, by subtraction, admitted roughly one applicant in seventeen. There is a single binding round on November 1, with decisions in mid-December, and no Early Action or second Early Decision. For a student whose first choice is clearly Northwestern, the difference in odds is large; for one who must compare aid offers, Northwestern's loan-free need-based aid makes the binding commitment less risky than at schools that rely on loans.</p>
${h.miniScore('northwestern', 'SAT')}
<h2>Loan-free, need-based, tuition-free under $150,000</h2>
<p>Northwestern meets 100% of demonstrated need with grants, scholarships and work-study, without loans, and gives no merit aid. Most families earning under $150,000 a year attend tuition-free. The federal net prices for ${h.meta.years.net} reflect that policy: ${h.net('northwestern', 0)} under $30,000, ${h.net('northwestern', 1)} between $30,001 and $48,000, and ${h.net('northwestern', 3)} between $75,001 and $110,000. Above $110,000 the average rose to ${h.net('northwestern', 4)}, because that band includes many families with no need at all.</p>
${h.miniNet('northwestern')}
<h2>Applying to a school, not only to the university</h2>
<p>Applicants to Northwestern choose an undergraduate school, from Weinberg College of Arts and Sciences to the McCormick engineering school, Medill for journalism, Bienen for music, Communication or Education and Social Policy. Each reads its own applicants, and a few programs ask for an audition, a portfolio or an extra essay. The overall admit rate mixes all of them, so a student applying to one of the smaller schools should read its specific requirements on the admissions site before deciding which round to use.</p>
<h2>A quarter system and its budget</h2>
<p>Northwestern bills tuition by the quarter, three quarters a year, for a ${cost.year} tuition of ${h.usd(cost.tuition!)}, and housing and food of ${h.usd(cost.housingFood!)}. The waiting list moved for fall 2025, with 167 students admitted from it. Families comparing Chicago-area options will look at ${h.c('uchicago', 'UChicago')}, whose free-tuition line sits higher, and at ${h.c('uiuc', 'Illinois')} for an in-state public price; the ${h.a('compare-colleges', 'comparison tool')} handles residency.</p>`,
  faqs: [
    { q: 'What is Northwestern’s Early Decision acceptance rate?', a: 'For the class that entered in fall 2025, Northwestern admitted 1,212 of 5,939 Early Decision applicants, about 20%, according to its Common Data Set 2025-2026. Those students made up close to a third of all admits. Early Decision is binding and due November 1; there is no Early Action round.' },
    { q: 'Is Northwestern tuition-free under $150,000?', a: 'Northwestern says most families earning less than $150,000 a year attend tuition-free. It meets full demonstrated need with grants and work-study and no loans, and its aid is strictly need-based, so families with high incomes and no need should expect to pay close to the full cost of attendance.' },
    { q: 'What is Northwestern’s overall acceptance rate for fall 2025?', a: `Northwestern admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('northwestern')}, and ${K.num(c.enrolled!)} enrolled. The federal IPEDS rate for fall 2024 was ${K.pct(s.admRate!, 2)}, so applications grew faster than offers between the two cycles, and the regular round became harder still.` },
  ],
  related: ['college:uchicago', 'college:duke', 'college:uiuc', 'college:vanderbilt', 'compare-colleges', 'net-price-calculator'],
});
