import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const S = K.schools.filter((s) => s.adm);
const sorted = [...S].sort((a, b) => a.adm!.rate - b.adm!.rate);
const under5 = S.filter((s) => s.adm!.rate < 0.05).length;
const under15 = S.filter((s) => s.adm!.rate < 0.15).length;
const over50 = S.filter((s) => s.adm!.rate >= 0.5).length;
const newer = S.filter((s) => s.adm!.newer).length;
const top5 = sorted.slice(0, 5);
const fit1300 = S.filter((s) => { const p = s.sat ? K.satPos(s.slug, 1300) : null; return K.label(s.adm!.rate, s.testStatus === 'blind' ? null : p) !== 'reach'; }).length;

export default definePage({
  id: 'acceptance-rates', group: 'admissions', order: 10, slug: 'acceptance-rates',
  nav: 'Acceptance rates', card: `Admit rate, SAT range and your label for all ${K.schools.length} universities.`,
  title: `Acceptance Rates 2026: ${K.schools.length} US Universities, Newest Cycle`,
  description: `College acceptance rates 2026 for ${K.schools.length} US universities, from each school's newest published cycle, with SAT ranges and a reach, target or likely label.`,
  h1: 'College acceptance rates, newest cycle first',
  intro: `${under15} of the ${S.length} universities below admitted fewer than 15% of their applicants in the newest cycle on file; type your SAT to sort them into reach, target and likely.`,
  resume: `An acceptance rate is the share of first-year applicants a university admitted in one cycle: admitted students divided by applicants, as counted in section C1 of its Common Data Set. The table above gives it for ${S.length} of the most searched US universities, for the newest entering class each school has documented: ${newer} rates come from the university's own fall 2025 figures, the others from the federal fall 2024 data, and every page names the class. The five lowest on file are ${K.listOf(top5.map((s) => `${s.short} (${K.rate(s.slug)})`))}. ${under5} universities admit fewer than 5% of applicants and ${over50} admit half or more. For a student with a 1300 SAT, the site's rule makes ${fit1300} of them a target or a likely school; change the score to see the list move.`,
  body: (h) => `
<h2>How the rate is computed, and why sites disagree</h2>
<p>Each university counts its own applicants and offers and publishes them every year in the Common Data Set, a standard questionnaire used across American higher education. The rate on this site is computed from those two counts, so it carries the decimals the counts give: Harvard's ${h.rate('harvard')} is ${h.num(h.s('harvard').adm!.admitted!)} offers over ${h.num(h.s('harvard').adm!.applicants!)} applications. Other pages round to "4%", quote a March press figure that excluded the waiting list, or copy last year's class. The federal IPEDS survey publishes the same rate later and for an older class. None of these is wrong; they describe different things, and the date is what makes them comparable.</p>
<h2>The rate is not your probability</h2>
<p>At a university that admits 30% of applicants, a strong student does not face a 30% chance, and a weak one does not either. The pool mixes every profile, early and regular applicants, residents and nonresidents, and majors with very different capacity. What the rate does tell you reliably is the ceiling: below ${h.num(h.rule.reachBelow * 100)}%, even applicants at the top of the score range are turned down far more often than admitted, which is why the label on this site is "reach" for everyone there. Above that threshold the score starts to sort applicants, and the label follows where yours falls in the middle 50% of enrolled students.</p>
${h.miniActSat()}
<h2>Rates that rose, rates that fell</h2>
<p>A rising rate does not always mean an easier school. When Harvard, Dartmouth and others required test scores again, their applicant counts fell and their rates edged up, since students without a score stopped applying; the competition among those who remained did not soften. Falling rates at public flagships often come the other way, from a jump in out-of-state applications through the Common App while resident places stayed fixed. Each university page shows its admissions by cycle so you can see the counts behind the change.</p>
<h2>Public universities and the resident share</h2>
<p>Several public universities admit residents and nonresidents at very different rates, because state law or board policy fixes the share of residents in the class. At the University of California and at flagships such as ${h.c('unc', 'UNC Chapel Hill')} or ${h.c('uva', 'Virginia')}, a resident can face an admit rate several times higher than an out-of-state applicant. When the university publishes the split, its page says so; the overall rate in the table mixes both groups. The ${h.a('college-tuition', 'tuition page')} shows what residency does to the price.</p>
<h2>Using the table to build a list</h2>
<p>Counselors usually suggest a list with a few reach schools, several targets and at least two likely schools whose net price the family can afford. Sort the table by admit rate, type your SAT, and filter public or private. Then open each name to see its net price by income, and check the price with the ${h.a('net-price-calculator', 'net price ranking')} before falling in love with a campus. A likely school that the family cannot pay is not on the list.</p>`,
  faqs: [
    { q: 'What counts as an applicant in a college acceptance rate?', a: 'The Common Data Set counts first-time, first-year students who completed an application for the fall term, across early and regular rounds; transfer students are counted separately. Admitted students include those offered a place, and students admitted from the waiting list are added by most universities. The rate is admitted divided by applicants.' },
    { q: 'Why is the acceptance rate on this site different from the one on the news?', a: 'News reports in March or April usually give the regular decision results, or a figure before waitlist offers, while the Common Data Set published months later gives the final counts for the whole cycle. The federal IPEDS rate comes later still and describes an older class. This site names the class and links the document every time.' },
    { q: 'Is a 10% acceptance rate the same for everyone who applies?', a: 'No. Early rounds often admit a larger share, recruited athletes and some legacy applicants are admitted at much higher rates where those preferences exist, and residents of a public university’s state can be admitted at several times the out-of-state rate. The overall rate averages all of these groups, so it only gives the order of magnitude.' },
    { q: 'Which universities admit more than half of their applicants?', a: `Among the ${K.schools.length} universities on this site, ${over50} admitted half or more in their newest cycle on file, mostly large public universities such as state flagships in the South and Midwest. Many of them guarantee admission or merit aid above published grade or score thresholds, which each university page lists when the school publishes it.` },
  ],
  tool: 'rates',
  related: ['college:harvard', 'college:ucla', 'what-is-a-good-sat-score', 'compare-colleges', 'net-price-calculator'],
  sources: ['cds', 'scorecard', 'scorecard_doc', 'ipeds'],
});
