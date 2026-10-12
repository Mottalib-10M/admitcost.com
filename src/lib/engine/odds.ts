/**
 * Where a score sits among a school's enrolled first-years, and the site's reach / target / likely label.
 * This is NOT a prediction model: the published admit rate is the only odds figure; the score position is
 * an approximation from the 25th and 75th percentiles (normal curve), and the label follows a fixed rule
 * written on the method page (thresholds in params-2026.json > odds).
 */
export interface OddsRule { reachBelow: number; likelyAbove: number; likelyMinPct: number; targetMinPct: number; iqrToSd: number }
export type Label = 'reach' | 'target' | 'likely';

/** Standard normal CDF (Abramowitz and Stegun 26.2.17, error under 1e-7). */
export function phi(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp((-z * z) / 2);
  const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z >= 0 ? 1 - p : p;
}

/** Share of enrolled students scoring below `score`, from the 25th and 75th percentiles (0 to 1). */
export function position(score: number, p25: number, p75: number, iqrToSd = 1.349): number | null {
  if (![score, p25, p75].every(Number.isFinite) || p75 <= p25) return null;
  const mid = (p25 + p75) / 2;
  const sd = (p75 - p25) / iqrToSd;
  return Math.min(0.995, Math.max(0.005, phi((score - mid) / sd)));
}

/** The site's label. `pct` is null when no score is used (test-free school, or the student does not send one). */
export function label(admRate: number, pct: number | null, r: OddsRule): Label {
  if (admRate < r.reachBelow) return 'reach';
  if (pct !== null && pct < r.targetMinPct) return 'reach';
  if (admRate >= r.likelyAbove && (pct === null || pct >= r.likelyMinPct)) return 'likely';
  return 'target';
}

/** "1 in 28" style odds: applicants per admitted student, rounded. */
export const oneIn = (admRate: number) => (admRate > 0 ? Math.max(1, Math.round(1 / admRate)) : null);
