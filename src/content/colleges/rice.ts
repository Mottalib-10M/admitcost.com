import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('rice');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'rice',
  title: `Rice Acceptance Rate 2026: ${K.rate('rice')}, SAT Range and Net Price`,
  description: `Rice University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('rice')}). See the ${cost.year} cost, SAT range and Rice Investment net price by family income.`,
  intro: `Rice admitted ${K.rate('rice')} of applicants for fall 2025; about half of its first-year class came through Early Decision.`,
  resume: `Rice University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('rice')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Rice recommends sending the SAT or ACT without requiring it, and ${K.pct(sc.pctSat!, 0)} of the class sent an SAT, with a middle 50% of ${K.satRange('rice')}. The ${cost.year} cost of attendance is ${K.sticker('rice')}, one of the lower private budgets on this site. Under the Rice Investment, families earning under $100,000 receive a grant for full tuition, fees and living expenses, and families between $100,000 and $200,000 receive full tuition. The federal averages for ${K.meta.years.net} are among the lowest anywhere for middle incomes: ${K.net('rice', 1)} between $30,001 and $48,000 and ${K.net('rice', 2)} between $48,001 and $75,000.`,
  body: (h) => `
<h2>Half the class decided in December</h2>
<p>Rice's Common Data Set shows how much of its class is filled early. It admitted 647 of 5,748 Early Decision applicants for fall 2025, about one in nine, and 629 of them enrolled: close to half of the ${h.num(c.enrolled!)} students in the class. That leaves a smaller share of seats for the regular round on January 4, where the pool is much larger. Rice has two binding rounds, November 1 and January 4, and no Early Action. Shepherd School of Music applicants must send their materials by December 1.</p>
<h2>Texas residents get no head start</h2>
<p>About three applicants in ten came from Texas, and Texans were admitted at about the same rate as everyone else. At a private university that is expected, but it surprises families used to the in-state preferences of the University of Texas and Texas A&M. For a Texan, the comparison with ${h.c('ut-austin', 'UT Austin')} and ${h.c('texas-am', 'Texas A&M')} is mostly a comparison of prices, since their public resident tuition is low and their admission rules for top graduates are automatic.</p>
${h.miniScore('rice', 'SAT')}
<h2>The Rice Investment, and merit on top</h2>
<p>Rice meets 100% of demonstrated need, international students included. The Rice Investment sets two thresholds: under $100,000, a grant covering tuition, fees and living expenses; from $100,000 to $200,000, a full-tuition grant. The ${h.meta.years.net} figures show how far that reaches: ${h.net('rice', 0)} under $30,000, ${h.net('rice', 3)} between $75,001 and $110,000. About one admitted student in five is also offered a merit scholarship, awarded without regard to need. Tuition depends on the year of entry: students who entered in 2024 or later pay the current rate of ${h.usd(cost.tuition!)}.</p>
${h.miniNet('rice')}
<h2>Where Rice sits on price</h2>
<p>With a ${cost.year} budget of ${h.sticker('rice')}, Rice is several thousand dollars cheaper than most private universities of the same selectivity, and its average net prices are lower still. Families can set it against ${h.c('vanderbilt', 'Vanderbilt')}, ${h.c('duke', 'Duke')} and ${h.c('stanford', 'Stanford')} in the ${h.a('compare-colleges', 'comparison tool')}.</p>`,
  faqs: [
    { q: 'What is Rice University’s acceptance rate for fall 2025?', a: `Rice admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('rice')}, according to its Common Data Set 2025-2026. ${K.num(c.enrolled!)} students enrolled, and close to half of them came through binding Early Decision in the November round, which narrows the regular pool.` },
    { q: 'What is the Rice Investment?', a: 'The Rice Investment is Rice University’s aid program: families earning under $100,000 receive a grant covering full tuition, fees and living expenses, and families earning $100,000 to $200,000 receive a full-tuition grant, assuming typical assets. Rice also meets 100% of demonstrated need for admitted students, including international students.' },
    { q: 'Does Rice require the SAT or ACT?', a: `No, but Rice recommends sending an SAT or ACT score if you have one, and says students who cannot or prefer not to will get full consideration. ${K.pct(sc.pctSat!, 0)} of the fall 2025 class sent an SAT, so its range of ${K.satRange('rice')} is a fairly complete picture of admitted students.` },
  ],
  related: ['college:vanderbilt', 'college:duke', 'college:ut-austin', 'college:texas-am', 'compare-colleges', 'net-price-calculator'],
});
