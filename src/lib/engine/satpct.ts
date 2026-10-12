/**
 * Approximate share of SAT takers scoring below a total, by linear interpolation between the points the
 * College Board publishes for the class of 2026 (quartiles and score-band counts). An estimate, labelled so.
 */
export interface SatNational { takers: number; p25: number; p50: number; p75: number; perfect: number; bands: Array<[string, number]> }

export function satCurve(s: SatNational): Array<[number, number]> {
  const pts = new Map<number, number>([[400, 0], [s.p25, 0.25], [s.p50, 0.5], [s.p75, 0.75]]);
  // bands are listed from the top: "1400-1600", "1200-1390", ... ; the share at or above each lower bound
  let above = 0;
  for (const [range, n] of s.bands) {
    above += n;
    const lo = Number(range.split('-')[0]);
    if (lo > 400) pts.set(lo, 1 - above / s.takers);
  }
  pts.set(1590, 1 - s.perfect / s.takers);
  return [...pts.entries()].sort((a, b) => a[0] - b[0]);
}

export function satBelow(score: number, curve: Array<[number, number]>): number {
  const x = Math.min(1600, Math.max(400, score));
  if (x >= 1600) return curve[curve.length - 1][1];
  for (let i = 1; i < curve.length; i++) {
    const [x0, y0] = curve[i - 1];
    const [x1, y1] = curve[i];
    if (x <= x1) return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  }
  return curve[curve.length - 1][1];
}
