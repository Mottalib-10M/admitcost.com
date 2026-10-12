/**
 * Net price by family income (College Scorecard, from IPEDS): the average price paid, after grants and
 * scholarships, by first-time full-time students who received federal aid, in five income bands.
 * For public universities the federal figure covers in-state students only.
 */
export type Band = [number, number | null];

export function bandIndex(income: number, bands: Band[]): number {
  const x = Math.max(0, Math.round(income));
  const i = bands.findIndex(([lo, hi]) => x >= lo && (hi === null || x <= hi));
  return i < 0 ? bands.length - 1 : i;
}

export interface NetInput { netByIncome: Array<number | null>; control: 'public' | 'private'; tuitionIn: number | null; tuitionOut: number | null }
export interface NetResult { band: number; net: number | null; shown: number | null; aidAboveCost: number; outOfStateGap: number; total: number | null }

/**
 * `resident` matters for public universities only: a nonresident adds the published gap between
 * out-of-state and in-state tuition (an upper figure: some states give nonresident scholarships).
 */
export function netPrice(s: NetInput, income: number, bands: Band[], resident = true): NetResult {
  const band = bandIndex(income, bands);
  const net = s.netByIncome[band] ?? null;
  const shown = net === null ? null : Math.max(0, net);
  const aidAboveCost = net !== null && net < 0 ? -net : 0;
  const gap = s.control === 'public' && !resident && s.tuitionIn !== null && s.tuitionOut !== null ? Math.max(0, s.tuitionOut - s.tuitionIn) : 0;
  return { band, net, shown, aidAboveCost, outOfStateGap: gap, total: shown === null ? null : shown + gap };
}

/** Share of the sticker price a family in that band actually paid (0 to 1). */
export const paidShare = (net: number | null, sticker: number | null) => (net === null || !sticker ? null : Math.max(0, net) / sticker);
