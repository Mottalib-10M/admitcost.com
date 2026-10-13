import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('duke');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'duke',
  title: `Duke Acceptance Rate 2026: ${K.rate('duke')}, SAT Range and Net Price`,
  description: `Duke admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('duke')}). See its ${cost.year} cost of attendance, the SAT range and the 2026 net price by income band.`,
  intro: `Duke admitted ${K.rate('duke')} of applicants for fall 2025; Carolina families under $150,000 receive full-tuition grants.`,
  resume: `Duke University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('duke')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Duke stays test-optional for the 2026-27 cycle; the ${K.pct(sc.pctSat!, 0)} of the class who sent an SAT had a middle 50% of ${K.satRange('duke')}, among the highest ranges on this site. The ${cost.year} first-year cost of attendance starts at ${K.sticker('duke')}. Duke meets full demonstrated need, often with a loan and work-study in the package, and gives North and South Carolina residents earning $150,000 or less full-tuition grants. In ${K.meta.years.net} the federal average net price was ${K.net('duke', 0)} for families under $30,000, ${K.net('duke', 2)} between $48,001 and $75,000 and ${K.net('duke', 4)} above $110,000.`,
  body: (h) => `
<h2>One early round, and it is binding</h2>
<p>Duke has a single Early Decision round, due November 2, and a regular round due January 4. There is no Early Action and no second Early Decision. Duke has not published how many of its fall 2025 admits came through Early Decision, but the structure itself tells applicants what matters: a student certain about Duke has one moment to say so, and everyone else competes in the regular pool for the remaining places. Alumni interviews are optional and offered only to some applicants; Duke states that not being offered one has no effect on the decision.</p>
${h.miniScore('duke', 'SAT')}
<h2>The Carolinas initiative</h2>
<p>Duke's most specific aid rule concerns its own region. Admitted students from North Carolina and South Carolina whose total family income is $150,000 or less receive full-tuition grants, and at $65,000 or less Duke also covers housing and meals without loans. For everyone else Duke meets 100% of demonstrated need, but unlike several peers it says the package will most likely include a loan and work-study alongside the grant. The university reports that about one first-year student in five attended tuition-free last year.</p>
<p>The federal averages show the result for aided families across the country: below zero or close to it for the two lowest bands in ${h.meta.years.net}, ${h.net('duke', 2)} between $48,001 and $75,000, and ${h.net('duke', 3)} between $75,001 and $110,000. Families above $110,000 paid ${h.net('duke', 4)} on average, much closer to the full price, since Duke gives very little non-need aid.</p>
${h.miniNet('duke')}
<h2>What the budget includes</h2>
<p>The ${cost.year} budget combines tuition of ${h.usd(cost.tuition!)}, fees of ${h.usd(cost.fees!)} and ${h.usd(cost.housingFood!)} for housing and food, with a slightly higher figure for Pratt engineering students. Families comparing it with ${h.c('unc', 'UNC Chapel Hill')} should look at residency first, and those comparing it with ${h.c('vanderbilt', 'Vanderbilt')} or ${h.c('northwestern', 'Northwestern')} at the different loan policies, which change the real price more than the sticker does.</p>`,
  faqs: [
    { q: 'What is Duke’s acceptance rate for the Class of 2029?', a: `Duke admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('duke')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Duke did not publish its Early Decision counts in that document, so the split between rounds is not public.` },
    { q: 'Is Duke free for North Carolina families?', a: 'For admitted students from North Carolina or South Carolina with total family income of $150,000 or less, Duke gives a full-tuition grant. At $65,000 or less it also covers housing and meals without loans. Other costs, such as books and travel, enter the regular need-based package, which can include work-study.' },
    { q: 'Does Duke require the SAT or ACT in 2026-27?', a: 'No. Duke states that it is test-optional for first-year and transfer applicants in the 2026-2027 cycle and that students who apply without scores are not disadvantaged. Self-reported scores are accepted when applying, and admitted students who used scores must then send official reports before enrolling.' },
  ],
  related: ['college:unc', 'college:vanderbilt', 'college:northwestern', 'college:wake-forest', 'compare-colleges', 'acceptance-rates'],
});
