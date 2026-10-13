import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('vanderbilt');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'vanderbilt',
  title: `Vanderbilt Acceptance Rate 2026: ${K.rate('vanderbilt')}, ED Odds, Net Price`,
  description: `Vanderbilt admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('vanderbilt')}). See the ${cost.year} cost of attendance, SAT and ACT ranges and net price by family income.`,
  intro: `Vanderbilt admitted ${K.rate('vanderbilt')} of applicants for fall 2025, and households earning $200,000 or less receive at least full tuition.`,
  resume: `Vanderbilt University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('vanderbilt')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Early Decision applicants were admitted at roughly two and a half times that rate. Vanderbilt stays test-optional for the classes entering in fall 2027 and 2028, then will require the SAT or ACT from fall 2029; more enrolled students sent the ACT (${K.pct(sc.pctAct!, 0)}, middle 50% ${K.actRange('vanderbilt')}) than the SAT (${K.pct(sc.pctSat!, 0)}, ${K.satRange('vanderbilt')}). The ${cost.year} cost of attendance is ${K.sticker('vanderbilt')}. Under Opportunity Vanderbilt, households earning $200,000 or less with typical assets receive at least full tuition, and need is met without loans; in ${K.meta.years.net}, aided families between $48,001 and $75,000 paid an average of ${K.net('vanderbilt', 2)}.`,
  body: (h) => `
<h2>Testing returns in 2029</h2>
<p>Vanderbilt is one of the few universities that has announced a date for the end of its test-optional policy without applying it yet. Students applying for fall 2027 or fall 2028 may still apply without scores; students entering in fall 2029 and later must send the SAT or ACT. Vanderbilt is also unusual for its ACT share: more of the fall 2025 class submitted the ACT than the SAT, reflecting its pull in the South and Midwest. A composite of ${h.num(s.actR!.p75)} or more sits at the top of the range; below ${h.num(s.actR!.p25)}, the score probably does not help.</p>
${h.miniScore('vanderbilt', 'ACT')}
<h2>Two Early Decision rounds, very different odds</h2>
<p>Vanderbilt admitted 874 of 6,202 Early Decision applicants for fall 2025, about one in seven, against about one in nineteen overall; the regular round was therefore harder than the headline rate. It offers Early Decision I on November 1 and Early Decision II on January 1, with the regular deadline on the same January date. Tennessee applicants form a small share of the pool and of the admits, so residency gives no visible edge at a private university like this one. The waiting list moved too: 207 students were admitted from it.</p>
<h2>Opportunity Vanderbilt and the merit scholarships</h2>
<p>Vanderbilt meets 100% of demonstrated need without loans and is need-blind for U.S. applicants. Households earning $200,000 or less, with parent net worth under the threshold Vanderbilt sets, receive at least full tuition, and families with the lowest incomes receive awards that cover nearly the whole budget. The federal averages for ${h.meta.years.net} were ${h.net('vanderbilt', 0)} under $30,000 and ${h.net('vanderbilt', 1)} between $30,001 and $48,000. Separately, Vanderbilt awards more than two hundred full-tuition merit scholarships a year, with their own December 1 application deadline, which explains part of the ${h.net('vanderbilt', 4)} average above $110,000.</p>
${h.miniNet('vanderbilt')}
<h2>The budget in Nashville</h2>
<p>The ${cost.year} budget, ${h.sticker('vanderbilt')}, includes tuition of ${h.usd(cost.tuition!)}, fees and ${h.usd(cost.housingFood!)} for housing and food. Families weighing Vanderbilt also look at ${h.c('duke', 'Duke')}, ${h.c('rice', 'Rice')}, ${h.c('emory', 'Emory')} and ${h.c('washu', 'WashU')}; the ${h.a('compare-colleges', 'comparison tool')} puts their net prices side by side at your income.</p>`,
  faqs: [
    { q: 'What is Vanderbilt’s acceptance rate for the Class of 2029?', a: `Vanderbilt admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('vanderbilt')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Its Early Decision round admitted 874 of 6,202 applicants, a far higher share than the regular round.` },
    { q: 'When will Vanderbilt require the SAT or ACT again?', a: 'Vanderbilt has announced that the SAT or ACT will be required for students entering in fall 2029 and later. Students applying for the classes entering in fall 2027 and fall 2028 can still choose to apply with or without scores, and that choice cannot be changed after the application is submitted.' },
    { q: 'Is Vanderbilt tuition free under $200,000?', a: 'Through Opportunity Vanderbilt, households with income of $200,000 or less and typical assets receive at least a full-tuition scholarship, and Vanderbilt meets full demonstrated need without loans. Families with higher assets are reviewed on their full financial picture, and lower-income families usually receive grants covering housing and food as well.' },
  ],
  related: ['college:duke', 'college:rice', 'college:emory', 'college:washu', 'compare-colleges', 'act-scores'],
});
