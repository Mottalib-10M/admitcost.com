import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('wellesley');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'wellesley',
  title: `Wellesley Acceptance Rate 2026: ${K.rate('wellesley')} and Tuition Promise`,
  description: `Wellesley admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('wellesley')}). See the 2026-27 cost, free tuition under $200,000 from 2027 and the net price by income.`,
  intro: `Wellesley admitted ${K.rate('wellesley')} of its fall 2025 applicants, about 1 in ${K.oneIn('wellesley')}, and it is the first women's college to guarantee free tuition at the $200,000 level.`,
  resume: `Wellesley College admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025 (Class of 2029), an acceptance rate of ${K.rate('wellesley')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Wellesley stays test optional for fall 2027 entry; ${K.pct(sc.pctSat!, 0)} of the last class sent an SAT, with a middle 50% of ${K.satRange('wellesley')}. The listed ${cost.year} costs add up to ${K.sticker('wellesley')} before travel and the waivable health plan. That figure will matter less to many families from fall 2027, when the Wellesley Tuition Promise makes tuition free for U.S. students whose family income is $200,000 or less with typical assets. In ${K.meta.years.net} the federal average net price was already ${K.net('wellesley', 1)} for incomes between $30,001 and $48,000 and ${K.net('wellesley', 3)} between $75,001 and $110,000.`,
  body: (h) => `
<h2>A women's college with a wider door than its peers</h2>
<p>Wellesley's applicant pool is smaller than at coeducational colleges of the same standing, ${h.num(c.applicants)} applications for fall 2025, and its rate is correspondingly higher. The Common Data Set breaks the pool down by origin: international students filed 3,132 applications, close to four in ten, but received only 107 of the ${h.num(c.admitted)} offers, while Massachusetts residents filed 698 and received 151. For a U.S. applicant, the effective odds are therefore better than the headline rate.</p>
<p>Wellesley runs two binding rounds, Early Decision I on November 1 and Early Decision II on January 5, with Regular Decision on January 8. For fall 2025, 1,023 students applied early and 301 were admitted. The college's own advice is that early applicants are admitted at a slightly higher rate because they are a strong, self-selected group, not because the standard changes. The waiting list was long and slow: 2,214 offered, 1,121 accepted, 59 admitted.</p>
${h.miniScore('wellesley', 'SAT')}
<h2>Test optional, with writing and math checked other ways</h2>
<p>About 45% of enrolling students have applied without testing since Wellesley went test optional, and the policy holds for fall 2027. Without a score, the committee looks for evidence of writing and quantitative skill elsewhere: advanced English or math courses, AP or IB results, competitions, publications. In the fall 2025 class the SAT senders, ${h.pct(sc.pctSat!, 0)} of students, scored ${h.satRange('wellesley')}, and the ${h.pct(sc.pctAct!, 0)} who sent the ACT scored ${h.actRange('wellesley')}.</p>
<h2>From the 2026-27 bill to the Tuition Promise</h2>
<p>For ${cost.year} Wellesley bills tuition of ${h.usd(cost.tuition!)}, housing and meals of ${h.usd(cost.housingFood!)} and an activity fee of ${h.usd(cost.fees!)}, and budgets ${h.usd(cost.books!)} for books and ${h.usd(cost.personal!)} for personal costs. Massachusetts requires health insurance, so the college bills its plan to everyone unless waived. From fall 2027 the Tuition Promise covers full tuition for U.S. families up to $200,000, with no loans up to $100,000; the college estimates that eligible students will pay between $0 and $26,000 in 2027-28 for room, meals and the activities fee. Admission is need-blind for U.S. citizens and permanent residents.</p>
${h.miniNet('wellesley')}
<h2>Wellesley in the comparison</h2>
<p>Its rate sits well above ${h.c('williams', 'Williams')} and ${h.c('amherst', 'Amherst')}, while its price and aid rules now match theirs closely. Above $110,000, families paid an average of ${h.net('wellesley', 4)} in ${h.meta.years.net}, before the Promise. Put the three side by side in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is the Wellesley acceptance rate for fall 2025?', a: `Wellesley admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('wellesley')} in its Common Data Set 2025-2026, and ${K.num(c.enrolled!)} enrolled. Early Decision brought 301 of those admits from 1,023 early applications, and 59 students were admitted from the waiting list.` },
    { q: 'Is Wellesley free for families earning under $200,000?', a: 'Tuition will be, starting in fall 2027. The Wellesley Tuition Promise covers full tuition for U.S. students whose total family income is $200,000 or less with typical assets, and adds no loans for families up to $100,000. Housing, meals and the activities fee are still charged, estimated at $0 to $26,000 for eligible students in 2027-28.' },
    { q: 'Does Wellesley require test scores for students entering in fall 2027?', a: `No. Wellesley’s admission FAQ says the college will continue to be test optional for students applying for entry in fall 2027 and accepts the SAT or the ACT, with or without the ACT science section, from those who submit. In the fall 2025 class ${K.pct(sc.pctSat!, 0)} sent an SAT. English proficiency tests are recommended, not required, for some non-native speakers.` },
  ],
  related: ['college:williams', 'college:amherst', 'college:bowdoin', 'college:swarthmore', 'compare-colleges', 'net-price-calculator'],
});
