import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('brown');
const L = s.latest!;
const n = L.cycleNewer!;
const cost = L.cost!;

export default defineCollege({
  slug: 'brown',
  title: `Brown Acceptance Rate 2026: ${K.rate('brown')} for the Class of 2030`,
  description: `Brown admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} applicants for the Class of 2030 (${K.rate('brown')}). 2026 guide to the admitted SAT range, Early Decision and net price by family income.`,
  intro: `Brown admitted ${K.rate('brown')} of the students who applied to enter in fall 2026, a figure the admission office posted for the Class of 2030 before the next Common Data Set.`,
  resume: `Brown's acceptance rate for the class that entered in fall 2026 (Class of 2030) is ${K.rate('brown')}: ${K.num(n.admitted)} admitted from ${K.num(n.applicants)} applications, and ${K.num(n.enrolled!)} first-year students on campus, according to the admission office. The federal figure for the fall 2024 class was ${K.pct(s.admRate!, 2)}. Brown requires the SAT or ACT again since the 2024-25 cycle; admitted students who sent the SAT had a middle 50% of ${K.satRange('brown')}, and ${K.actRange('brown')} on the ACT. The ${cost.year} cost of attendance for a new student is ${K.sticker('brown')}. Aided families paid much less in ${K.meta.years.net}: ${K.net('brown', 1)} on average between $30,001 and $48,000 and ${K.net('brown', 3)} between $75,001 and $110,000. Under The Brown Promise no aid package contains a loan, and most families under $60,000 owe no parent contribution.`,
  body: (h) => `
<h2>Brown already counts the Class of 2030</h2>
<p>Brown's Common Data Set lives in an interactive dashboard that cannot be read without a browser, so this page uses the admission office's own count of the newest class instead. For fall 2026 it received ${h.num(n.applicants)} applications and made ${h.num(n.admitted)} offers, ${h.rate('brown')}. Of those offers, 889 went out in December through binding Early Decision, about a third of the class. Early Decision closes November 1; Regular Decision closes January 5, with answers by early April.</p>
<p>Brown also fills two small programs from separate pools. The Brown|RISD Dual Degree, shared with the Rhode Island School of Design, drew 856 applicants for 20 places. The Program in Liberal Medical Education, an eight-year path into medicine, drew 4,687 applicants for 50 places. Both are far harder to enter than Brown itself.</p>
${h.miniScore('brown', 'SAT')}
<h2>Scores of admitted students, not enrolled ones</h2>
<p>The range ${h.satRange('brown')} published by Brown describes admitted students who sent the SAT, not the smaller group who enrolled, so it is not directly comparable with the enrolled ranges shown on other pages of this site. The ACT range is ${h.actRange('brown')}. Brown requires one of the two tests from every first-year applicant since the 2024-25 cycle, superscores both, and treats the SAT essay and ACT writing as optional.</p>
<h2>The Brown Promise in numbers</h2>
<p>Brown is need-blind and meets full demonstrated need, and The Brown Promise removed packaged loans from every undergraduate aid offer. For the Class of 2030, 51% of students received a need-based scholarship or grant. The ${cost.year} budget for an incoming student is ${h.usd(cost.tuition!)} of tuition, ${h.usd(cost.fees!)} of fees, ${h.usd(cost.housingFood!)} for housing and food and ${h.usd(cost.personal!)} of personal costs, for ${h.sticker('brown')}. Books are not a separate line, since most scholarship students take part in a course materials program.</p>
${h.miniNet('brown')}
<h2>What the federal averages say about middle incomes</h2>
<p>In ${h.meta.years.net}, families between $48,001 and $75,000 paid ${h.net('brown', 2)} on average and families between $75,001 and $110,000 paid ${h.net('brown', 3)}, against a federal cost of attendance of ${h.usd(s.coa!)} that year. Above $110,000 the average jumps to ${h.net('brown', 4)}, a band where many families receive little or no grant. The ${h.a('net-price-calculator', 'net price calculator')} applies these bands to your own income, and ${h.c('dartmouth', 'Dartmouth')}, ${h.c('yale', 'Yale')} and ${h.c('columbia', 'Columbia')} are the closest comparisons on price and odds.</p>`,
  faqs: [
    { q: 'What is the Brown acceptance rate for the Class of 2030?', a: `Brown admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} applicants for the class that entered in fall 2026, an acceptance rate of ${K.rate('brown')}, according to the admission office's figures. ${K.num(n.enrolled!)} first-year students enrolled. Of the admitted students, 889 were accepted through binding Early Decision in December, which closes on November 1 each year.` },
    { q: 'Does Brown require the SAT or ACT?', a: 'Yes. Brown requires SAT or ACT scores from first-year applicants since the 2024-25 admission cycle, and every applicant must send one of the two. It superscores the SAT and the ACT, the essay and writing sections stay optional, and the ACT Science section has been optional since spring 2025.' },
    { q: 'How hard is it to get into the Brown PLME program?', a: 'Much harder than Brown overall. For the Class of 2030, the Program in Liberal Medical Education received 4,687 applicants and enrolled 50 students, according to the Brown admission office. The Brown|RISD Dual Degree enrolled 20 students from 856 applicants. Both programs have their own review on top of the regular Brown application.' },
    { q: 'Does Brown include loans in financial aid?', a: 'No. Through The Brown Promise, Brown removed packaged loans from all undergraduate financial aid offers, so 100% of students on aid have no loans in their package. Brown meets full demonstrated need, admits need-blind, and most families with under $60,000 of annual income have a $0 parent contribution. Students still contribute through work and summer earnings.' },
  ],
  related: ['college:yale', 'college:dartmouth', 'college:columbia', 'college:upenn', 'compare-colleges', 'net-price-calculator'],
});
