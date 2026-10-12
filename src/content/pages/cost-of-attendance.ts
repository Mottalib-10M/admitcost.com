import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';
import { COAS } from '../../lib/coa';

const C = COAS();
const newer = C.filter((c) => c.year === '2026-27');
const top = [...C].sort((a, b) => b.total - a.total).slice(0, 3);
const med = (xs: number[]) => { const v = [...xs].sort((a, b) => a - b); return v[Math.floor(v.length / 2)]; };
const housing = C.map((c) => c.lines.find(([l]) => /Housing/.test(l))?.[1]).filter((x): x is number => typeof x === 'number');
const H = K.s('harvard').latest!.cost!;

export default definePage({
  id: 'cost-of-attendance', group: 'cost', order: 30, slug: 'cost-of-attendance',
  nav: 'Cost of attendance', card: 'Each university budget split into tuition, fees, housing, books and personal costs.',
  title: 'Cost of Attendance 2026: Budget Lines for 110 Universities',
  description: `Cost of attendance 2026 for ${C.length} US universities, split into tuition, fees, housing and food, books and personal costs, and what is left after your grants.`,
  h1: 'Cost of attendance, line by line',
  intro: `Pick a university and type the grants you expect: the budget splits into its lines and the amount left for the year appears.`,
  resume: `The cost of attendance is the budget a university sets for one year of study: tuition, mandatory fees, housing and food, books and supplies, transportation and personal expenses. It is the sticker price, and it is also the ceiling of all financial aid, since grants and loans together cannot exceed it. The tool shows each university's newest published budget, which is the ${newer.length > 0 ? '2026-27' : '2025-26'} budget for ${newer.length} of the ${C.length} schools, and the federal components of ${K.meta.years.tuition} for the others, each labelled with its year. The three highest totals on file are at ${K.listOf(top.map((c) => `${c.name} (${K.usd(c.total)}, ${c.year})`))}. Housing and food alone have a median of ${K.usd(med(housing))} across these budgets. Type the grants in an award letter to see what remains for the family, student work and loans.`,
  body: (h) => `
<h2>What the budget includes, and what it leaves out</h2>
<p>Federal rules define the cost of attendance for aid purposes: tuition and fees, an allowance for housing and food, books, supplies and equipment, transportation, and miscellaneous personal costs, plus some specific items such as a computer or study abroad. Universities set the allowances themselves, so a "personal" line can differ by several thousand dollars between two schools in the same city. Health insurance is a frequent trap: many universities require it and bill it unless the student shows family coverage, and some leave it out of the published total. At Harvard, for example, the ${H.year} budget totals ${h.usd(H.total!)} before a travel allowance, and the required insurance comes on top for students without family coverage.</p>
${h.miniGrant('harvard')}
<h2>Billed and unbilled costs</h2>
<p>Only part of the budget appears on the university's bill: tuition, fees and, for students in university housing, rent and the meal plan. Books, transportation and personal costs are estimates of what students spend elsewhere. This matters when comparing aid offers: a grant that covers "full tuition" can still leave housing and food to pay, which at a residential campus is often a third of the budget or more. The ${h.a('net-price-calculator', 'net price ranking')} shows what families actually paid after all grants.</p>
<h2>Living off campus</h2>
<p>Most universities publish a second budget for students living off campus, with a rent and food allowance based on local prices, and a third one for students living with their parents. Living at home removes most of the housing line but rarely brings the cost to tuition alone. Aid offices build the award on the budget of the student's actual housing choice.</p>
<h2>Using the budget with an award letter</h2>
<p>Subtract only grants and scholarships from the total: the result is the real price for the year. Federal student loans, parent PLUS loans and work-study then pay part of that price, but they are not discounts. If the remainder is beyond reach, ask the aid office whether a professional judgment review is possible for a change in income, a family medical cost or a second child in college; universities can adjust the expected contribution in such cases.</p>
<h2>Four years, not one</h2>
<p>Budgets rise each year with tuition and housing rates. A family planning four years should multiply by more than four. The ${h.a('compare-colleges', 'comparison tool')} and the four-year estimate on each university page let you choose the yearly increase you assume.</p>
<h2>Why two universities in the same city publish different budgets</h2>
<p>Each aid office estimates the cost of living its own way: some use the price of a double room and the most popular meal plan, others average the rents their students report, and the personal allowance can be modest or generous. Two campuses a few miles apart can therefore differ by thousands of dollars on the same lines. Compare tuition and fees as published, and look closely at the housing line, the one most families can actually change.</p>`,
  faqs: [
    { q: 'What is included in a college’s cost of attendance?', a: 'Tuition and mandatory fees, an allowance for housing and food, books and supplies, transportation and personal expenses, as defined by federal financial aid rules. Some universities add a computer or loan fees, and many leave required health insurance outside the published total. The cost of attendance is the maximum aid a student can receive in a year.' },
    { q: 'Is the cost of attendance what I will actually pay?', a: 'Rarely. It is the sticker price before grants and scholarships. Most students at private universities with large endowments pay much less, while students without need-based aid at a public university out of state can pay the full amount. Subtract the grants in your award letter to find your own figure.' },
    { q: 'Why is the cost of attendance higher than the tuition?', a: `Because housing, food, books, transport and personal costs are added to tuition and fees. Across the budgets on this site, housing and food alone have a median of ${K.usd(med(housing))} a year, so a student living on campus pays far more than the tuition line suggests, even at a low-tuition public university.` },
    { q: 'Can the cost of attendance be raised for my situation?', a: 'Yes, within limits. The financial aid office can raise the budget for documented costs such as a required laptop, dependent care or disability-related expenses, which can open room for more aid or loans. Ask for it in writing with receipts; the decision belongs to the aid administrator under federal professional judgment rules.' },
  ],
  tool: 'coa',
  related: ['net-price-calculator', 'college-tuition', 'compare-colleges', 'college:harvard', 'college:nyu'],
  sources: ['studentaid_coa', 'scorecard', 'ipeds', 'npc_rule'],
});
