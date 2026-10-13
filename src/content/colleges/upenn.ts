import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('upenn');
const L = s.latest!;
const c = L.cycle!;
const cost = L.cost!;

export default defineCollege({
  slug: 'upenn',
  title: `Penn Acceptance Rate 2026: ${K.rate('upenn')}, ED Odds and Net Price`,
  description: `Penn admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('upenn')}). 2026 data on Early Decision odds, SAT scores, the ${cost.year} budget and the net price by income.`,
  intro: `The University of Pennsylvania admitted ${K.rate('upenn')} of its applicants for fall 2025, and more than a third of its offers went to Early Decision applicants.`,
  resume: `Penn's acceptance rate for the class that entered in fall 2025 (Class of 2029) is ${K.rate('upenn')}: ${K.num(c.admitted)} admitted from ${K.num(c.applicants)} applicants, and ${K.num(c.enrolled!)} enrolled, per Penn's Common Data Set 2025-2026. The SAT or ACT is required for every first-year applicant, with a waiver for students who face hardship in testing. Penn reports section scores only, so the composite range of ${K.satRange('upenn')} is an approximation built from them; the ACT range is ${K.actRange('upenn')}. The ${cost.year} on-campus cost of attendance is ${K.sticker('upenn')}, transportation included. In ${K.meta.years.net}, aided families paid ${K.net('upenn', 1)} on average between $30,001 and $48,000 but ${K.net('upenn', 3)} between $75,001 and $110,000, a higher middle-income figure than at Princeton or Harvard that year. Families up to $200,000 with typical assets now get at least full tuition covered.`,
  body: (h) => `
<h2>Four schools, one application, a binding November round</h2>
<p>Nobody applies to Penn in general. The application goes to one of four undergraduate schools, the College of Arts and Sciences, Wharton, Engineering or Nursing, or to a coordinated dual-degree program, and each reads its own pool. Penn does not publish admit rates by school in the Common Data Set, so the overall ${h.rate('upenn')} is the only official rate.</p>
<p>What Penn does publish is the weight of its early round. For fall 2025, 1,266 of 9,503 Early Decision applicants were admitted, 13.3%, against 2,304 of the other 63,041, 3.7%. That makes ${h.pct(1266 / c.admitted, 0)} of all offers. The plan binds you to enroll if admitted; the deadline for fall 2027 entry is November 1, 2026, and Regular Decision closes January 5, 2027, with answers in April. Penn's waiting list held 2,566 students who accepted a place for fall 2025, and 60 were admitted.</p>
${h.miniScore('upenn', 'SAT')}
<h2>Pennsylvania residents fare better than anyone else</h2>
<p>The residency table in the CDS is unusual for a private university. Of 5,411 applicants from Pennsylvania, 451 were admitted, 8.3%. Applicants from other states were admitted at 5.4%, and international applicants at 2.5%, 441 out of 17,882. Penn is need-aware for international applicants other than citizens and permanent residents of Canada and Mexico, which is part of that last gap.</p>
${h.miniNet('upenn')}
<h2>The Quaker Commitment and the middle-income bill</h2>
<p>Penn's aid program meets full need with grants and work-study, no loans, and ignores the value of the family home. Since the latest expansion, families earning up to $200,000 with typical assets have at least full tuition covered, and families under $75,000 have every billed cost covered: tuition and fees, housing and dining. The ${cost.year} budget behind those promises is ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.fees!)} of fees and ${h.usd(cost.housingFood!)} for housing and food on campus.</p>
<p>The federal averages above predate the $200,000 tuition guarantee, which is why the $75,001 to $110,000 band sits well above what ${h.c('princeton', 'Princeton')} or ${h.c('harvard', 'Harvard')} families paid that year. Run your own figures through Penn's calculator, or place Penn next to ${h.c('columbia', 'Columbia')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What are the Early Decision odds at Penn?', a: 'For fall 2025, Penn admitted 1,266 of 9,503 Early Decision applicants, 13.3%, and 2,304 of the remaining 63,041 applicants, 3.7%, according to its Common Data Set 2025-2026. The early pool is a different group of students, so the gap is not entirely caused by the plan itself. Early Decision at Penn is binding: an admitted student must enroll.' },
    { q: 'Does Penn require the SAT or ACT for fall 2027?', a: 'Yes. Penn requires SAT or ACT scores from every first-year applicant, domestic or international, including homeschooled and QuestBridge applicants. Students facing real hardship, such as no test center nearby or the cost of the exam, can submit a testing waiver explaining it instead. Penn superscores both tests, and the ACT Science section is not required.' },
    { q: 'Is Penn tuition free under $200,000?', a: 'For most families, yes. Under the Quaker Commitment, families earning up to $200,000 with typical assets receive aid that covers at least full tuition, and under $75,000 aid covers tuition, fees, housing and dining. Aid packages contain grants and work-study but no loans, and the value of the family home is not counted.' },
    { q: 'Do Pennsylvania residents have an advantage at Penn?', a: 'The Common Data Set suggests a higher rate. For fall 2025, Penn admitted 451 of 5,411 Pennsylvania applicants, 8.3%, compared with 2,678 of 49,251 applicants from other states, 5.4%, and 441 of 17,882 international applicants, 2.5%. Penn publishes no policy giving residents a preference, so the difference may reflect who applies from the state.' },
  ],
  related: ['college:columbia', 'college:princeton', 'college:cornell', 'college:brown', 'compare-colleges', 'net-price-calculator'],
});
