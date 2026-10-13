import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('university-of-miami');
const n = s.latest!.cycleNewer!;
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'university-of-miami',
  title: `University of Miami Acceptance Rate 2026: ${K.rate('university-of-miami')}, Cost`,
  description: `The University of Miami admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} applicants for fall 2026 (${K.rate('university-of-miami')}). See the ${cost.year} cost of attendance, test rules and net price by income.`,
  intro: `The University of Miami admitted ${K.rate('university-of-miami')} of applicants for fall 2026, and requires the SAT or ACT from most of them.`,
  resume: `The University of Miami reports ${K.num(n.applicants)} completed applications and ${K.num(n.admitted)} admitted students for the class entering in fall 2026, an acceptance rate of ${K.rate('university-of-miami')}. Its Common Data Set 2025-2026 gives the full counts for fall 2025: ${K.num(c.admitted)} admitted out of ${K.num(c.applicants)} applicants and ${K.num(c.enrolled!)} enrolled. Miami requires the SAT or ACT for most applicants, self-reported, with exemptions for music performance, fine arts, architecture and students from schools outside the United States; the middle 50% SAT of enrolled students who sent one was ${K.satRange('university-of-miami')}. The ${cost.year} cost of attendance is ${K.sticker('university-of-miami')}, with one of the largest housing and food lines on this site. Miami publishes no full-need promise; in ${K.meta.years.net} aided families paid an average of ${K.net('university-of-miami', 0)} under $30,000 and ${K.net('university-of-miami', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Where the admits come from</h2>
<p>Miami's Common Data Set splits its fall 2025 pool by residency. Florida applicants were admitted at a higher rate than the rest, about 23%, against about 17% for students from other states and about 9% for international applicants, who were close to one applicant in seven but fewer than one admit in ten. Out-of-state students still form the largest group of admits, because they are by far the largest group of applicants. Early Decision is the clearest advantage of all: 1,062 admits from 2,395 Early Decision applications, a share well above any of those rates. The waiting list is long, with more than twenty thousand places offered for fall 2025, and only a few hundred students were admitted from it.</p>
${h.miniScore('university-of-miami', 'SAT')}
<h2>Scores are required again</h2>
<p>From the fall 2026 entering class, Miami requires the SAT or ACT, self-reported at application, for most programs. Students applying to performance programs in the Frost School of Music, BFA programs, the School of Architecture, or from high schools outside the United States can choose. With most of the class now sending a score, the range of ${h.satRange('university-of-miami')} becomes a fair guide: below ${h.num(s.sat!.p25)}, an application leans on grades and course rigor.</p>
<h2>Merit money comes early</h2>
<p>All applicants are considered for merit scholarships automatically, but the largest, the Premier Scholarships that can cover the full cost of attendance, are open only to students who apply Early Decision I or Early Action by November 1. Need-based aid can combine grants, loans and work-study, and the federal averages for ${h.meta.years.net} show a relatively flat curve, ${h.net('university-of-miami', 1)} between $30,001 and $48,000 and ${h.net('university-of-miami', 2)} between $48,001 and $75,000, with ${h.net('university-of-miami', 4)} above $110,000.</p>
${h.miniNet('university-of-miami')}
<h2>The budget in Coral Gables</h2>
<p>The ${cost.year} budget of ${h.sticker('university-of-miami')} combines tuition of ${h.usd(cost.tuition!)}, fees and ${h.usd(cost.housingFood!)} for housing and food. Floridians comparing Miami with ${h.c('uf', 'the University of Florida')} or ${h.c('fsu', 'Florida State')} face a large gap at resident prices; out-of-state families often weigh it against ${h.c('tulane', 'Tulane')} and ${h.c('emory', 'Emory')}.</p>`,
  faqs: [
    { q: 'What is the University of Miami acceptance rate for fall 2026?', a: `The University of Miami reports ${K.num(n.applicants)} completed applications and ${K.num(n.admitted)} admitted students for fall 2026, an acceptance rate of ${K.rate('university-of-miami')}. For fall 2025 its Common Data Set counted ${K.num(c.applicants)} applicants and ${K.num(c.admitted)} admits, a lower rate from a larger pool of applicants.` },
    { q: 'Does the University of Miami require the SAT or ACT?', a: 'Yes, for most applicants since the fall 2026 entering class; scores are self-reported at application. Students applying to Frost School of Music performance programs, BFA programs, the School of Architecture, or from high schools outside the United States may apply with or without scores.' },
    { q: 'How do I qualify for a Premier Scholarship at the University of Miami?', a: 'Premier Scholarships, which can cover up to the full cost of attendance, are open only to students who apply by November 1 through Early Decision I or Early Action. All applicants are reviewed automatically for the university’s other merit scholarships, so no separate application is needed for those.' },
  ],
  related: ['college:uf', 'college:fsu', 'college:tulane', 'college:emory', 'compare-colleges', 'acceptance-rates'],
});
