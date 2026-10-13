import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('uc-irvine');
const a = s.adm!;
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const inS = cost.inState!;
const outS = cost.outOfState!;
const ucla = K.s('ucla').latest!.cost!.inState!;

export default defineCollege({
  slug: 'uc-irvine',
  title: `UC Irvine Acceptance Rate 2026: ${K.rate('uc-irvine')}, Cost and Net Price`,
  description: `UC Irvine admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026 (${K.rate('uc-irvine')}). See the 2026-27 budget of ${K.sticker('uc-irvine')} and what families paid by income band.`,
  intro: `UC Irvine admitted ${K.rate('uc-irvine')} of first-year applicants for fall 2026, about 1 in ${K.oneIn('uc-irvine')}, and nearly every student who stayed on its waiting list the year before got in.`,
  resume: `UC Irvine admitted ${K.num(a.admitted!)} of ${K.num(a.applicants!)} first-year applicants for fall 2026, an acceptance rate of ${K.rate('uc-irvine')}, in the University of California's preliminary snapshot. Its Common Data Set 2025-2026 covers the class before: ${K.num(c.admitted)} admits from ${K.num(c.applicants)} applications and ${K.num(c.enrolled!)} enrolled first-years. Admission is test-free, as at every UC campus, and the middle half of fall 2026 admits held a 4.06 to 4.27 high school GPA. The financial aid office budgets ${K.sticker('uc-irvine')} for a new California resident living on campus in ${cost.year} and ${K.stickerOut('uc-irvine')} for a nonresident. Federal averages for ${K.meta.years.net} put the net price at ${K.net('uc-irvine', 0)} for families under $30,000 and ${K.net('uc-irvine', 2)} between $48,001 and $75,000, and the UC Blue and Gold plan covers tuition for most California families earning up to $100,000.`,
  body: (h) => `
<h2>Irvine's waiting list worked almost like a second admission round</h2>
<p>For fall 2025, UC Irvine offered 12,967 applicants a place on its waiting list. 5,738 accepted it, and 5,737 of them were admitted, nearly every one. Students who receive a waitlist offer from Irvine should accept it: on that record the list is less a consolation than a delayed yes. The residency split points the same way for nonresidents. Californians got 18,922 offers from 86,230 applications, about 21.9%, while out-of-state U.S. applicants got 7,784 of 16,381, about 47.5%, and international applicants 9,258 of 21,620, about 42.8%.</p>
<p>The enrolled class is still mostly Californian: of the ${h.num(c.enrolled!)} first-years who arrived in fall 2025, 4,870 were state residents, 472 came from other states and 1,079 from abroad.</p>
${h.miniGap('uc-irvine')}
<h2>Campus fees that raise the Irvine budget</h2>
<p>A new student in ${cost.year} pays the same systemwide charge as at any UC campus, ${h.usd(inS.tuition!)}, but Irvine adds ${h.usd(inS.fees!)} of campus fees, against ${h.usd(ucla.fees!)} at ${h.c('ucla', 'UCLA')}. On campus the budget then counts ${h.usd(inS.housingFood!)} for housing and food, ${h.usd(inS.books!)} for books and supplies, ${h.usd(inS.personal!)} for personal costs and ${h.usd(inS.travel!)} for transportation, for ${h.sticker('uc-irvine')}. A student living at home or off campus has a different budget. Nonresidents add ${h.usd(outS.total! - inS.total!)} of Nonresident Tuition and Fees.</p>
${h.miniNet('uc-irvine')}
<h2>No scores, no early round, one application</h2>
<p>Irvine does not look at SAT or ACT results for admission or for the Regents and Chancellor's scholarships. There is no Early Decision or Early Action; the UC application, filed between October 1 and November 30, covers Irvine and any other campus the student lists, and California students in the top 9 percent of their school or the state are guaranteed a seat somewhere in the system. Irvine admits at roughly three times the rate of ${h.c('uc-berkeley', 'UC Berkeley')}, close to ${h.c('ucsd', 'UC San Diego')}. Put them side by side with ${h.c('uc-davis', 'UC Davis')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'Should I accept a spot on the UC Irvine waitlist?', a: 'On recent evidence, yes. UC Irvine’s Common Data Set 2025-2026 shows 12,967 applicants offered a waitlist place for fall 2025, 5,738 accepting it and 5,737 admitted from the list. Accepting costs nothing, but a waitlist place is not a guarantee, so secure a seat at another college by its deposit deadline while you wait.' },
    { q: 'What is UC Irvine’s acceptance rate for out-of-state students?', a: 'For fall 2025, UC Irvine admitted 7,784 of 16,381 out-of-state U.S. applicants, about 47.5%, and 9,258 of 21,620 international applicants, about 42.8%, according to its Common Data Set. Californians were admitted at about 21.9%, 18,922 of 86,230. Nonresidents pay Nonresident Tuition and Fees on top of the resident budget.' },
    { q: 'How much does UC Irvine cost in 2026-27?', a: `UC Irvine’s financial aid office budgets ${K.sticker('uc-irvine')} for a new California resident living on campus in 2026-27, with systemwide tuition of ${K.usd(inS.tuition!)}, campus fees of ${K.usd(inS.fees!)}, housing, food, books, personal and transportation costs. A nonresident adds ${K.usd(outS.total! - inS.total!)}, for ${K.stickerOut('uc-irvine')}. Students living at home or off campus have separate, lower or higher budgets on the same page.` },
  ],
  related: ['college:ucsd', 'college:ucla', 'college:uc-davis', 'college:uc-berkeley', 'compare-colleges', 'net-price-calculator'],
});
