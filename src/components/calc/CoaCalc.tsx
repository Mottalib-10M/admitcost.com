/** What the cost of attendance is made of at one university, and what is left after the grants a family expects. */
import { useEffect, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import Toggle from '../ui/Toggle';
import { Card, Result, Rows, Note, Actions, usd } from './parts';
import { readParams, num as pnum, str, updateURL } from '../../lib/url-state';

export interface CoaSchool { slug: string; name: string; control: 'public' | 'private'; year: string; lines: Array<[string, number]>; total: number; outLines?: Array<[string, number]>; outTotal?: number; source: string }
interface Props { schools: CoaSchool[]; school: string; methodHref: string }
export default function CoaCalc({ schools, school, methodHref }: Props) {
  const [slug, setSlug] = useState(school);
  const [grant, setGrant] = useState(20000);
  const [res, setRes] = useState('in');
  useEffect(() => { const u = readParams(window.location.search); const s = str(u, 'u', school); if (schools.some((x) => x.slug === s)) setSlug(s); setGrant(pnum(u, 'g', 20000)); setRes(str(u, 'r', 'in')); }, []);
  useEffect(() => { updateURL({ u: slug, g: grant, r: res === 'out' ? 'out' : undefined }); }, [slug, grant, res]);
  const s = schools.find((x) => x.slug === slug) ?? schools[0];
  const out = s.control === 'public' && res === 'out' && s.outLines && s.outTotal;
  const lines = out ? s.outLines! : s.lines;
  const total = out ? s.outTotal! : s.total;
  const left = Math.max(0, total - grant);
  const form = (
    <>
      <SelectField id="coa-u" label="University" value={slug} onChange={setSlug} options={schools.map((x) => ({ value: x.slug, label: x.name }))} className="sm:col-span-2" />
      <NumberField id="coa-g" label="Grants and scholarships expected" value={grant} onChange={setGrant} unit="$" max={200000} help="From the award letter or the school’s net price calculator" />
      {s.control === 'public' ? <Toggle id="coa-r" label="State resident?" value={res} onChange={setRes} options={[{ value: 'in', label: 'Yes' }, { value: 'out', label: 'No' }]} /> : null}
    </>
  );
  return (
    <Card form={form}>
      <Result label={`Left to pay for one year at ${s.name}`} figure={usd(left)} sub={`Cost of attendance ${s.year}: ${usd(total)}`}>
        <Rows rows={[...lines.map(([l, v]) => [l, usd(v)] as [string, string]), ['Total cost of attendance', usd(total), true], ['Minus your grants', `−${usd(Math.min(grant, total))}`]]} />
        <Note methodHref={methodHref}>{s.source}. Loans and work-study are not grants: they are ways to pay what is left.</Note>
        <Actions />
      </Result>
    </Card>
  );
}
