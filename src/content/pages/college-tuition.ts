import { definePage } from '../../lib/page-types';
import { KIT as K } from '../../lib/kit';

const S = K.schools;
const pub = S.filter((s) => s.control === 'public' && s.tuitionIn && s.tuitionOut);
const priv = S.filter((s) => s.control === 'private' && s.tuitionIn);
const med = (xs: number[]) => { const v = [...xs].sort((a, b) => a - b); return v[Math.floor(v.length / 2)]; };
const gaps = pub.map((s) => ({ s, g: s.tuitionOut! - s.tuitionIn! })).sort((a, b) => b.g - a.g);
const topPriv = [...priv].sort((a, b) => b.tuitionIn! - a.tuitionIn!).slice(0, 3);
const Y = K.meta.years.tuition;

export default definePage({
  id: 'college-tuition', group: 'cost', order: 20, slug: 'college-tuition',
  nav: 'College tuition', card: 'In-state and out-of-state tuition and the newest sticker price of each university.',
  title: `College Tuition 2026: In-State vs Out-of-State, ${S.length} Schools`,
  description: `College tuition and fees for ${S.length} universities in 2026: in-state and out-of-state rates, the nonresident gap and each school's newest cost of attendance.`,
  h1: 'College tuition: in-state, out-of-state and the full sticker price',
  intro: `In ${Y} the median out-of-state premium at the public universities on this site was ${K.usd(med(gaps.map((x) => x.g)))} a year; sort the table to see tuition and sticker price school by school.`,
  resume: `Tuition and fees are only part of the cost of college, and for public universities they depend first on residency. In ${Y}, the year of the federal College Scorecard figures, the median tuition and fees at the ${pub.length} public universities on this site was ${K.usd(med(pub.map((s) => s.tuitionIn!)))} for residents and ${K.usd(med(pub.map((s) => s.tuitionOut!)))} for nonresidents, while the ${priv.length} private universities had a median of ${K.usd(med(priv.map((s) => s.tuitionIn!)))} for everyone. The largest out-of-state premiums were at ${K.listOf(gaps.slice(0, 3).map((x) => `${x.s.short} (${K.usd(x.g)})`))}. The highest private tuition figures belonged to ${K.listOf(topPriv.map((s) => `${s.short} (${K.usd(s.tuitionIn!)})`))}. The table also shows each school's newest published cost of attendance, which adds housing, food, books and personal costs, and is usually a year or two newer than the federal tuition.`,
  body: (h) => `
<h2>Tuition, fees and the sticker price</h2>
<p>Tuition pays for instruction; mandatory fees cover services such as health, recreation, transit and technology, and are charged to every full-time student. Together they make the "tuition and fees" line that federal data and most rankings quote. The sticker price, or cost of attendance, adds housing and food, books and supplies, transportation and personal expenses. At a residential private university those extra lines add twenty thousand dollars or more a year, so comparing tuition alone understates the bill. The ${h.a('cost-of-attendance', 'cost of attendance page')} splits each published budget into its lines.</p>
${h.miniGap('umich')}
<h2>What residency means at a public university</h2>
<p>States fund their public universities to educate their own residents, and charge nonresidents closer to the full cost. To qualify as a resident a student generally needs a parent domiciled in the state for at least a year before enrollment, with proof such as tax returns and a driver's license; moving to the state for college rarely qualifies. Some regional agreements reduce the premium, such as the Western Undergraduate Exchange in the West or the Academic Common Market in the South, but each covers only some programs at some campuses, and the flagships on this site often exclude their most demanded majors.</p>
<h2>Why the federal tuition year lags</h2>
<p>The Scorecard figures for tuition describe ${Y}. Most universities have raised tuition since, often by 3% to 5% a year, and some have frozen it for residents or guaranteed a fixed rate for four years. Each university page gives the newest budget the school published, with its year, and says when a guarantee exists. When the published budget is newer than ${Y}, use it for planning and keep the federal figure for comparisons between schools.</p>
<h2>Tuition is not the price</h2>
<p>For most students at private universities the tuition figure is never paid in full: grants reduce it, sometimes to zero below an income threshold. The real comparison is the net price, on the ${h.a('net-price-calculator', 'net price ranking')} for your income. At public universities, resident tuition is closer to what families pay, because institutional grants are smaller and state grants such as the Cal Grant or the Texas Grant are reserved for residents with need.</p>
<h2>Engineering, business and nursing cost more at some schools</h2>
<p>Several public universities charge a differential tuition for programs that cost more to teach, most often engineering, business, nursing and computer science, and a few private universities do the same for specific schools. The federal tuition figure is the general undergraduate rate and does not show these surcharges, which can add several thousand dollars a year from the second or third year onward. Look for the words "differential tuition" or "program fee" on the bursar's page of the university, and add it to the budget before comparing offers. It matters most for nonresidents, whose base rate is already the highest.</p>`,
  faqs: [
    { q: 'How much more do out-of-state students pay at public universities?', a: `In ${Y} the median gap between out-of-state and in-state tuition and fees at the public universities on this site was ${K.usd(med(gaps.map((x) => x.g)))} a year, and the largest gap on file was ${K.usd(gaps[0].g)} at ${gaps[0].s.name}. Housing and food cost the same for both groups, so the gap is the whole difference.` },
    { q: 'Can I get in-state tuition after my first year?', a: 'Rarely. Most states presume that a student who moved for college is in the state for education, not domicile, and keep the nonresident rate for every year of the degree unless the student proves financial independence and a year or more of residence for other reasons. Each university’s registrar publishes its residency rules and appeal process.' },
    { q: 'Why does the federal tuition differ from the university website?', a: `The College Scorecard reports tuition and fees for ${Y}, the latest year in its June 2026 release, while universities post the coming year’s rates each spring. The two can also differ because some schools charge more for engineering, business or nursing, which the federal figure does not separate.` },
    { q: 'Is tuition the same for all four years?', a: 'At most universities tuition rises every year, so a four-year plan should assume increases. Some public universities guarantee the first-year rate for four years to each entering class, and a few private universities freeze tuition for a cohort. The university pages on this site mention such guarantees when the school publishes one.' },
  ],
  tool: 'tuition',
  related: ['net-price-calculator', 'cost-of-attendance', 'college:umich', 'college:ucla', 'college:uva'],
  sources: ['scorecard', 'scorecard_doc', 'ipeds', 'studentaid_coa'],
});
