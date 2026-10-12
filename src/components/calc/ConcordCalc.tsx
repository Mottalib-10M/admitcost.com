/** ACT to SAT and SAT to ACT, on the official 2018 concordance tables. */
import { useEffect, useState } from 'react';
import NumberField from '../ui/NumberField';
import Toggle from '../ui/Toggle';
import { Card, Result, Rows, Note, Actions, num } from './parts';
import { actToSat, satToAct, type ActToSat, type SatToAct } from '../../lib/engine/concord';
import { readParams, num as pnum, str, updateURL } from '../../lib/url-state';

interface Props { a2s: ActToSat; s2a: SatToAct; methodHref: string }
export default function ConcordCalc({ a2s, s2a, methodHref }: Props) {
  const [dir, setDir] = useState('act');
  const [act, setAct] = useState(28);
  const [sat, setSat] = useState(1300);
  useEffect(() => { const u = readParams(window.location.search); setDir(str(u, 'd', 'act')); setAct(pnum(u, 'act', 28)); setSat(pnum(u, 'sat', 1300)); }, []);
  useEffect(() => { updateURL({ d: dir, act: dir === 'act' ? act : undefined, sat: dir === 'sat' ? sat : undefined }); }, [dir, act, sat]);
  const r = actToSat(act, a2s);
  const back = satToAct(sat, s2a);
  const form = (
    <>
      <Toggle id="cc-d" label="Convert from" value={dir} onChange={setDir} options={[{ value: 'act', label: 'ACT' }, { value: 'sat', label: 'SAT' }]} />
      {dir === 'act'
        ? <NumberField id="cc-act" label="ACT composite" value={act} onChange={setAct} min={1} max={36} help="Whole number, 9 to 36 in the table" />
        : <NumberField id="cc-sat" label="SAT total" value={sat} onChange={setSat} min={400} max={1600} help="Rounded to the nearest 10" />}
    </>
  );
  return (
    <Card form={form}>
      {dir === 'act' ? (
        <Result label={`SAT equivalent of ACT ${num(Math.round(act))}`} figure={r ? num(r.point) : 'below the table'}>
          <Rows rows={r ? [['SAT range for that ACT score', `${num(r.low)} to ${num(r.high)}`], ['Single score to compare', num(r.point)]] : [['Table range', 'ACT 9 to 36']]} />
          <Note methodHref={methodHref}>2018 ACT/SAT Concordance Tables, Table A2 (ACT Composite to SAT Total).</Note>
          <Actions />
        </Result>
      ) : (
        <Result label={`ACT equivalent of SAT ${num(Math.min(1600, Math.round(sat / 10) * 10))}`} figure={back === null ? 'below the table' : String(back)}>
          <Rows rows={back === null ? [['Table range', 'SAT 590 to 1600']] : [['SAT used (nearest 10)', num(Math.min(1600, Math.round(sat / 10) * 10))], ['ACT composite', String(back)]]} />
          <Note methodHref={methodHref}>2018 ACT/SAT Concordance Tables, Table A1 (SAT Total to ACT Composite).</Note>
          <Actions />
        </Result>
      )}
    </Card>
  );
}
