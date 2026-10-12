import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const row = (x: number) => K.actToSat(x)!;

export default definePage({
  id: 'act-to-sat-conversion', group: 'tests', order: 30, slug: 'act-to-sat-conversion',
  nav: 'ACT to SAT conversion', card: 'The official concordance, both directions, with the SAT range of each ACT score.',
  title: 'ACT to SAT Conversion 2026: Official Concordance Table',
  description: `ACT to SAT conversion in 2026 on the official 2018 concordance: ACT 30 = SAT ${K.num(row(30).point)}, ACT 25 = ${K.num(row(25).point)}. Both directions, with the SAT range of each composite.`,
  h1: 'ACT to SAT conversion',
  intro: `On the official tables an ACT of 30 matches an SAT of ${K.num(row(30).point)}, within a range of ${K.num(row(30).low)} to ${K.num(row(30).high)}; type any score to convert it either way.`,
  resume: `The only official way to convert an ACT score into an SAT score, and back, is the 2018 ACT/SAT Concordance Tables that ACT and the College Board built together from students who took both tests. They remain the tables universities use in 2026: no new concordance has been published since the digital SAT arrived in 2024 or since the ACT moved to a three-section composite in September 2025, and ACT states that the new composite is comparable to the old one. Each ACT composite matches a single SAT score for comparisons and a range of SAT scores: ACT 36 matches ${K.num(row(36).point)} (${K.num(row(36).low)} to ${K.num(row(36).high)}), ACT 33 matches ${K.num(row(33).point)}, ACT 27 matches ${K.num(row(27).point)} and ACT 21 matches ${K.num(row(21).point)}. In the other direction, every SAT total from 590 to 1600, in steps of 10, has one ACT composite.`,
  body: (h) => `
<h2>Why a single SAT number and a range</h2>
<p>The two tests do not have the same number of score points: the ACT composite has 28 useful steps between 9 and 36, the SAT total has 102 between 590 and 1600. Each ACT score therefore matches several SAT scores. Table A2 of the concordance gives the range and marks one SAT score to use "when a single score point comparison is needed"; that is the figure the tool shows first. Going from SAT to ACT, Table A1 gives one ACT composite for each SAT total, so SAT totals of 1390, 1400 and 1410 all land on ACT ${h.satToAct(1400)}.</p>
${h.table(['ACT composite', 'SAT (single score)', 'SAT range'], [36, 34, 32, 30, 28, 26, 24, 22, 20, 18].map((x) => [String(x), h.num(row(x).point), `${h.num(row(x).low)} to ${h.num(row(x).high)}`]), 'Extract of Table A2, 2018 ACT/SAT Concordance Tables (ACT and College Board).', ['l', 'r', 'r'])}
<h2>Section by section</h2>
<p>The concordance also links sections: SAT math to ACT math, and SAT reading and writing to the sum of ACT English and reading. They are useful when a university superscores or when a program looks at math alone, as engineering schools sometimes do. The tool here works on totals, which is what admissions ranges use.</p>
<h2>Does the 2025 ACT change the conversion?</h2>
<p>Since September 2025 the ACT composite is the average of English, math and reading, without science, on a shorter test. ACT's position, published for colleges, is that the three-section composite is comparable with the four-section one at the aggregate level, and that the concordance agreements with the College Board will be reviewed on their regular schedule. Until a new table is published, the 2018 tables remain the reference, and universities apply them to old and new scores alike.</p>
${h.miniSatNational()}
<h2>Using a converted score</h2>
<p>A conversion is a way to compare, not a way to report. Universities receive the score you actually earned on the test you sent. The concorded figure helps you place an ACT result against an SAT range in a Common Data Set, or decide which of your two results is stronger. When the converted scores are equal, send the one that is above the school's 75th percentile on its own scale, or both if the school allows it.</p>
<p>To see what the converted score means, place it against the class of ${h.P.sat.classOf} with the ${h.a('what-is-a-good-sat-score', 'SAT score page')}, or against the ranges of ${h.schools.length} universities in the ${h.a('acceptance-rates', 'acceptance rates table')}.</p>
<h2>How the tables were built</h2>
<p>The 2018 concordance relied on students who took both the ACT and the redesigned SAT, linking the two score scales by equipercentile methods: a score on one test was matched to the score on the other that the same share of students reached. That is why the result is a correspondence of rank, not a claim that the two tests measure exactly the same skills. ACT and the College Board describe the tables as the only valid way to compare the tests, and they warn against other conversion charts found online, many of which still circulate from the 2016 or older versions of the SAT.</p>`,
  faqs: [
    { q: 'What SAT score is a 28 on the ACT?', a: `On the official 2018 concordance, an ACT composite of 28 corresponds to an SAT total of ${K.num(row(28).point)}, the single score used for comparisons, within a range of ${K.num(row(28).low)} to ${K.num(row(28).high)}. That places it above the national SAT median of ${K.num(K.P.sat.p50)} for the class of ${K.P.sat.classOf}.` },
    { q: 'What ACT score is a 1400 on the SAT?', a: `Table A1 of the 2018 concordance converts an SAT total of 1400 to an ACT composite of ${K.satToAct(1400)}. SAT totals from 1390 to 1410 all land on that same ACT score, because the ACT scale has fewer steps than the SAT scale. A 1440 would convert to ${K.satToAct(1440)}.` },
    { q: 'Is the ACT/SAT concordance still valid with the digital SAT?', a: 'Yes. The College Board equated the digital SAT to the paper scale, so a digital score means the same as a paper score, and the 2018 concordance with the ACT still applies. ACT and the College Board have not announced a replacement table, and university admission offices continue to use the 2018 one.' },
    { q: 'Can I convert an ACT score below 9?', a: 'The official table starts at ACT 9, which matches an SAT of 590. Below that point the two tests were not concorded because too few students who took both scored there. The tool says "below the table" rather than inventing an equivalence; such a score is far below the ranges of the universities on this site.' },
  ],
  tool: 'concordance',
  related: ['act-scores', 'what-is-a-good-sat-score', 'acceptance-rates', 'compare-colleges'],
  sources: ['concordance', 'concordance_guide', 'act_enhanced', 'sat_report'],
});
