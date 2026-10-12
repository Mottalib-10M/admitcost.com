import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const u = K.s('ucla'), c = K.s('usc'), n = K.s('nyu');
const at = (slug: string, inc: number, res = true) => K.netAt(slug, inc, res);
const uOut = at('ucla', 120000, false);

export default definePage({
  id: 'compare-colleges', group: 'admissions', order: 20, slug: 'compare-colleges',
  nav: 'Compare colleges', card: 'Two or three universities side by side at your income and score.',
  title: 'Compare Colleges 2026: Net Price, Admit Rate and SAT Range',
  description: `Compare 2 or 3 of ${K.schools.length} US universities in 2026: net price at your family income, admit rate of the newest cycle, SAT range, graduation rate and federal debt.`,
  h1: 'Compare colleges side by side',
  intro: 'Choose two or three universities, type your family income and your SAT: the table recalculates the price you would likely pay and where you stand.',
  resume: `Comparing colleges on the sticker price is the classic mistake: the figure families pay depends on income, residency and the school's aid policy, and the ranking of three schools can flip from one family to the next. This comparison reads, for each university, the average net price paid by families on federal aid in your income band in ${K.meta.years.net} (College Scorecard), the sticker price of its newest published budget, the admit rate of its newest cycle, the SAT middle 50% of enrolled students, and three outcomes: the share graduating within six years, median earnings ten years after entry and median federal debt at graduation. With a family income of $120,000, for example, the average net price was ${K.usd(at('ucla', 120000).shown ?? 0)} at UCLA for a Californian, ${K.usd(uOut.total ?? 0)} for a nonresident once the tuition gap is added, ${K.usd(at('usc', 120000).shown ?? 0)} at USC and ${K.usd(at('nyu', 120000).shown ?? 0)} at NYU.`,
  body: (h) => `
<h2>What to compare, in order</h2>
<p>Start with the net price at your income, because it decides whether an offer is possible at all. Then look at the graduation rate: a school where ${h.pct(u.grad6!, 0)} of students finish within six years, like UCLA, and one where the share is lower are not the same purchase, since every extra semester is paid at the full rate and delays a salary. Earnings ten years after entry and federal debt at graduation come last. They describe all students of the university, every major mixed, and say more about the student body than about what one program will do for you.</p>
<h2>Three Los Angeles and New York names, one family</h2>
<p>The default comparison above puts ${h.c('ucla', 'UCLA')}, ${h.c('usc', 'USC')} and ${h.c('nyu', 'NYU')} together because the three are searched together. Their published sticker prices differ by tens of thousands of dollars, and their admit rates sit in the same band: ${h.rate('ucla')} at UCLA, ${h.rate('usc')} at USC and ${h.rate('nyu')} at NYU in their newest cycles on file. The net price tells another story. At incomes under $30,000 the average was ${h.net('ucla', 0)} at UCLA, ${h.net('usc', 0)} at USC and ${h.net('nyu', 0)} at NYU. Change the income in the tool and watch the order move: the private universities' grants shrink as income rises, while UCLA's resident price rises more slowly until the top band.</p>
${h.miniFour('usc')}
<h2>When residency decides</h2>
<p>For a student from outside California, UCLA's federal net price is not the right figure: it covers residents only. The comparison then adds the published gap between out-of-state and in-state tuition and fees (${h.usd(u.tuitionOut! - u.tuitionIn!)} in ${h.meta.years.tuition}), which can make a private university with generous need-based aid the cheaper option for a middle-income family. Answer "no" to the residency question to see it. The gap is an upper figure, since some campuses give nonresident scholarships, but the University of California gives little need-based aid to nonresidents.</p>
<h2>Reading the label in a comparison</h2>
<p>The "reach, target, likely" line uses one rule for every school, written on the ${h.a('method', 'method page')}: a school admitting under ${h.num(h.rule.reachBelow * 100)}% is a reach for everyone, and above that the label follows where your SAT falls in the enrolled range. Two schools labelled "target" are not equally likely: the label only sorts a list into three piles. If you took the ACT, convert it first with the ${h.a('act-to-sat-conversion', 'ACT to SAT table')}. For test-free schools the score is ignored and the label follows the admit rate.</p>
<h2>What the comparison cannot show</h2>
<p>Merit scholarships are not in the federal averages of high-income bands in a way you can rely on, and some universities, NYU among them, have announced new tuition promises for lower incomes that postdate the ${h.meta.years.net} figures. Each university page lists what the school itself publishes about its aid. Before deciding between two admissions, compare the award letters line by line: grants are money you keep, while loans and work-study are ways of paying the rest.</p>`,
  faqs: [
    { q: 'How do I compare financial aid offers from two colleges?', a: 'Subtract only the grants and scholarships from each school’s full cost of attendance for the year; leave loans and work-study out, since they are ways to pay. The remainder is your real price. Then check whether the grants renew each year and whether they depend on keeping a grade average, which award letters often state in small print.' },
    { q: 'Is a cheaper public university always cheaper than a private one?', a: `No. For a resident with a modest income it usually is, but private universities with large endowments give much larger grants. At incomes under $30,000 the average net price in ${K.meta.years.net} was ${K.net('ucla', 0)} at UCLA and ${K.net('usc', 0)} at USC, and for a nonresident at a public university the tuition gap often reverses the order.` },
    { q: 'Why does the comparison use 2023-24 net prices?', a: `Because ${K.meta.years.net} is the newest year of net price by income in the federal College Scorecard, released on June 10, 2026. Universities report aid figures more than a year after the academic year ends. Sticker prices on the site are newer, from each school’s own published budget, so the two figures can belong to different years.` },
    { q: 'What graduation rate should worry me when I compare colleges?', a: `The six-year rate counts students who started full time and finished at the same school within six years. Among the ${K.schools.length} universities on this site most are above 70%, so a rate well below its neighbours deserves a question to the admissions office about why students leave, and how many transfer rather than drop out.` },
  ],
  tool: 'compare',
  related: ['college:ucla', 'college:usc', 'college:nyu', 'net-price-calculator', 'acceptance-rates'],
  sources: ['scorecard', 'scorecard_doc', 'ipeds_netprice', 'npc_center'],
});
