import { defineCollege } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const s = K.s('washu');
const n = s.latest!.cycleNewer!;
const cost = s.latest!.cost!;

export default defineCollege({
  slug: 'washu',
  title: `WashU Acceptance Rate 2026: ${K.rate('washu')}, SAT Range and Net Price`,
  description: `WashU admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} applicants for fall 2026 (${K.rate('washu')}). See its ${cost.year} cost, the new Early Action round and the net price paid by family income.`,
  intro: `Washington University in St. Louis admitted ${K.rate('washu')} of applicants for the class entering in fall 2026, and meets full need without loans.`,
  resume: `Washington University in St. Louis admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} first-year applicants for the class entering in fall 2026 (Class of 2030), an acceptance rate of ${K.rate('washu')}, according to its admissions profile; WashU does not publish a Common Data Set, so this is its newest official count. Testing is optional and 37% of that class enrolled without scores; the middle 50% SAT of those who sent one was ${K.satRange('washu')}. The ${cost.year} cost of attendance is ${K.sticker('washu')}, with university charges a little lower. WashU meets 100% of demonstrated need without loans and is need-blind for U.S. first-year applicants. The federal figures for ${K.meta.years.net} put the average net price at ${K.net('washu', 0)} under $30,000 and ${K.net('washu', 2)} between $48,001 and $75,000, and ${K.net('washu', 4)} above $110,000.`,
  body: (h) => `
<h2>A new Early Action round</h2>
<p>For students applying for fall 2027, WashU added a non-binding Early Action round on November 2, next to binding Early Decision I on the same date, Early Decision II on January 4 and regular decision on January 4. That gives an early answer to students who need to compare aid offers. There is a catch for merit scholarships: WashU awards its school scholarships and Signature Scholar programs after the Early Decision II notification date, so it recommends the regular round to students who need an academic scholarship in order to attend, with priority scholarship applications due December 16.</p>
${h.miniScore('washu', 'SAT')}
<h2>Applying to a school inside the university</h2>
<p>WashU admits students to one of its undergraduate divisions. The Class of 2030 profile shows most enrolling students in Arts and Sciences and a few hundred in Engineering, with the rest in business, art and architecture. The overall rate mixes all of them; a student should read the requirements of the chosen school, since some ask for a portfolio.</p>
<h2>No loans, and the WashU Pledge</h2>
<p>WashU's aid has changed sharply in recent years: it is now need-blind for U.S. first-year applicants and replaces loans with grants. The WashU Pledge goes further for students from Missouri and southern Illinois whose families earn $75,000 or less: four years free of tuition, fees, housing and food. The federal averages describe a period before some of these changes, ${h.net('washu', 1)} between $30,001 and $48,000 and ${h.net('washu', 3)} between $75,001 and $110,000 in ${h.meta.years.net}, so a family applying now should run WashU's own calculator before relying on them.</p>
${h.miniNet('washu')}
<h2>The ${cost.year} budget</h2>
<p>Tuition is ${h.usd(cost.tuition!)} and housing and food ${h.usd(cost.housingFood!)}, for a total of ${h.sticker('washu')} with books, travel and personal costs. Families comparing it with ${h.c('vanderbilt', 'Vanderbilt')}, ${h.c('emory', 'Emory')} and ${h.c('uchicago', 'UChicago')} will find different free-tuition thresholds; the ${h.a('compare-colleges', 'comparison tool')} lines them up.</p>`,
  faqs: [
    { q: 'What is WashU’s acceptance rate for the Class of 2030?', a: `Washington University in St. Louis admitted ${K.num(n.admitted)} of ${K.num(n.applicants)} first-year applicants for fall 2026, an acceptance rate of ${K.rate('washu')}, according to its admissions profile. WashU does not publish a Common Data Set, so no official fall 2025 counts are online any more.` },
    { q: 'Does WashU have Early Action?', a: 'Yes, from the 2026-27 cycle. Students applying for fall 2027 can choose non-binding Early Action on November 2, binding Early Decision I on the same date, Early Decision II on January 4, or regular decision on January 4. WashU recommends the regular round to students who need a merit scholarship.' },
    { q: 'What is the WashU Pledge?', a: 'The WashU Pledge offers students from Missouri and southern Illinois whose families earn $75,000 or less a free education for four years, covering tuition, fees, housing and food. Beyond the Pledge, WashU meets full demonstrated need for all admitted students without loans and is need-blind for U.S. first-year applicants.' },
  ],
  related: ['college:vanderbilt', 'college:emory', 'college:uchicago', 'college:mizzou', 'compare-colleges', 'net-price-calculator'],
});
