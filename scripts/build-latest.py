#!/usr/bin/env python3
"""Copies research/schools/<slug>.json (figures read in each university's own documents) into
src/data/latest/, after checks: known slug, counts are integers with admitted < applicants, every URL in
https, no em dash. A file that fails is reported and NOT copied (the page then falls back to the federal
College Scorecard figures, which are dated on the page). Usage: python3 scripts/build-latest.py"""
import json, os, glob, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLUGS = {l.split('\t')[1] for l in open(os.path.join(ROOT, 'research/schools.tsv')) if l.strip()}
OUT = os.path.join(ROOT, 'src/data/latest'); os.makedirs(OUT, exist_ok=True)
bad = 0; good = 0
def urls(x):
    if isinstance(x, dict):
        for k, v in x.items():
            if k == 'url' and v: yield v
            else: yield from urls(v)
    elif isinstance(x, list):
        for v in x: yield from urls(v)
for f in sorted(glob.glob(os.path.join(ROOT, 'research/schools/*.json'))):
    slug = os.path.basename(f)[:-5]
    err = []
    try: d = json.load(open(f))
    except Exception as e: print(f'{slug}: invalid JSON {e}'); bad += 1; continue
    if d.get('slug') != slug or slug not in SLUGS: err.append('slug')
    for key in ('cycle', 'cycleNewer'):
        c = d.get(key)
        if c:
            a, b = c.get('applicants'), c.get('admitted')
            if a is not None or b is not None:
                if not (isinstance(a, int) and isinstance(b, int) and 0 < b < a): err.append(f'{key} counts')
            if not c.get('url'): err.append(f'{key} url')
    for u in urls(d):
        if not str(u).startswith('https://') and not str(u).startswith('http://'): err.append(f'url {u}')
    if '—' in json.dumps(d, ensure_ascii=False): err.append('em dash')
    if err: print(f'{slug}: NOT copied ({", ".join(err)})'); bad += 1; continue
    json.dump(d, open(os.path.join(OUT, f'{slug}.json'), 'w'), indent=1, ensure_ascii=False); good += 1
print(f'{good} copied, {bad} rejected, {len(SLUGS) - good} schools on Scorecard figures only')
