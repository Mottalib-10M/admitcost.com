import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('emory');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'emory',
  title: `Emory Acceptance Rate 2026: ${K.rate('emory')}, Oxford College, Net Price`,
  description: `Emory admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('emory')}), Oxford College included. See the ${cost.year} cost of attendance and net price by family income.`,
  intro: `Emory admitted ${K.rate('emory')} of applicants for fall 2025, and families earning up to $200,000 with typical assets pay no tuition.`,
  resume: `Emory University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('emory')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026, which counts Emory College in Atlanta and Oxford College in Covington together. Early Decision applicants were admitted at about twice the overall rate. Emory is test optional for fall 2027 and superscores both tests; the ${K.pct(sc.pctSat!, 0)} who sent an SAT had a middle 50% of ${K.satRange('emory')}. The ${cost.year} cost of attendance is ${K.sticker('emory')}. Emory replaced need-based loans with grants for domestic students, and families earning up to $200,000 with typical assets qualify for free tuition. In ${K.meta.years.net}, aided families paid an average of ${K.net('emory', 0)} under $30,000 and ${K.net('emory', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Two doors: Emory College and Oxford College</h2>
<p>One application to Emory covers two places to start. Emory College is the four-year arts and sciences college on the Atlanta campus; Oxford College is a small two-year campus in Covington, Georgia, whose students move to the Atlanta campus for their last two years with the same degree. Applicants can choose one or both, and can even apply Early Decision to one and regular decision to the other. Because the Common Data Set merges the two, the overall rate of ${h.rate('emory')} is an average of two different pools.</p>
<h2>The Early Decision gap</h2>
<p>For fall 2025, Emory admitted 1,049 of 4,728 Early Decision applicants, about one in five, against about one in ten overall. It runs Early Decision I on November 1 and Early Decision II on January 1, the same date as regular decision, and no Early Action. Merit scholars apply separately by November 15 through the Emory University Scholar Programs. The waiting list was long, with several thousand students offered a place, and a few hundred were admitted from it.</p>
${h.miniScore('emory', 'SAT')}
<h2>Grants instead of loans</h2>
<p>Emory Advantage Plus replaced need-based loans with institutional grants for domestic students in their first degree, and families earning up to $200,000 with typical assets qualify for free tuition, reviewed each year. The federal averages for ${h.meta.years.net} were higher than at peers with larger endowments in the lower bands, ${h.net('emory', 1)} between $30,001 and $48,000 and ${h.net('emory', 2)} between $48,001 and $75,000, but they predate part of the expansion. Above $110,000 the average was ${h.net('emory', 4)}.</p>
${h.miniNet('emory')}
<h2>Budget and comparisons</h2>
<p>The ${cost.year} budget of ${h.sticker('emory')} includes tuition of ${h.usd(cost.tuition!)} and ${h.usd(cost.housingFood!)} for housing and food. Georgia residents form a small share of the admitted class, so they compare Emory mostly with ${h.c('georgia-tech', 'Georgia Tech')} and ${h.c('uga', 'the University of Georgia')} at in-state prices; out-of-state families look at ${h.c('vanderbilt', 'Vanderbilt')} and ${h.c('duke', 'Duke')}. The ${h.a('compare-colleges', 'comparison tool')} handles both cases.</p>`,
  faqs: [
    { q: 'What is Emory’s acceptance rate for fall 2025?', a: `Emory admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('emory')}, according to its Common Data Set 2025-2026, which combines Emory College and Oxford College. ${K.num(c.enrolled!)} students enrolled across the two entry points, and about one Early Decision applicant in five was admitted.` },
    { q: 'What is the difference between Emory College and Oxford College?', a: 'Both lead to the same Emory degree. Emory College is the four-year college on the Atlanta campus. Oxford College, in Covington, Georgia, is a small residential campus for the first two years, after which students continue at Emory’s Atlanta campus. Applicants can apply to one or both on the same application.' },
    { q: 'Is Emory tuition free under $200,000?', a: 'Through Emory Advantage Plus, students from families earning up to $200,000 with typical assets qualify for free tuition if they qualify for need-based aid, reviewed every year. Emory also replaced need-based loans with grants for domestic students in their first degree, so packages rely on grants and work rather than borrowing.' },
  ],
  related: ['college:vanderbilt', 'college:duke', 'college:georgia-tech', 'college:uga', 'compare-colleges', 'acceptance-rates'],
});
