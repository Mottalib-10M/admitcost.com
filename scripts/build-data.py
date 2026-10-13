#!/usr/bin/env python3
"""Rebuilds src/data/scorecard.json from the College Scorecard "Most Recent Institution" file.

Source: U.S. Department of Education, College Scorecard, file released June 10, 2026
(https://collegescorecard.ed.gov/data/), derived from IPEDS (public domain, 17 U.S.C. 105) and
published under the data.gov CC BY attribution terms. Years of each field come from the
"Most_Recent_Inst_Cohort_Map" tab of the data dictionary of the same release:
  admissions, SAT, ACT, enrollment ......... fall 2024 (IPEDS 2024-25)
  tuition and fees ......................... academic year 2024-25
  cost of attendance, net price ............ academic year 2023-24
  graduation rate (150 %) .................. fall 2018 cohort
  retention ................................ fall 2023 cohort
  median debt of completers ................ FY2020-FY2021 pooled
  median earnings 10 years after entry ..... AY2009-10 and 2010-11 cohorts, CY2020-21, 2022 dollars

Usage: python3 scripts/build-data.py   (download the zip into .cache-raw/ first)
"""
import csv, json, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, '.cache-raw', 'Most-Recent-Cohorts-Institution.csv')
LIST = os.path.join(ROOT, 'research', 'schools.tsv')
OUT = os.path.join(ROOT, 'src', 'data', 'scorecard.json')

def num(v, kind=float):
    if v in (None, '', 'NULL', 'PrivacySuppressed', 'NA'): return None
    try:
        x = float(v)
        return int(round(x)) if kind is int else round(x, 4)
    except ValueError:
        return None

want = {}
for line in open(LIST):
    if line.strip():
        uid, slug, short = line.rstrip('\n').split('\t')
        want[uid] = (slug, short)
rows = {}
for x in csv.DictReader(open(RAW, encoding='utf-8-sig')):
    if x['UNITID'] in want:
        rows[x['UNITID']] = x
missing = set(want) - set(rows)
if missing: sys.exit(f'Missing UNITID in the Scorecard file: {sorted(missing)}')
DISPLAY = {
 'Columbia University in the City of New York': 'Columbia University', 'Washington University in St Louis': 'Washington University in St. Louis',
 'Tulane University of Louisiana': 'Tulane University', 'Texas A&M University-College Station': 'Texas A&M University',
 'University of Virginia-Main Campus': 'University of Virginia', 'Georgia Institute of Technology-Main Campus': 'Georgia Institute of Technology',
 'Ohio State University-Main Campus': 'The Ohio State University', 'Pennsylvania State University-Main Campus': 'Penn State University Park',
 'University of Washington-Seattle Campus': 'University of Washington', 'Virginia Polytechnic Institute and State University': 'Virginia Tech',
 'University of South Carolina-Columbia': 'University of South Carolina', 'Louisiana State University and Agricultural & Mechanical College': 'Louisiana State University',
 'The University of Tennessee-Knoxville': 'University of Tennessee, Knoxville', 'Arizona State University Campus Immersion': 'Arizona State University',
 'University of Minnesota-Twin Cities': 'University of Minnesota Twin Cities', 'Indiana University-Bloomington': 'Indiana University Bloomington',
 'Purdue University-Main Campus': 'Purdue University', 'University of Missouri-Columbia': 'University of Missouri', 'University of Oklahoma-Norman Campus': 'University of Oklahoma',
 'California Polytechnic State University-San Luis Obispo': 'Cal Poly San Luis Obispo', 'California State University-Long Beach': 'Cal State Long Beach',
 'University of Pittsburgh-Pittsburgh Campus': 'University of Pittsburgh', 'North Carolina State University at Raleigh': 'NC State University',
 'University of Michigan-Ann Arbor': 'University of Michigan', 'University of Wisconsin-Madison': 'University of Wisconsin-Madison',
 'University of Massachusetts-Amherst': 'UMass Amherst', 'Rutgers University-New Brunswick': 'Rutgers University-New Brunswick',
 'University of Maryland-College Park': 'University of Maryland', 'University of Illinois Urbana-Champaign': 'University of Illinois Urbana-Champaign',
}
def display(n):
    if n in DISPLAY: return DISPLAY[n]
    if n.startswith('University of California-'): return n.replace('-', ', ')
    return n
# Net price calculator links of the Scorecard that answer 404 (checked 2026-10-13): fixed or dropped.
NPC_FIX = {'vanderbilt': 'https://www.vanderbilt.edu/financialaid/net-price-calculator/', 'temple': '', 'alabama': ''}
out = []
for uid, (slug, short) in want.items():
    x = rows[uid]
    pub = x['CONTROL'] == '1'
    sfx = '_PUB' if pub else '_PRIV'
    out.append({
        'unitid': int(uid), 'slug': slug, 'short': short, 'name': display(x['INSTNM']), 'ipedsName': x['INSTNM'], 'city': x['CITY'], 'state': x['STABBR'],
        'control': 'public' if pub else 'private', 'url': x['INSTURL'], 'npcUrl': NPC_FIX.get(slug, x['NPCURL']),
        'admRate': num(x['ADM_RATE']), 'testPolicy2024': num(x['ADMCON7'], int),
        'satEbrw': [num(x['SATVR25'], int), num(x['SATVR75'], int)], 'satMath': [num(x['SATMT25'], int), num(x['SATMT75'], int)],
        'act': [num(x['ACTCM25'], int), num(x['ACTCM75'], int)], 'satAvg': num(x['SAT_AVG'], int),
        'undergrads': num(x['UGDS'], int),
        'tuitionIn': num(x['TUITIONFEE_IN'], int), 'tuitionOut': num(x['TUITIONFEE_OUT'], int),
        'coa': num(x['COSTT4_A'], int), 'roomBoard': num(x['ROOMBOARD_ON'], int), 'books': num(x['BOOKSUPPLY'], int), 'other': num(x['OTHEREXPENSE_ON'], int),
        'netAvg': num(x['NPT4' + sfx], int),
        'netByIncome': [num(x[f'NPT4{i}{sfx}'], int) for i in range(1, 6)],
        'pell': num(x['PCTPELL']), 'grad6': num(x['C150_4']), 'retention': num(x['RET_FT4']),
        'debt': num(x['GRAD_DEBT_MDN'], int), 'earn10': num(x['MD_EARN_WNE_P10'], int),
    })
meta = {
    'source': 'U.S. Department of Education, College Scorecard, Most Recent Institution-Level Data',
    'released': '2026-06-10', 'url': 'https://collegescorecard.ed.gov/data/',
    'years': {'admissions': 'fall 2024', 'tuition': '2024-25', 'coa': '2023-24', 'net': '2023-24', 'grad': 'fall 2018 entering cohort', 'retention': 'fall 2023 entering cohort', 'debt': 'students who finished in 2019-20 and 2020-21', 'earnings': 'measured 2020-2021, 10 years after entry, 2022 dollars'},
    'incomeBands': ['$0-$30,000', '$30,001-$48,000', '$48,001-$75,000', '$75,001-$110,000', '$110,001 and up'],
}
json.dump({'meta': meta, 'schools': out}, open(OUT, 'w'), indent=1)
print(f'{len(out)} schools -> {OUT}')
