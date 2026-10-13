import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('uc-davis');
const a = s.adm!;
const st = s.sticker!;

export default defineCollege({
  slug: 'uc-davis',
  title: `UC Davis Acceptance Rate 2026: ${K.rate('uc-davis')}, Tuition and Net Price`,
  description: `UC Davis admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026 (${K.rate('uc-davis')}). See the resident and out-of-state tuition and the net price by income.`,
  intro: `UC Davis admitted ${K.rate('uc-davis')} of its fall 2026 first-year applicants, nearly half, which makes it the most open of the five UC campuses compared on this site.`,
  resume: `UC Davis admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, an acceptance rate of ${K.rate('uc-davis')}, in the University of California's preliminary snapshot of offers. A year earlier the campus announced a record 45,963 first-year offers for fall 2025. Admission is test-free, and the middle half of fall 2026 admits held a 4.00 to 4.25 high school GPA. The newest cost figure we could verify is the federal one: a cost of attendance of ${K.sticker('uc-davis')} for ${st.year}, with resident tuition and fees of ${K.usd(s.tuitionIn!)} and nonresident tuition and fees of ${K.usd(s.tuitionOut!)} in ${K.meta.years.tuition}. Aid brings the resident price down: in ${K.meta.years.net} the federal average net price was ${K.net('uc-davis', 0)} for families under $30,000 and ${K.net('uc-davis', 3)} between $75,001 and $110,000, and the UC Blue and Gold plan covers tuition for most California families earning up to $100,000.`,
  body: (h) => `
<h2>The UC campus that says yes most often</h2>
<p>Davis admitted ${h.num(a.admitted!)} first-year applicants for fall 2026 out of ${h.num(a.applicants!)}, a rate of ${h.rate('uc-davis')}, against roughly one in ten at ${h.c('ucla', 'UCLA')} and ${h.c('uc-berkeley', 'UC Berkeley')} and under a third at ${h.c('ucsd', 'UC San Diego')} and ${h.c('uc-irvine', 'UC Irvine')}. The fall 2025 announcement already showed the trend: 45,963 first-year offers, 10.4% more than the year before, out of 120,131 applications counting transfers.</p>
<p>Its offers are the most international in the UC system. International students received 14,009 of the 48,015 fall 2026 first-year offers, more than at any other campus, while Californians received 24,445. For fall 2025, California residents made up 61.1% of all 55,739 admitted students, first-year and transfer combined.</p>
${h.miniGap('uc-davis')}
<h2>Reading the price of UC Davis without a 2026-27 budget</h2>
<p>We could not open the UC Davis financial aid budget for 2026-27, so this page shows the federal figures and dates them. In ${h.meta.years.tuition} resident tuition and fees were ${h.usd(s.tuitionIn!)} and nonresident tuition and fees ${h.usd(s.tuitionOut!)}; the full cost of attendance in ${st.year} was ${h.sticker('uc-davis')}. Tuition at every UC campus is set at entry and stays the same for up to six years, so a new student pays the rate of the year they enroll. For a current figure, the systemwide charges on the ${h.c('ucla', 'UCLA')} and ${h.c('uc-irvine', 'UC Irvine')} pages are the same at Davis; housing and campus fees differ.</p>
${h.miniNet('uc-davis')}
<h2>Applying to Davis: grades, essays and one deadline</h2>
<p>Davis, like the rest of the University of California, does not consider SAT or ACT scores for admission or scholarships. The UC application, filed between October 1 and November 30, reaches Davis and any other campus listed, and there is no Early Decision or Early Action. California students in the top 9 percent of their school or the state are guaranteed a seat in the system, though not necessarily at the campus of their choice. The ${h.a('compare-colleges', 'comparison tool')} puts Davis next to the other UC campuses.</p>`,
  faqs: [
    { q: 'What is the UC Davis acceptance rate for fall 2026?', a: `In the University of California’s preliminary snapshot, UC Davis admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, a rate of ${K.rate('uc-davis')}. For fall 2025 the campus announced a record 45,963 first-year offers. International applicants received 14,009 of the fall 2026 first-year offers and Californians 24,445.` },
    { q: 'Is UC Davis easier to get into than UCLA?', a: `By admit rate, yes. For fall 2026, UC Davis admitted ${K.rate('uc-davis')} of first-year applicants and UCLA ${K.rate('ucla')}, according to the University of California’s preliminary snapshots. The middle half of Davis admits held a 4.00 to 4.25 high school GPA, compared with 4.20 to 4.30 at UCLA. Neither campus considers SAT or ACT scores.` },
    { q: 'How much does UC Davis cost for out-of-state students?', a: `The newest federal figures show nonresident tuition and fees of ${K.usd(s.tuitionOut!)} at UC Davis in ${K.meta.years.tuition}, against ${K.usd(s.tuitionIn!)} for California residents, before housing, food, books and other costs. New nonresidents at every UC campus pay Nonresident Supplemental Tuition on top of the systemwide charges, and the Blue and Gold tuition coverage does not apply to them.` },
  ],
  related: ['college:ucla', 'college:uc-berkeley', 'college:ucsd', 'college:uc-irvine', 'compare-colleges', 'net-price-calculator'],
});
