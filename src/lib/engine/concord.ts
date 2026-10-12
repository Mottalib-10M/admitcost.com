/**
 * ACT <-> SAT, from the 2018 ACT/SAT Concordance Tables (ACT and College Board), still the official tables.
 * Pure functions: the tables arrive as arguments (params-2026.json > concordance), so tests and the
 * browser use the same code.
 */
export type SatToAct = Array<[number, number]>; // [SAT total, ACT composite], SAT by steps of 10
export type ActToSat = Array<[number, number, number, number]>; // [ACT, SAT point, SAT low, SAT high]

/** ACT composite matching an SAT total (rounded to the nearest 10 first). Null under the table (below 590). */
export function satToAct(sat: number, table: SatToAct): number | null {
  if (!Number.isFinite(sat)) return null;
  const s = Math.min(1600, Math.round(sat / 10) * 10);
  const row = table.find(([x]) => x === s);
  return row ? row[1] : null;
}

/** SAT point and range matching an ACT composite (whole number, 9 to 36). Null outside the table. */
export function actToSat(act: number, table: ActToSat): { point: number; low: number; high: number } | null {
  if (!Number.isFinite(act)) return null;
  const a = Math.min(36, Math.round(act));
  const row = table.find(([x]) => x === a);
  return row ? { point: row[1], low: row[2], high: row[3] } : null;
}
