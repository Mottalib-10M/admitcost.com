import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const S = K.schools;
const nn = (xs: Array<number | null>) => xs.filter((x): x is number => typeof x === 'number');
const med = (xs: number[]) => { const v = [...xs].sort((a, b) => a - b); return v[Math.floor(v.length / 2)]; };
const byBand = (b: number) => [...S].filter((s) => s.netByIncome[b] !== null).sort((a, c) => a.netByIncome[b]! - c.netByIncome[b]!);
const low2 = byBand(2).slice(0, 3);
const negative = S.filter((s) => (s.netByIncome[0] ?? 1) < 0);
const priv = S.filter((s) => s.control === 'private');

export default definePage({
  id: 'net-price-calculator', group: 'cost', order: 10, slug: 'net-price-calculator',
  nav: 'Net price by income', card: `All ${S.length} universities ranked by the price families at your income paid.`,
  title: 'Net Price Calculator 2026: What Families Pay at Your Income',
  description: `Net price calculator for 2026: enter your family income and rank ${S.length} US universities by what aided families in your band paid, from the College Scorecard.`,
  h1: 'Net price calculator: every university at your income',
  intro: `Type your family income: the ${S.length} universities line up by the average price that families in your band paid after grants, lowest first.`,
  resume: `The net price is what a year at college costs after grants and scholarships, before loans. Each university must post its own net price calculator, but each one asks for the same details again and shows one school at a time. This page does the reverse: you give one figure, your family income, and all ${S.length} universities are ranked by the average net price that first-year students on federal aid in your income band paid in ${K.meta.years.net}, as reported to the Department of Education and published in the College Scorecard. The bands are ${K.listOf(K.bands)}. In the $48,001 to $75,000 band the three lowest averages on file were at ${K.listOf(low2.map((s) => `${s.short} (${K.net(s.slug, 2)})`))}. At ${negative.length} universities the average for the lowest band was below zero, which means grants exceeded the cost of attendance.`,
  body: (h) => `
<h2>Why private universities often win at middle incomes</h2>
<p>Universities with large endowments meet the full demonstrated need of the students they admit with grants rather than loans, and several of them now waive tuition below a family income threshold. Their sticker price is high, but their average net price for middle incomes is often lower than that of a public university for a nonresident, and sometimes lower than the resident price. The median private net price on this site was ${h.usd(med(nn(priv.map((s) => s.netByIncome[2]))))} in the $48,001 to $75,000 band, and ${h.usd(med(nn(priv.map((s) => s.netByIncome[4]))))} above $110,000. Above that line, the order usually flips and the public resident price becomes the cheapest option.</p>
${h.miniNet('stanford')}
<h2>What the federal net price counts</h2>
<p>The figure covers first-time, full-time undergraduates who received federal aid (grants or loans) in the year, grouped by the family income on their FAFSA. It subtracts all grants and scholarships, federal, state and institutional, from the cost of attendance. It does not subtract loans or work-study. At public universities it covers in-state students only. Because the top band, $110,001 and up, mixes families earning $120,000 with families earning $600,000, its average is a poor guide for high incomes, where many families receive no need-based grant at all.</p>
<h2>From the ranking to your own price</h2>
<p>Once a few names stand out, open their pages: each shows the net price in all five bands, the newest sticker price published by the university and a link to its own calculator. That calculator asks about assets, home equity at some private schools, siblings in college and divorced parents, and returns a figure closer to the award letter. The ${h.a('compare-colleges', 'comparison tool')} then puts two or three of them side by side with their admit rates.</p>
<h2>Why ${h.meta.years.net}?</h2>
<p>Net price by income is reported more than a year after the academic year ends, so the June 2026 Scorecard release carries ${h.meta.years.net}. Prices have risen since, and several universities have made their aid more generous for 2025-26 or 2026-27. Where a university publishes a newer income threshold or promise, its page says so; the ranking itself stays on the same federal year for every school so that the comparison is fair.</p>
<h2>A note on aid that exceeds the cost</h2>
<p>At ${h.listOf(negative.slice(0, 4).map((s) => h.c(s.slug, s.short)))} the lowest-income average was negative: grants were larger than the cost of attendance, often because the budget includes a personal allowance and the grant covers it in full. The table shows such cases as $0, with the excess noted on the university's page.</p>
<h2>Income is not the only input</h2>
<p>Two families with the same income can face very different prices. Universities that use the CSS Profile in addition to the FAFSA count home equity, business assets and the income of a noncustodial parent, while many public universities look at the FAFSA alone. A family with a modest salary and large savings will usually pay more than the band average; a family with two children in college at once will usually pay less. Treat the ranking as a shortlist, then run each school's own calculator with your real figures.</p>`,
  faqs: [
    { q: 'What does net price mean in college costs?', a: 'Net price is the cost of attendance for one year minus all grants and scholarships, from the federal government, the state and the college. It is what the family and the student pay from savings, income or loans. Federal law requires every college that takes federal aid to post a calculator that estimates it for a given family.' },
    { q: 'Why is my net price higher than the average for my income?', a: 'The average mixes families with very different savings and household sizes. Schools that use the CSS Profile look at assets and home equity, and a second sibling in college can halve the expected contribution. If your assets are above typical levels, or your income sits at the top of its band, your price will be above the federal average.' },
    { q: 'Which colleges are cheapest for families earning under $75,000?', a: `On the federal ${K.meta.years.net} figures, the lowest average net prices in the $48,001 to $75,000 band on this site were at ${K.listOf(low2.map((s) => `${s.name} (${K.net(s.slug, 2)})`))}. Admission to most of them is very selective, so pair them with public universities whose resident price is close.` },
    { q: 'Do net price figures include merit scholarships?', a: 'Yes. All grants and scholarships received by the students counted are subtracted, need-based or merit-based. In the high-income band the average therefore reflects merit awards at schools that give them, and that is why some private universities show a lower average there than their full sticker price would suggest.' },
  ],
  tool: 'net-price',
  related: ['compare-colleges', 'cost-of-attendance', 'college-tuition', 'college:stanford', 'college:mit'],
  sources: ['scorecard', 'ipeds_netprice', 'npc_rule', 'npc_center'],
});
