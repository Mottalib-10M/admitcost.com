import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('syracuse');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'syracuse',
  title: `Syracuse Acceptance Rate 2026: ${K.rate('syracuse')}, SAT Range, Net Price`,
  description: `Syracuse University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('syracuse')}). See the ${cost.year} cost of attendance, waiting list odds and net price by income.`,
  intro: `Syracuse admitted ${K.rate('syracuse')} of applicants for fall 2025, and its waiting list admitted more than two thousand students.`,
  resume: `Syracuse University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('syracuse')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Syracuse is test-optional through the spring 2028 entry term and keeps students without scores eligible for merit scholarships; the ${K.pct(sc.pctSat!, 0)} who sent an SAT had a middle 50% of ${K.satRange('syracuse')}. The ${cost.year} on-campus cost of attendance is ${K.sticker('syracuse')}, and first-year students must live in university housing for two years. Syracuse does not promise to meet full need, and its federal net prices are higher than at the wealthiest private universities: in ${K.meta.years.net} aided families paid an average of ${K.net('syracuse', 0)} under $30,000, ${K.net('syracuse', 2)} between $48,001 and $75,000 and ${K.net('syracuse', 4)} above $110,000.`,
  body: (h) => `
<h2>Admission college by college</h2>
<p>Syracuse reads applications by college and program, from the Newhouse School of Public Communications to engineering, architecture and the College of Visual and Performing Arts. That shapes its Early Decision rule, one of the most flexible on this site: the binding commitment applies only if the student is admitted to the first-choice college or program. A student offered a place in a second-choice college can weigh it with other offers until May 1. Syracuse now runs three early options, Early Decision I and a new non-binding Early Action on November 1, and Early Decision II on January 5. Its Common Data Set reports 1,478 admits from 2,654 Early Decision applicants, a much higher share than the overall rate.</p>
${h.miniScore('syracuse', 'SAT')}
<h2>The waiting list really moves</h2>
<p>At most selective universities a waiting list place is a polite no. At Syracuse it is a working route in: for fall 2025 about fourteen thousand applicants were offered a place, about half accepted, and 2,039 were admitted from it. A student placed on the list should accept the place and confirm interest, especially for programs with room to fill.</p>
<h2>Price: strive to meet need, not a guarantee</h2>
<p>Syracuse's financial aid office says it strives to meet the need of admitted students but publishes no full-need or no-loan promise. The federal averages show what that means: the average for the lowest income band, ${h.net('syracuse', 0)}, is close to the one for the band from $30,001 to $48,000, ${h.net('syracuse', 1)}, a sign that grants rarely cover the whole budget. Scholarship programs such as Say Yes cover tuition for eligible students from partner cities. The ${cost.year} budget is ${h.sticker('syracuse')}, including tuition of ${h.usd(cost.tuition!)}; with the required health insurance it rises further, and the two-year residence rule keeps it in place for the first two years.</p>
${h.miniNet('syracuse')}
<h2>New York students and comparisons</h2>
<p>About three applicants in ten were New York residents, admitted at about the same rate as students from other states. For them, ${h.c('binghamton', 'Binghamton')} and ${h.c('stony-brook', 'Stony Brook')} offer SUNY resident prices; ${h.c('rochester', 'Rochester')} and ${h.c('boston-university', 'Boston University')} are the private alternatives. The ${h.a('compare-colleges', 'comparison tool')} shows the gap at your income.</p>`,
  faqs: [
    { q: 'What is the Syracuse University acceptance rate for fall 2025?', a: `Syracuse University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('syracuse')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. More than two thousand of those admits came from the waiting list, which is unusually active.` },
    { q: 'Is Syracuse Early Decision binding?', a: 'Only partly. Syracuse’s Early Decision is binding if the student is admitted to the first-choice college or program. A student offered admission to a second-choice college instead can compare that offer with others until May 1. Syracuse also offers non-binding Early Action from the fall 2027 cycle and an Early Decision II round in January.' },
    { q: 'Does Syracuse require the SAT or ACT?', a: 'No. Syracuse states that scores are not required for students applying for fall 2026, spring 2027, fall 2027 or spring 2028 admission, and that students who do not send scores are not disadvantaged and remain eligible for merit scholarships. Only a minority of the fall 2025 class submitted an SAT.' },
  ],
  related: ['college:rochester', 'college:boston-university', 'college:binghamton', 'college:stony-brook', 'compare-colleges', 'net-price-calculator'],
});
