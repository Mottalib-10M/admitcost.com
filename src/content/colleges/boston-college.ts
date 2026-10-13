import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('boston-college');
const n = s.latest!.cycleNewer!;
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'boston-college',
  title: `Boston College Acceptance Rate 2026: ${K.rate('boston-college')}, Net Price`,
  description: `Boston College accepted ${K.num(n.admitted)} of ${K.num(n.applicants)} applicants for fall 2026 (${K.rate('boston-college')}). See its ${cost.year} cost of attendance, SAT range and the net price paid by income band.`,
  intro: `Boston College accepted ${K.rate('boston-college')} of applicants for the class entering in fall 2026, and meets full need with almost no merit aid.`,
  resume: `Boston College's acceptance rate for the class entering in fall 2026 (Class of 2030) is ${K.rate('boston-college')}: ${K.num(n.admitted)} accepted out of ${K.num(n.applicants)} applications, according to its admissions profile. Its newest Common Data Set, for fall 2024, counted ${K.num(c.applicants)} applicants and ${K.num(c.admitted)} admits, so applications rose by roughly a fifth in two years while the number of offers barely moved. Testing is optional but encouraged; the middle 50% SAT of enrolled students who sent one was ${K.satRange('boston-college')}. The cost of attendance for ${cost.year} is ${K.sticker('boston-college')}. Admission is need-blind for American students and BC meets their full demonstrated need, which shows in the federal figures: in ${K.meta.years.net} families under $30,000 paid an average of ${K.net('boston-college', 0)} and families between $48,001 and $75,000 paid ${K.net('boston-college', 2)}.`,
  body: (h) => `
<h2>Applications up, offers flat</h2>
<p>Boston College did something few universities do: its admissions office published the Class of 2030 counts before releasing the Common Data Set for the year before. That is why this page jumps from fall 2024 to fall 2026. The jump itself is the story: ${h.num(n.applicants)} applications against ${h.num(c.applicants)} two years earlier, for almost the same number of places. Early Decision carries a growing weight in that arithmetic. In fall 2024, BC admitted about a third of its Early Decision applicants, and those offers made up roughly a quarter of the class.</p>
<h2>Need-blind, full need, and almost no merit money</h2>
<p>BC does not look at an American applicant's aid request when deciding, and it promises to meet the full demonstrated need of every admitted U.S. student. The other side of that promise is that it gives almost no merit aid: the Presidential Scholarship, full tuition for a small group each year, is its only academic award. A family with high income and no need should therefore expect to pay close to the sticker price of ${h.sticker('boston-college')}, while a family with need can expect a price close to the federal averages: ${h.net('boston-college', 1)} between $30,001 and $48,000, ${h.net('boston-college', 3)} between $75,001 and $110,000.</p>
${h.miniNet('boston-college')}
<h2>What the bill adds up to</h2>
<p>The ${cost.year} budget includes tuition of ${h.usd(cost.tuition!)}, fees and ${h.usd(cost.housingFood!)} for housing and food. Massachusetts law requires every student to have health coverage, so BC's plan is added unless the family's own insurance is accepted as a waiver. First-year aid packages may include a modest loan and a work-study job toward the family contribution; neither reduces the price.</p>
${h.miniScore('boston-college', 'SAT')}
<h2>Testing: optional, but BC says scores help</h2>
<p>BC is test-optional, yet it states that its own research finds scores add predictive value and encourages students who tested to send them. Only ${h.pct(sc.pctSat!, 0)} of the enrolled class submitted an SAT, so the range is built from a minority. Families comparing Jesuit universities also look at ${h.c('georgetown', 'Georgetown')} and ${h.c('notre-dame', 'Notre Dame')}; ${h.c('boston-university', 'Boston University')} and ${h.c('tufts', 'Tufts')} are the local alternatives, with different aid thresholds.</p>`,
  faqs: [
    { q: 'What is Boston College’s acceptance rate for the Class of 2030?', a: `Boston College received ${K.num(n.applicants)} applications for the class entering in fall 2026 and accepted ${K.num(n.admitted)}, an acceptance rate of ${K.rate('boston-college')}, according to its admissions profile. Two years earlier, for fall 2024, its Common Data Set counted ${K.num(c.applicants)} applicants and ${K.num(c.admitted)} admitted students.` },
    { q: 'Does Boston College give merit scholarships?', a: 'Very few. Boston College meets the full demonstrated need of admitted U.S. students and puts its aid budget into need-based grants. Its only academic merit award is the Presidential Scholarship, which pays full tuition for a small number of students each year, so families without need should plan on paying close to the full cost.' },
    { q: 'How much does Boston College cost in 2026-27?', a: `The ${cost.year} cost of attendance published by Boston College is ${K.sticker('boston-college')}, including tuition of ${K.usd(cost.tuition!)} and ${K.usd(cost.housingFood!)} for housing and food. Health insurance is billed on top unless waived, because Massachusetts requires coverage. Families with need paid far less on average in federal aid data.` },
  ],
  related: ['college:boston-university', 'college:tufts', 'college:georgetown', 'college:notre-dame', 'compare-colleges', 'acceptance-rates'],
});
