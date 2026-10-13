import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('tcu');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'tcu',
  title: `TCU Acceptance Rate 2026: ${K.rate('tcu')}, Early Decision, Net Price`,
  description: `TCU admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('tcu')}). See the ${cost.year} cost, the TCU for Texans rule and the net price paid by family income.`,
  intro: `TCU admitted ${K.rate('tcu')} of applicants for fall 2025, and about two Early Decision applicants in three.`,
  resume: `Texas Christian University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('tcu')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Its Early Decision round admitted 935 of 1,373 applicants, a much higher share. TCU is test-optional with a "do no harm" policy, and the middle 50% SAT of the ${K.pct(sc.pctSat!, 0)} who sent one was ${K.satRange('tcu')}. The ${cost.year} cost of attendance is ${K.sticker('tcu')}, lower than at most private universities on this site. Its federal net prices change little across the lower incomes: in ${K.meta.years.net} aided families paid an average of ${K.net('tcu', 0)} under $30,000 and ${K.net('tcu', 2)} between $48,001 and $75,000, and ${K.net('tcu', 3)} between $75,001 and $110,000, after all grants and scholarships.`,
  body: (h) => `
<h2>Out-of-state applicants are admitted more often</h2>
<p>TCU receives as many applications from outside Texas as from Texans, and for fall 2025 it admitted a larger share of the out-of-state pool: 5,818 of 10,483, against 4,663 of 10,757 Texas applicants. A private university has no resident quota, so the gap reflects who applies. For a student from another state, TCU is easier to enter than its overall rate suggests; for a Texan, the deciding factor is often the price compared with the public flagships.</p>
${h.miniScore('tcu', 'SAT')}
<h2>Four rounds, and dates that matter for money</h2>
<p>TCU runs Early Action and Early Decision I on November 1, and Early Decision II and regular decision on February 1, later than most private universities. The early date carries the money: the TCU for Texans program, full tuition plus help with food and housing for Pell-eligible Texas residents with family income of $100,000 or less, applies only to students who apply Early Action and file the FAFSA and CSS Profile by November 1. Chancellor's Scholars candidates also apply by November 1, and the honors college by November 15. Under the "do no harm" rule, a score that would lower an applicant's chances is simply set aside.</p>
<h2>What families on aid paid</h2>
<p>The federal averages for ${h.meta.years.net} show a flat curve: ${h.net('tcu', 0)} under $30,000, ${h.net('tcu', 1)} between $30,001 and $48,000, ${h.net('tcu', 2)} between $48,001 and $75,000. That pattern is common at universities whose aid leans on merit scholarships rather than need-based grants: low-income families receive help, but not enough to bring the price close to zero. Above $75,000 the average rises sharply. TCU is need-aware for international applicants, who are more competitive when they can pay a large share of the cost.</p>
${h.miniNet('tcu')}
<h2>The budget in Fort Worth</h2>
<p>The ${cost.year} budget of ${h.sticker('tcu')} includes tuition of ${h.usd(cost.tuition!)} and ${h.usd(cost.housingFood!)} for housing and food. Families comparing Texas private universities can put TCU next to ${h.c('smu', 'SMU')}, ${h.c('baylor', 'Baylor')} and ${h.c('rice', 'Rice')}, whose aid models differ widely, in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is TCU’s acceptance rate for fall 2025?', a: `Texas Christian University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('tcu')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Out-of-state applicants were admitted at a higher rate than Texans, and Early Decision at the highest rate.` },
    { q: 'Who qualifies for TCU for Texans?', a: 'Texas residents applying as first-year fall students who are Pell Grant eligible, with family adjusted gross income of $100,000 or less and reasonable assets. They can receive full tuition, extra food and housing help and guaranteed campus housing, but only if they apply Early Action and submit the FAFSA and CSS Profile by November 1.' },
    { q: 'What is TCU’s “do no harm” test policy?', a: 'TCU is test-optional, and when an applicant sends an SAT or ACT score that would lower the chances of admission or of a scholarship, TCU excludes that score from its review. Self-reported scores are accepted when applying, and official scores are needed only after a student enrolls.' },
  ],
  related: ['college:smu', 'college:baylor', 'college:rice', 'college:texas-tech', 'compare-colleges', 'net-price-calculator'],
});
