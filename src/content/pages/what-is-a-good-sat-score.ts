import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const P = K.P.sat;
const top = P.bands[0][1] / P.takers;
const n1200 = 1 - K.satBelow(1200);
const scored = K.schools.filter((s) => s.sat && s.testStatus !== 'blind');
const above1400 = scored.filter((s) => 1400 >= s.sat!.p75).length;
const ivy = ['harvard', 'yale', 'princeton', 'columbia', 'upenn', 'brown', 'dartmouth', 'cornell'].map((x) => K.s(x)).filter((x) => x.sat);
const ivyLo = [Math.min(...ivy.map((x) => x.sat!.p25)), Math.max(...ivy.map((x) => x.sat!.p25))];
const ivyHi = [Math.min(...ivy.map((x) => x.sat!.p75)), Math.max(...ivy.map((x) => x.sat!.p75))];
const ivyAdm = [Math.min(...ivy.map((x) => x.adm!.rate)), Math.max(...ivy.map((x) => x.adm!.rate))];
const within1400 = scored.filter((s) => 1400 >= s.sat!.p25 && 1400 < s.sat!.p75).length;

export default definePage({
  id: 'what-is-a-good-sat-score', group: 'tests', order: 10, slug: 'what-is-a-good-sat-score',
  nav: 'What is a good SAT score', card: `Your SAT against the class of ${P.classOf} and against ${scored.length} universities.`,
  title: `Good SAT Score 2026: Percentiles for the Class of ${P.classOf}`,
  description: `A good SAT score in 2026 depends on the school: the class of ${P.classOf} averaged ${P.meanTotal}, half scored under ${P.p50}. Check your score against ${scored.length} university ranges.`,
  h1: 'What is a good SAT score?',
  intro: `Against all test takers, ${P.p75} or more puts you in the top quarter of the class of ${P.classOf}; against a selective university, a good score is one at or above its 75th percentile.`,
  resume: `A good SAT score is one that sits at or above the middle of the range of the universities you apply to, and the national figures only set the scene. The College Board reports that the ${K.num(P.takers)} students of the class of ${P.classOf} averaged ${K.num(P.meanTotal)} out of 1600 (${P.meanRw} in reading and writing, ${P.meanMath} in math); a quarter scored below ${K.num(P.p25)}, half below ${K.num(P.p50)}, and a quarter scored ${K.num(P.p75)} or more. Only ${K.pct(top, 1)} reached 1400 or higher, and ${K.num(P.perfect)} students scored a perfect 1600. A 1200 therefore beats roughly ${K.pct(1 - n1200, 0)} of test takers, yet sits below the range of most highly selective universities. A 1400 is above the 75th percentile at ${above1400} of the ${scored.length} universities with a published range on this site and inside the middle 50% at ${within1400}.`,
  body: (h) => `
<h2>Three ways to read the same score</h2>
<p>The first is national: what share of test takers you beat. The tool and the College Board's report for the class of ${h.P.sat.classOf} answer it, with the caveat that the class includes students who took the test at school in states where every junior sits it, which pulls the average down. The second is the College Board's own benchmark of college readiness: ${h.P.sat.benchmarkRw} in reading and writing and ${h.P.sat.benchmarkMath} in math, met on both sections by ${h.pct(h.P.sat.metBoth, 0)} of the class. The third, and the one that matters for admission, is the range of enrolled students at each university you consider.</p>
${h.miniSatNational()}
<h2>Good for which university?</h2>
<p>A 1350 is a strong score at a large public university such as ${h.c('arizona-state', 'Arizona State')} and a low one at ${h.c('mit', 'MIT')}, where the middle half of enrolled students scored ${h.satRange('mit') ?? 'not reported'}. The useful question is where you fall inside each range. Above the 75th percentile, the score is an asset; inside the middle 50%, it neither helps nor hurts much; below the 25th, it becomes something the rest of the file has to make up for. The tool above counts, for your score, the universities in each of the three zones, and the ${h.a('acceptance-rates', 'acceptance rates table')} names them.</p>
<h2>Test-optional, test-free, test-required</h2>
<p>The meaning of a score also depends on the policy. At test-required universities, a growing group since 2024 that includes Harvard, Brown, Dartmouth, MIT and the University of Texas at Austin, every admitted student has a score and the ranges are complete. At test-optional universities the published ranges come only from students who chose to send a score, which lifts them, so a score near the 25th percentile can still be worth sending if the rest of the file is strong. The University of California and California State University campuses are test-free: they do not read scores at all, and their pages show none.</p>
<h2>Superscoring and retakes</h2>
<p>Many universities superscore, keeping the best reading and writing score and the best math score across dates. The national figures above count each student's most recent score, not the superscore, so a student who retakes the test and is superscored can sit higher in a university's range than the national percentile suggests. Each extra sitting costs a registration fee and a Saturday; for most students the gain after two or three attempts is small.</p>
<h2>ACT instead?</h2>
<p>If you took the ACT, the ${h.a('act-to-sat-conversion', 'ACT to SAT conversion')} uses the official concordance tables, and the ${h.a('act-scores', 'ACT score page')} places a composite against the national average and the university ranges.</p>
<h2>When a score stops mattering</h2>
<p>Beyond a certain point, extra points do little. At universities whose 75th percentile is near 1550, the difference between 1520 and 1560 rarely decides a file, and the time spent on a fourth sitting is better spent on courses, essays or an activity that shows depth. Below the 25th percentile of a school, the opposite holds: another attempt can move the score into the range and change how the rest of the application is read.</p>`,
  faqs: [
    { q: 'Is 1200 a good SAT score?', a: `Against all test takers, yes: a 1200 is above the national median of ${K.num(P.p50)} for the class of ${P.classOf} and beats roughly ${K.pct(K.satBelow(1200), 0)} of them. Against highly selective universities it is low, since most of them have a 25th percentile above 1400. At many large public universities a 1200 sits inside or near the middle 50% of enrolled students.` },
    { q: 'What was the average SAT score in 2026?', a: `The College Board’s report on the class of ${P.classOf}, the students who graduated from high school in spring ${P.classOf}, gives a mean total score of ${K.num(P.meanTotal)}: ${P.meanRw} in reading and writing and ${P.meanMath} in math. It covers ${K.num(P.takers)} students and counts each student’s most recent score.` },
    { q: 'What SAT score do I need for an Ivy League school?', a: `On this site, the 25th percentile of enrolled students at the eight Ivy League universities runs from ${K.num(ivyLo[0])} to ${K.num(ivyLo[1])} and the 75th from ${K.num(ivyHi[0])} to ${K.num(ivyHi[1])}, from their newest published ranges. A score inside that band makes you competitive on paper, but with admit rates between ${K.pct(ivyAdm[0], 1)} and ${K.pct(ivyAdm[1], 1)} they remain a reach for every applicant.` },
    { q: 'Should I send a score below a college’s 25th percentile?', a: 'At a test-optional college, a score below the 25th percentile of enrolled students usually adds little, and admissions offices say a missing score is not held against you. At a test-required college you must send it anyway. Near the 25th percentile, the choice depends on how strong the grades and courses are.' },
  ],
  tool: 'sat-position',
  related: ['act-to-sat-conversion', 'act-scores', 'acceptance-rates', 'college:mit', 'college:arizona-state'],
  sources: ['sat_report', 'sat_results', 'cds', 'concordance'],
});
