import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('uw-madison');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'uw-madison',
  title: `UW-Madison Acceptance Rate 2026: ${K.rate('uw-madison')}, Cost and Net Price`,
  description: `UW-Madison admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('uw-madison')}). See the ${cost.year} cost for residents, Minnesotans and nonresidents and the net price.`,
  intro: `UW-Madison admitted ${K.rate('uw-madison')} of applicants for fall 2025, but more than half of the Wisconsin residents who applied.`,
  resume: `The University of Wisconsin-Madison admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('uw-madison')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Wisconsin residents were admitted at a much higher rate than nonresidents. Testing is optional through the spring 2028 term, and far more enrolled students sent the ACT (${K.pct(sc.pctAct!, 0)}, middle 50% ${K.actRange('uw-madison')}) than the SAT (${K.pct(sc.pctSat!, 0)}). The ${cost.year} budget is ${K.sticker('uw-madison')} for Wisconsin residents and ${K.stickerOut('uw-madison')} for most nonresidents, with a reciprocity rate for Minnesotans. Bucky's Tuition Promise covers tuition and fees for residents with household income of $65,000 or less; in ${K.meta.years.net}, aided residents paid an average of ${K.net('uw-madison', 0)} under $30,000 and ${K.net('uw-madison', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>Two admit rates in one</h2>
<p>The overall rate hides a wide gap. For fall 2025, UW-Madison admitted 5,672 of 10,058 Wisconsin applicants, more than half, and 19,948 of 49,463 out-of-state applicants, about four in ten. Even so, nonresidents make up more than half of the entering class: only 3,831 of the ${h.num(c.enrolled!)} new students were Wisconsin residents. The university relies on out-of-state tuition, and its pool of applicants from Illinois, Minnesota and the coasts keeps growing.</p>
${h.miniGap('uw-madison')}
<h2>Minnesota pays its own rate</h2>
<p>A reciprocity agreement between Wisconsin and Minnesota gives Minnesota residents a rate between the two: their ${cost.year} budget is $37,574, against ${h.sticker('uw-madison')} for Wisconsin residents and ${h.stickerOut('uw-madison')} for other nonresidents. Engineering, nursing and business students pay a tuition differential on top of the standard budget, a few thousand dollars a year, which the totals above do not include.</p>
<h2>Bucky's Tuition Promise</h2>
<p>For Wisconsin residents whose household adjusted gross income is $65,000 or less, Bucky's Tuition Promise guarantees scholarships and grants covering tuition and segregated fees for eight semesters; only income is counted, not assets. The federal averages for residents on aid were ${h.net('uw-madison', 1)} between $30,001 and $48,000 and ${h.net('uw-madison', 2)} between $48,001 and $75,000 in ${h.meta.years.net}, figures in which housing and food make most of the cost.</p>
${h.miniNet('uw-madison')}
<h2>Early Action and the ACT</h2>
<p>UW-Madison offers a non-binding Early Action on November 1, with decisions by the end of January, and a regular deadline of January 15. The ACT remains the test of the Midwest here: the range of ${h.actRange('uw-madison')} is the more complete picture of the class. The waiting list moves, with about a thousand students admitted from it for fall 2025, so a student placed on it should accept the place and keep the university informed of new grades. Compare with ${h.c('minnesota', 'Minnesota')}, ${h.c('uiuc', 'Illinois')} and ${h.c('umich', 'Michigan')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is UW-Madison’s acceptance rate for Wisconsin residents?', a: 'For fall 2025, the University of Wisconsin-Madison admitted 5,672 of 10,058 Wisconsin applicants, about 56%, according to its Common Data Set 2025-2026, against 19,948 of 49,463 out-of-state applicants, about 40%. Residents still make up less than half of the enrolled first-year class.' },
    { q: 'What is Bucky’s Tuition Promise at UW-Madison?', a: 'It is UW-Madison’s guarantee for Wisconsin residents whose household adjusted gross income is $65,000 or less: scholarships and grants that pay tuition and segregated fees for eight consecutive semesters for incoming first-years, or four for transfers. Only income is counted, not assets, and housing and food are handled through regular need-based aid.' },
    { q: 'Do Minnesota residents pay in-state tuition at UW-Madison?', a: `Not exactly. Under the Minnesota-Wisconsin reciprocity agreement they pay a separate rate: their ${cost.year} budget at UW-Madison is $37,574, against ${K.sticker('uw-madison')} for Wisconsin residents and ${K.stickerOut('uw-madison')} for other nonresidents. Engineering, nursing and business programs add a tuition differential of a few thousand dollars a year for every group of students.` },
  ],
  related: ['college:minnesota', 'college:uiuc', 'college:umich', 'college:indiana', 'compare-colleges', 'college-tuition'],
});
