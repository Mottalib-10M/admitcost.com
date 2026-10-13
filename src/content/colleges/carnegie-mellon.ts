import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('carnegie-mellon');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'carnegie-mellon',
  title: `Carnegie Mellon Acceptance Rate 2026: ${K.rate('carnegie-mellon')}, SAT, Cost`,
  description: `Carnegie Mellon admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('carnegie-mellon')}). See test rules by college, the ${cost.year} cost and the net price paid by income.`,
  intro: `Carnegie Mellon admitted ${K.rate('carnegie-mellon')} of applicants for fall 2025; its computer science school requires the SAT or ACT.`,
  resume: `Carnegie Mellon University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('carnegie-mellon')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Testing depends on the college: computer science requires the SAT or ACT, most other colleges are test-flexible and fine arts is test optional. ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('carnegie-mellon')} and a math section near the maximum. The ${cost.year} cost of attendance for new students is ${K.sticker('carnegie-mellon')}, before health insurance. Families earning under $75,000 attend tuition-free and those under $100,000 receive aid without federal loans; in ${K.meta.years.net} aided families paid an average of ${K.net('carnegie-mellon', 1)} between $30,001 and $48,000 and ${K.net('carnegie-mellon', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Admission college by college</h2>
<p>Carnegie Mellon admits students to one of its colleges, and the rules differ sharply. The School of Computer Science requires the SAT or ACT and is among the most selective programs in the country. Engineering, Dietrich College, Mellon College of Science, the Tepper School of Business and Heinz College's information systems program are test-flexible: they accept the SAT, the ACT, or exam results such as AP, IB, A-Level or the French Baccalauréat. The College of Fine Arts is test optional and judges a portfolio or an audition, with earlier deadlines for drama and music. The overall rate of ${h.rate('carnegie-mellon')} therefore mixes very different contests.</p>
${h.miniScore('carnegie-mellon', 'SAT')}
<h2>Early Decision and a waiting list that rarely moves</h2>
<p>CMU has one binding Early Decision round on November 2, not available for drama, music or the BXA design programs. For fall 2025 it admitted 553 of 2,680 Early Decision applicants, about one in five, roughly twice the overall rate. Its waiting list is the opposite of a second chance: thousands accepted a place on it for fall 2025, and only a few dozen were admitted. A student who wants CMU should treat Early Decision as the main door.</p>
<h2>Aid thresholds and the budget</h2>
<p>CMU commits to meeting 100% of demonstrated need for domestic students. Families earning less than $75,000 attend tuition-free, and those under $100,000 receive aid with no federal loans. The federal averages for ${h.meta.years.net} were ${h.net('carnegie-mellon', 0)} under $30,000 and ${h.net('carnegie-mellon', 4)} above $110,000. The ${cost.year} budget of ${h.sticker('carnegie-mellon')} includes tuition of ${h.usd(cost.tuition!)} and ${h.usd(cost.housingFood!)} for housing and food; all first-years live on campus, and health insurance is billed unless waived.</p>
${h.miniNet('carnegie-mellon')}
<h2>Outcomes and comparisons</h2>
<p>The College Scorecard puts the median earnings of CMU students ten years after entry at ${h.usd(s.earn10!)}, one of the highest figures among the universities on this site, driven by computing and engineering. Students admitted to CMU often also hold offers from ${h.c('mit', 'MIT')}, ${h.c('georgia-tech', 'Georgia Tech')} and ${h.c('cornell', 'Cornell')}; for a Pennsylvanian, ${h.c('pitt', 'Pitt')} and ${h.c('penn-state', 'Penn State')} offer in-state prices.</p>`,
  faqs: [
    { q: 'What is Carnegie Mellon’s acceptance rate for fall 2025?', a: `Carnegie Mellon admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('carnegie-mellon')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Rates differ widely between its colleges, with computer science far more selective than the overall figure.` },
    { q: 'Does Carnegie Mellon require the SAT?', a: 'It depends on the college. The School of Computer Science requires the SAT or ACT. Engineering, science, Dietrich, Tepper and the Heinz information systems program are test-flexible and also accept AP, IB, A-Level or similar exam results. The College of Fine Arts is test optional and relies on a portfolio or audition.' },
    { q: 'Is Carnegie Mellon free for families under $75,000?', a: 'Yes for tuition. Carnegie Mellon states that students whose families earn less than $75,000 a year attend tuition-free, and that students from families under $100,000 receive aid without federal loans. CMU meets 100% of demonstrated need for domestic students, so housing and food are covered according to need.' },
  ],
  related: ['college:mit', 'college:georgia-tech', 'college:cornell', 'college:pitt', 'compare-colleges', 'what-is-a-good-sat-score'],
});
