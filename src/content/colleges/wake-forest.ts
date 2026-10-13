import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('wake-forest');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'wake-forest',
  title: `Wake Forest Acceptance Rate 2026: ${K.rate('wake-forest')}, SAT and Net Price`,
  description: `Wake Forest admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('wake-forest')}). See the ${cost.year} cost of attendance, the SAT range and the 2026 net price by income.`,
  intro: `Wake Forest admitted ${K.rate('wake-forest')} of applicants for fall 2025 and has not required the SAT or ACT since the class of 2013.`,
  resume: `Wake Forest University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('wake-forest')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. It was among the first highly selective universities to drop the test requirement, for the class entering in 2009, and remains test-optional: the middle 50% SAT of the ${K.pct(sc.pctSat!, 0)} who sent one was ${K.satRange('wake-forest')}. The ${cost.year} cost of attendance is ${K.sticker('wake-forest')}. Wake Forest meets full demonstrated need, partly with loans and work-study, and its federal net prices for ${K.meta.years.net} were low for modest incomes: ${K.net('wake-forest', 0)} under $30,000 and ${K.net('wake-forest', 2)} between $48,001 and $75,000, against ${K.net('wake-forest', 4)} for families earning more than $110,000 a year, close to the full price.`,
  body: (h) => `
<h2>Test-optional since 2008</h2>
<p>Wake Forest announced in May 2008 that it would no longer require the SAT or ACT, long before the pandemic made test-optional admissions common. Its admissions office has always put weight on the interview instead, and that remains a distinctive part of its review. Because scores are optional, the range of ${h.satRange('wake-forest')} describes a minority of the class, ${h.pct(sc.pctSat!, 0)} for the SAT and ${h.pct(sc.pctAct!, 0)} for the ACT, and should not discourage a student whose grades and courses are strong.</p>
${h.miniScore('wake-forest', 'SAT')}
<h2>Rolling Early Decision and a first-generation round</h2>
<p>Wake Forest's Early Decision I closes on November 15 and its decisions come out on a rolling basis, sometimes weeks before the usual mid-December date. Early Decision II closes on January 1 with the regular round. The non-binding Early Action round is reserved for first-generation college students, an unusual choice that gives them an early answer without the binding commitment that can be hard to make before aid is known.</p>
<h2>Full need, but not always without loans</h2>
<p>Wake Forest commits to meeting 100% of demonstrated need with grants, scholarships, work-study and loans, and describes its merit scholarships as very selective. The federal averages reflect a generous grant policy at low and middle incomes: ${h.net('wake-forest', 1)} between $30,001 and $48,000 and ${h.net('wake-forest', 3)} between $75,001 and $110,000 in ${h.meta.years.net}. Above $110,000 the average jumps to ${h.net('wake-forest', 4)}, close to the full price for families without need. The ${cost.year} budget of ${h.sticker('wake-forest')} includes ${h.usd(cost.tuition! + cost.fees!)} in tuition and fees.</p>
${h.miniNet('wake-forest')}
<h2>Neighbors in the South</h2>
<p>Students applying to Wake Forest often compare it with ${h.c('duke', 'Duke')}, ${h.c('unc', 'UNC Chapel Hill')}, ${h.c('vanderbilt', 'Vanderbilt')} and ${h.c('emory', 'Emory')}. For a North Carolina resident, UNC's in-state price changes the comparison entirely; the ${h.a('compare-colleges', 'comparison tool')} handles residency. Each of those pages gives its own admit rate and net price by income, so the four can be read on the same scale as Wake Forest.</p>`,
  faqs: [
    { q: 'What is the Wake Forest acceptance rate for the Class of 2029?', a: `Wake Forest admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('wake-forest')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Its Early Decision rounds are binding and fill a large part of the class, so the regular-round rate is lower.` },
    { q: 'Does Wake Forest require the SAT or ACT?', a: 'No. Wake Forest has been test-optional since the class entering in fall 2009, after announcing the change in May 2008, and puts weight on interviews instead. International students whose first language is not English must send an English proficiency test such as TOEFL, IELTS or Duolingo.' },
    { q: 'Who can apply Early Action to Wake Forest?', a: 'Only first-generation college students. Wake Forest reserves its non-binding Early Action round for applicants whose parents did not complete a four-year degree, with decisions by mid-January. Everyone else chooses between binding Early Decision I in November, Early Decision II in January or the regular round, also in January.' },
  ],
  related: ['college:duke', 'college:unc', 'college:vanderbilt', 'college:emory', 'compare-colleges', 'net-price-calculator'],
});
