import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const A = K.P.act;
const scored = K.schools.filter((s) => s.actR && s.testStatus !== 'blind');
const at30 = scored.filter((s) => 30 >= s.actR!.p75).length;
const in30 = scored.filter((s) => 30 >= s.actR!.p25 && 30 < s.actR!.p75).length;
const a = (x: number) => K.actToSat(x)!.point;

export default definePage({
  id: 'act-scores', group: 'tests', order: 20, slug: 'act-scores',
  nav: 'ACT scores', card: `Your ACT composite against the national average and ${scored.length} university ranges.`,
  title: `ACT Scores 2026: Average ${K.num(A.meanComposite, 1)}, Ranges by University`,
  description: `ACT scores in 2026: the class of ${A.classOf} averaged ${K.num(A.meanComposite, 1)}. Place your own composite against ${scored.length} university ranges and the SAT through the official concordance.`,
  h1: 'ACT scores: what yours means, school by school',
  intro: `The national ACT average for the class of ${A.classOf} was ${K.num(A.meanComposite, 1)}; at a selective university the score that counts is the one at or above its 75th percentile.`,
  resume: `The ACT composite runs from 1 to 36. ACT reports that ${A.tested} students of the class of ${A.classOf}, about ${K.pct(A.shareOfClass, 0)} of American high school graduates, took the test at least once, with a national average composite of ${K.num(A.meanComposite, 1)}, and that ${K.pct(A.metThree, 0)} met at least three of its four college readiness benchmarks. Since September 2025 the composite averages English, math and reading only, science becoming optional, and ACT says the new composite is comparable to the old one. On the official concordance a 24 matches an SAT of ${K.num(a(24))}, a 30 matches ${K.num(a(30))} and a 34 matches ${K.num(a(34))}. Among the ${scored.length} universities on this site with a published ACT range, a 30 is at or above the 75th percentile at ${at30} and inside the middle 50% at ${in30}.`,
  body: (h) => `
<h2>Composite, sections and superscore</h2>
<p>The composite is the rounded average of the section scores. For students testing from September 2025, those sections are English, math and reading; the science section is optional and reported separately, along with a STEM score for students who take it. Universities that superscore keep the best section scores across sittings and recompute the composite, and ACT reports that students in the class of ${h.P.act.classOf} who tested more than once raised their superscore by about two points on average. The ranges in university Common Data Sets usually describe the composite as sent by enrolled students, superscored or not depending on the school.</p>
${h.miniActSat()}
<h2>Where a composite places you</h2>
<p>The tool above counts the universities where your composite is above the 75th percentile, inside the middle 50% or below the 25th, using each school's newest published range. A 28 is above the national average by a wide margin and inside the range at many flagship public universities; at ${h.c('vanderbilt', 'Vanderbilt')} or ${h.c('uchicago', 'the University of Chicago')} the middle half of enrolled students sits well above it. Remember that at test-optional schools the ACT range comes only from students who chose to send a score, and that the share of enrolled students who submitted the ACT is often small next to the SAT share.</p>
<h2>ACT or SAT?</h2>
<p>Every university on this site that reads scores accepts both tests and treats them equally. The choice is about which format suits you: the ACT moves faster through more questions, while the digital SAT is shorter and adapts to your answers. Many students take a practice test of each and keep the one where their concorded score is higher. The ${h.a('act-to-sat-conversion', 'conversion table')} gives the official equivalence in both directions.</p>
<h2>Regional habits</h2>
<p>The ACT has long been more common in the Midwest and South, and some states give it free to every junior during the school day, which is why state averages vary widely and say little about any one student. For admission, compare yourself with the range of the school, not with your state.</p>
<h2>What a score does not do</h2>
<p>A composite above a university's 75th percentile clears the academic threshold; it does not offset an application without depth elsewhere, especially where the admit rate is below ${h.num(h.rule.reachBelow * 100)}%. Below the 25th percentile, a test-optional school may still admit you on grades and courses. Check the testing policy on each university page before deciding whether to send the score.</p>
<h2>Choosing which score to send</h2>
<p>If you hold both an ACT and an SAT, convert one into the other with the official table and compare each to the range the university publishes for that test. Send the score that sits higher within its own range. Most universities let you choose which results to send, and many superscore across dates, so a single strong sitting is enough; a composite near the 75th percentile is worth more than three middling attempts.</p>`,
  faqs: [
    { q: 'What is the average ACT score in 2026?', a: `The newest national figure is for the class of ${A.classOf}: an average composite of ${K.num(A.meanComposite, 1)}, published by ACT for the ${A.tested} graduates who took the test at least once. ACT publishes the report on each graduating class in the autumn, so the class of 2026 figure follows the 2026 school year.` },
    { q: 'Is a 30 a good ACT score?', a: `Yes nationally: a 30 is far above the average of ${K.num(A.meanComposite, 1)} and corresponds to an SAT of ${K.num(a(30))} on the official concordance. Among the universities on this site with a published range, it is at or above the 75th percentile at ${at30} of them and inside the middle 50% at ${in30}.` },
    { q: 'Did the ACT change in 2025?', a: 'Yes. From September 2025 the composite is the average of English, math and reading, and science is optional; the test is also shorter, with fewer questions. ACT states that the new composite is comparable with the four-section composite, so universities read old and new scores the same way, and the 2018 concordance with the SAT still applies.' },
    { q: 'Do colleges prefer the SAT or the ACT?', a: 'No university on this site states a preference. Common Data Sets show that more enrolled students send the SAT at most selective schools on the coasts, while the ACT is more frequent in the Midwest and South, but admission offices compare the two through the concordance tables and treat them as equal.' },
  ],
  tool: 'act-position',
  related: ['act-to-sat-conversion', 'what-is-a-good-sat-score', 'acceptance-rates', 'college:vanderbilt', 'college:uchicago'],
  sources: ['act_class2025', 'act_enhanced', 'concordance', 'cds'],
});
