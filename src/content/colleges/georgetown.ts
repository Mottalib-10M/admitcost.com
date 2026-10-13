import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('georgetown');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'georgetown',
  title: `Georgetown Acceptance Rate 2026: ${K.rate('georgetown')}, SAT Required, Cost`,
  description: `Georgetown admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('georgetown')}) and requires the SAT or ACT. See its ${cost.year} cost and the net price paid by income.`,
  intro: `Georgetown admitted ${K.rate('georgetown')} of applicants for fall 2025, requires a test score and gives no merit scholarships.`,
  resume: `Georgetown University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('georgetown')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Georgetown requires the SAT or ACT from every first-year applicant, with official score reports, and recommends AP results too: ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('georgetown')}. It has no binding Early Decision, only a restrictive Early Action in November. The ${cost.year} first-year cost of attendance is ${K.sticker('georgetown')}. Aid is need-based only and meets full need for U.S. citizens and permanent residents, sometimes with federal loans; in ${K.meta.years.net}, aided families paid an average of ${K.net('georgetown', 0)} under $30,000 and ${K.net('georgetown', 2)} between $48,001 and $75,000.`,
  body: (h) => `
<h2>No Early Decision, by design</h2>
<p>Georgetown is one of the few highly selective universities that has kept binding Early Decision off its calendar. Its early round is a non-binding Early Action on November 1, with decisions by mid-December; applicants in that round may not apply Early Decision anywhere else, but may hold other Early Action applications. The regular deadline is January 1. Every applicant is also assigned an alumni interview when one is available, and completing it is expected. The result is a class built less from early commitments than at most of its peers.</p>
<h2>Six schools, six essays</h2>
<p>Applicants choose one undergraduate school: the College of Arts and Sciences, the Walsh School of Foreign Service, the McDonough School of Business, the Berkley School of Nursing, the School of Health or the McCourt School of Public Policy. Each has its own essay and reads its own pool. Georgetown applies the overall rate to none of them in particular, so a student should look at what the chosen school asks for and why. International applicants face much longer odds: they were about one applicant in seven but fewer than one admit in ten for fall 2025.</p>
${h.miniScore('georgetown', 'SAT')}
<h2>Testing is required</h2>
<p>Georgetown requires the SAT or ACT and recommends AP scores for students who took AP exams. Because almost the whole class sent a score, the range of ${h.satRange('georgetown')} is a reliable picture of admitted students, unlike the ranges of test-optional universities, which describe only the students who chose to send.</p>
<h2>Need-based aid only</h2>
<p>Georgetown awards no academic or merit scholarships. It meets the full demonstrated need of U.S. citizens and permanent residents with grants, work and, in some packages, federal loans. In ${h.meta.years.net} the average net price rose from ${h.net('georgetown', 1)} between $30,001 and $48,000 to ${h.net('georgetown', 3)} between $75,001 and $110,000 and ${h.net('georgetown', 4)} above that, a steeper curve than at universities with no-loan policies. The ${cost.year} budget is ${h.sticker('georgetown')}, a little higher in nursing.</p>
${h.miniNet('georgetown')}
<h2>Washington alternatives</h2>
<p>Families looking at Georgetown often consider ${h.c('george-washington', 'George Washington')}, ${h.c('american-university', 'American')} and ${h.c('boston-college', 'Boston College')}. The ${h.a('compare-colleges', 'comparison tool')} shows how far apart their net prices sit for a given income.</p>`,
  faqs: [
    { q: 'What is Georgetown’s acceptance rate for the Class of 2029?', a: `Georgetown admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('georgetown')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Georgetown’s pool is smaller than at most universities of its selectivity, and it fills its class without binding Early Decision.` },
    { q: 'Does Georgetown require the SAT or ACT?', a: 'Yes. Georgetown requires either SAT or ACT scores and asks for official score reports. It also strongly recommends sending AP scores for students who took AP exams. Because almost the whole class submitted a score, the published SAT range describes nearly all enrolled students.' },
    { q: 'Does Georgetown offer merit scholarships?', a: 'No. Georgetown’s financial aid is based only on need. It meets the full demonstrated need of eligible U.S. citizens and permanent residents with grants, campus employment and, in some cases, federal student loans. Families without need should plan on paying close to the full cost of attendance.' },
  ],
  related: ['college:george-washington', 'college:american-university', 'college:boston-college', 'college:notre-dame', 'compare-colleges', 'acceptance-rates'],
});
