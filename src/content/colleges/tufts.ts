import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('tufts');
const c = s.latest!.cycle!;
const cost = s.latest!.cost!;
const sc = s.latest!.scores!;

export default defineCollege({
  slug: 'tufts',
  title: `Tufts Acceptance Rate 2026: ${K.rate('tufts')}, SAT Range and Net Price`,
  description: `Tufts admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} applicants for fall 2025 (${K.rate('tufts')}). Its full ${cost.year} cost of attendance is ${K.sticker('tufts')}; see the 2026 net price paid by income band.`,
  intro: `Tufts admitted ${K.rate('tufts')} of applicants for fall 2025, and from fall 2026 families under $150,000 pay no tuition there.`,
  resume: `Tufts University admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for the class that entered in fall 2025, an acceptance rate of ${K.rate('tufts')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. Close to a third of those offers went to Early Decision applicants. Testing is optional: ${K.pct(sc.pctSat!, 0)} of the enrolled class sent an SAT, with a middle 50% of ${K.satRange('tufts')}, and Tufts encourages scores of 1300 or more to be sent. The cost of attendance for ${cost.year} is ${K.sticker('tufts')}, but the Tufts Tuition Pact makes tuition free for American families earning under $150,000 from the fall 2026 entering class. Federal figures for ${K.meta.years.net}, before that pact, show an average net price of ${K.net('tufts', 1)} for incomes of $30,001 to $48,000 and ${K.net('tufts', 3)} for $75,001 to $110,000.`,
  body: (h) => `
<h2>The Tuition Pact moves the line to $150,000</h2>
<p>Tufts is one of the universities that raised its free-tuition threshold most sharply. Under the Tuition Pact, students entering in fall 2026 or later whose families earn less than $150,000 with typical assets pay no tuition, and Tufts continues to meet the full demonstrated need of every admitted student, whatever the citizenship. The ${h.meta.years.net} federal figures on this page describe the years before the pact, when the band from $75,001 to $110,000 paid an average of ${h.net('tufts', 3)}; for a family in that band applying now, the price should fall to housing, food and personal costs at most, depending on assets.</p>
<p>The budget itself is high: ${h.sticker('tufts')} for ${cost.year}, including tuition of ${h.usd(cost.tuition!)} and ${h.usd(cost.housingFood!)} for housing and food, plus a travel allowance that depends on where the student lives.</p>
${h.miniNet('tufts')}
<h2>Applying to one school inside Tufts</h2>
<p>Tufts asks applicants to choose a single school: Arts and Sciences, Engineering, the SMFA art school or the five-year combined degree, and each application is read only for that school. Arts and Sciences is by far the largest, enrolling most of the first-year class; Engineering takes a few hundred. A student unsure between the two should weigh where the profile is strongest, since a switch after admission is possible but not guaranteed.</p>
<h2>Early Decision and the score choice</h2>
<p>Tufts has two binding Early Decision rounds, in early November and early January, and no Early Action. For fall 2025 it admitted 1,071 of 3,344 Early Decision applicants, a far higher share than in the regular round. The score policy is unusually explicit: send an SAT of 1300 or more or an ACT of 28 or more, and the decision to include scores cannot be changed once the application is submitted. With a published range of ${h.satRange('tufts')}, a 1300 sits below the 25th percentile of enrolled students who sent scores, which says how much the range is lifted by test-optional selection.</p>
${h.miniScore('tufts', 'SAT')}
<h2>Close comparisons</h2>
<p>Students who look at Tufts often apply to ${h.c('boston-college', 'Boston College')}, ${h.c('northeastern', 'Northeastern')} and ${h.c('brown', 'Brown')}. Their aid thresholds differ, and Boston College and Northeastern publish different early round rules; the ${h.a('compare-colleges', 'comparison tool')} lines them up at your income.</p>`,
  faqs: [
    { q: 'Is Tufts tuition free for families earning under $150,000?', a: 'Yes, from the class entering in fall 2026. Under the Tufts Tuition Pact, U.S. students whose families earn under $150,000 a year with typical assets attend tuition-free, and Tufts still meets the full demonstrated need of each admitted student. Housing, food and personal costs are then covered according to need, not automatically.' },
    { q: 'What is the Tufts acceptance rate for the Class of 2029?', a: `Tufts admitted ${K.num(c.admitted)} of ${K.num(c.applicants)} first-year applicants for fall 2025, an acceptance rate of ${K.rate('tufts')}, and ${K.num(c.enrolled!)} enrolled, according to its Common Data Set 2025-2026. The federal IPEDS rate for the fall 2024 class was ${K.pct(s.admRate!, 1)}, and Early Decision supplied close to a third of the fall 2025 offers.` },
    { q: 'Should I send a 1300 SAT to Tufts?', a: `Tufts encourages scores of 1300 or more on the SAT or 28 or more on the ACT, so a 1300 can be sent. It sits below the 25th percentile of the ${K.pct(sc.pctSat!, 0)} of enrolled students who submitted an SAT, whose middle 50% was ${K.satRange('tufts')}, so it adds little unless the rest of the file is very strong.` },
  ],
  related: ['college:boston-college', 'college:northeastern', 'college:brown', 'college:boston-university', 'compare-colleges', 'net-price-calculator'],
});
