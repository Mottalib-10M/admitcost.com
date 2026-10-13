import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('boston-university');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'boston-university',
  title: `Boston University Acceptance Rate 2026: ${K.rate('boston-university')}, Cost`,
  description: `Boston University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('boston-university')}). See the 2026 BU Promise, the ${cost.year} cost and the net price paid by income.`,
  intro: `BU admitted ${K.rate('boston-university')} of applicants for fall 2025; from 2026-27 families under $75,000 pay nothing for tuition, housing or dining.`,
  resume: `Boston University's acceptance rate for the class that entered in fall 2025 is ${K.rate('boston-university')}: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} first-year applicants, with ${K.num(c.enrolled!)} enrolling, according to its Common Data Set 2025-2026. BU stays test optional through the fall 2028 entering class; the ${K.pct(sc.pctSat!, 0)} of enrolled students who sent an SAT had a middle 50% of ${K.satRange('boston-university')}. Its ${cost.year} cost of attendance is ${K.sticker('boston-university')}. The new BU Promise changes the price for most families from 2026-27: no tuition, housing or dining charges up to $75,000 of income, at most $20,000 a year up to $200,000, and full need met without loans. Before it, in ${K.meta.years.net}, aided families between $48,001 and $75,000 paid an average of ${K.net('boston-university', 2)} after all grants.`,
  body: (h) => `
<h2>The BU Promise, read line by line</h2>
<p>BU rewrote its aid for students starting in 2026-27, and the change is large. Every domestic first-year student now gets aid meeting 100% of demonstrated need without student loans. On top of that, families with typical assets earning up to $75,000 pay nothing for tuition, housing and dining, and families earning up to $200,000 pay at most $20,000 a year. Compare that ceiling with the ${h.meta.years.net} federal average for the $75,001 to $110,000 band, ${h.net('boston-university', 3)}, and with the ${h.sticker('boston-university')} budget: for most middle-income families, the price on the award letter should now be well under the older averages.</p>
${h.miniGrant('boston-university')}
<h2>An international, urban class</h2>
<p>BU's applicant pool is one of the largest on this site, and its Common Data Set shows how national and global it is: for fall 2025, only about one admit in nine was a Massachusetts resident, while about a quarter were international students. Early Decision is the most reliable door. BU admitted roughly three in ten of its Early Decision applicants in fall 2025, against a much lower rate in the regular round, and those offers made up more than a fifth of the total.</p>
<h2>Test optional until 2028</h2>
<p>BU has committed in writing to remain test optional for applicants through the fall 2028 entering class, including for its merit scholarship programs. The published range, ${h.satRange('boston-university')}, comes from the ${h.pct(sc.pctSat!, 0)} who sent an SAT. A score near the top of that range strengthens a file; a score near the bottom is usually better left out.</p>
${h.miniScore('boston-university', 'SAT')}
<h2>What families still pay for</h2>
<p>The billed part of the ${cost.year} budget, tuition of ${h.usd(cost.tuition!)}, fees and ${h.usd(cost.housingFood!)} for housing and dining, is what the Promise covers. Books, transportation and personal costs remain, and health insurance is added for students without qualifying coverage, as Massachusetts requires. Families comparing Boston schools can set BU beside ${h.c('northeastern', 'Northeastern')}, ${h.c('boston-college', 'Boston College')} and ${h.c('tufts', 'Tufts')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What does the Boston University Promise cover in 2026-27?', a: 'For domestic first-year students starting in 2026-27, Boston University meets 100% of demonstrated need without student loans. Families with typical assets and income up to $75,000 pay nothing for tuition, housing and dining, and families earning up to $200,000 pay no more than $20,000 a year. Books, travel and personal costs are not part of that ceiling.' },
    { q: 'What is the Boston University acceptance rate for fall 2025?', a: `Boston University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('boston-university')}, and ${K.num(c.enrolled!)} students enrolled, according to its Common Data Set 2025-2026. The federal IPEDS rate for the fall 2024 class was ${K.pct(s.admRate!, 1)}, from a smaller pool, and Early Decision applicants were admitted at a much higher rate.` },
    { q: 'Is Boston University test optional?', a: 'Yes. Boston University states that it is test optional for first-year applicants applying through the fall 2028 and spring 2029 entry terms, for all its undergraduate schools and its merit scholarship programs. International applicants still need an English test such as TOEFL, IELTS or Duolingo unless an exemption applies.' },
  ],
  related: ['college:northeastern', 'college:boston-college', 'college:tufts', 'college:nyu', 'compare-colleges', 'cost-of-attendance'],
});
