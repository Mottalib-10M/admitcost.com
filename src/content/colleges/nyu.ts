import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('nyu');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'nyu',
  title: `NYU Tuition 2026 and Acceptance Rate: ${K.rate('nyu')}, Net Price`,
  description: `NYU tuition and fees for 2026-27 are ${K.usd(cost.tuition!)} and the cost of attendance ${K.sticker('nyu')}. Fall 2025 admit rate ${K.rate('nyu')}, SAT range and net price by family income.`,
  intro: `NYU's ${cost.year} budget is ${K.sticker('nyu')} at most of its New York schools, and it admitted ${K.rate('nyu')} of its ${K.num(c.applicants)} applicants for fall 2025.`,
  resume: `NYU's tuition and fees for ${cost.year} are ${K.usd(cost.tuition!)} at the College of Arts and Science and most of its New York schools, and the full cost of attendance, with food, housing, books, transportation and personal costs, is ${K.sticker('nyu')} before health insurance; Stern and Tisch charge more. NYU received ${K.num(c.applicants)} first-year applications for fall 2025, the largest pool among the private universities on this site, and admitted ${K.num(c.admitted)}, an acceptance rate of ${K.rate('nyu')} according to its Common Data Set 2025-2026. Testing is optional and only ${K.pct(sc.pctSat!, 0)} of the enrolled class sent an SAT. On federal aid figures for ${K.meta.years.net}, families under $30,000 paid an average of ${K.net('nyu', 0)} and families between $75,001 and $110,000 paid ${K.net('nyu', 3)}, before the NYU Promise raised the tuition-free line to $100,000.`,
  body: (h) => `
<h2>One university, three price lists</h2>
<p>NYU does not have a single sticker price. Its financial aid office publishes a budget of ${h.sticker('nyu')} for ${cost.year} for the College of Arts and Science and most schools in New York, a higher one for the Stern School of Business and the highest for the Tisch School of the Arts, where tuition and fees pass ${h.usd(75000)}. Student health insurance is listed apart and is not in those totals. Housing in Manhattan explains the size of the food and housing line, ${h.usd(cost.housingFood!)}, one of the largest on the site.</p>
<h2>What the NYU Promise changes</h2>
<p>For first-year students admitted to the New York campus who file their aid forms on time, NYU now promises that families with income under $100,000 pay no tuition, and that it meets 100% of demonstrated need without expecting loans. That is a larger commitment than the federal figures reflect: in ${h.meta.years.net} the average net price was ${h.net('nyu', 2)} for families between $48,001 and $75,000 and ${h.net('nyu', 4)} above $110,000. The promise does not cover transfer students, and it is tied to the aid deadlines, which are worth putting in a calendar before the application itself.</p>
${h.miniNet('nyu')}
<h2>The largest applicant pool, and two binding rounds</h2>
<p>More than a hundred thousand students apply to NYU each year, and the university has no Early Action. It offers two binding Early Decision rounds, on November 1 and January 1, and a regular deadline in early January. A student who knows NYU is the first choice can apply in either round; a student comparing aid offers should not, because Early Decision commits the student before the aid package can be compared with others.</p>
<p>The score range, ${h.satRange('nyu')} on the SAT and ${h.actRange('nyu')} on the ACT, comes from a minority of the class, since only ${h.pct(sc.pctSat!, 0)} sent an SAT and ${h.pct(sc.pctAct!, 0)} an ACT. Tisch programs and the music and studio art programs of Steinhardt read an audition or a portfolio instead of a score.</p>
${h.miniScore('nyu', 'SAT')}
<h2>Comparing NYU with its neighbors</h2>
<p>Families weighing NYU usually look at ${h.c('columbia', 'Columbia')}, ${h.c('fordham', 'Fordham')} and ${h.c('boston-university', 'Boston University')}, or at ${h.c('usc', 'USC')}, another large private university in a big city. Their tuition promises start at different incomes, so the order changes with the family's earnings. The ${h.a('compare-colleges', 'comparison tool')} shows it for your own income.</p>`,
  faqs: [
    { q: 'How much does NYU cost per year in 2026-27?', a: `NYU’s financial aid office lists a ${cost.year} cost of attendance of ${K.sticker('nyu')} for the College of Arts and Science and most New York schools: ${K.usd(cost.tuition!)} in tuition and fees, ${K.usd(cost.housingFood!)} for food and housing, plus books, transportation and personal costs. Stern and Tisch budgets are higher, and health insurance is billed separately.` },
    { q: 'Is NYU tuition free under $100,000?', a: 'Yes, for first-year students admitted to the New York campus who submit the required aid applications by the deadline. Under the NYU Promise, families earning less than $100,000 pay no tuition, and NYU meets full demonstrated need without expecting loans. Housing and food still enter the calculation, and transfer students are not eligible.' },
    { q: 'What is NYU’s acceptance rate for the Class of 2029?', a: `NYU admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('nyu')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. The federal IPEDS rate for the fall 2024 class was ${K.pct(s.admRate!, 2)}, from a smaller pool of applicants.` },
    { q: 'Does NYU have Early Action?', a: 'No. NYU offers two binding Early Decision rounds, Early Decision I on November 1 with decisions in mid-December and Early Decision II on January 1 with decisions in mid-February, plus a regular deadline in early January. Admitted Early Decision students must withdraw their other applications and enroll.' },
  ],
  related: ['college:columbia', 'college:usc', 'college:boston-university', 'college:fordham', 'compare-colleges', 'college-tuition'],
});
