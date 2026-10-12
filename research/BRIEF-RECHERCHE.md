# Research brief: one verified fact file per university (us-college-cost, 2026-10-12)

You collect, for each university of your batch, the latest official admissions and cost figures, so that a
page can be written later. The site compares US universities on admission odds and real cost. Today is
2026-10-12. The publisher is the company Radif Partners. You work alone and do not ask questions.

## What already exists (do not redo)

`src/data/scorecard.json` holds, for each school, the federal College Scorecard figures (release of
2026-06-10): admit rate fall 2024, SAT/ACT 25th-75th percentiles fall 2024, tuition 2024-25, cost of
attendance and net price by income 2023-24, graduation rate, debt, earnings. Read your schools there first.
Your job is what is **newer** than that, plus the facts that make each school different.

## Sources: official only

Allowed: the university's own Common Data Set (CDS), its admissions office, its financial aid / bursar /
student accounts office, its official news office or institutional research office, the state system office
(University of California Office of the President, CSU, SUNY, a state board). Student newspapers (The Crimson,
Yale Daily News…) ONLY as a pointer to find the official document, never as the cited source, unless the
university itself published nothing (then say so in `notes`, and cite the newspaper with that warning).
Forbidden as sources: blogs, consultants, prep companies, Niche, US News, PrepScholar, CollegeVine, Wikipedia.

Tools: `curl -sL -A 'Mozilla/5.0'`, WebFetch, WebSearch (if its quota is exhausted:
`curl -s 'https://html.duckduckgo.com/html/?q=<query>&kl=us-en'` and read the `.result__url` links).
PDFs: download into `/Users/mottalib/Documents/GitHub/a-publier/Mottalib-10M/us-college-cost/.cache-raw/cds/`
and read them with `python3 -c "from pypdf import PdfReader; ..."` (pypdf is installed). Many CDS are also
published as .xlsx (openpyxl is installed) or HTML pages.

## What to collect, per school

1. **Latest admissions cycle** = fall 2025 entering class (class of 2029), from CDS 2025-2026 section C1
   (total first-year applicants, admitted, enrolled). If the 2025-26 CDS is not out, take the university's
   official fall 2025 class profile; if neither exists, fall back to CDS 2024-2025 and say so. Record the
   exact numbers, never a rounded rate alone. If the school has also published its fall 2026 (class of 2030)
   numbers officially, record them too, as `cycleNewer`.
2. **Test scores of that cycle**: CDS C9 (SAT composite or EBRW + Math 25th/50th/75th, ACT composite
   25/50/75, % submitting SAT and ACT).
3. **Testing policy for students applying now (2026-27 cycle, fall 2027 entry)**: required / optional /
   blind (test-free) / other, with the admissions office page that says it. Note the date the policy took
   effect if the page gives it (for example "required again from the class entering fall 2026").
4. **Average high-school GPA** of enrolled first-years if the CDS (C12) gives it, with % submitting.
5. **Cost for the newest academic year published** (2026-27 if out, else 2025-26): tuition, mandatory fees,
   housing and food (on campus), books, personal/transport if listed, and the total cost of attendance, as
   published by the financial aid or bursar office. For public universities: in-state AND out-of-state.
   Write down exactly what the total includes.
6. **Aid promise** if the school publishes one (for example "families earning under $X pay no tuition", "meets
   100 % of demonstrated need", "no loans", "need-blind for US citizens"), with the year it applies.
7. **Application plans** (CDS C21/C22 or admissions site): Early Decision (I/II), Early Action, Restrictive
   Early Action, Regular Decision, with the November/January deadlines for the 2026-27 cycle if published.
8. **3 to 6 distinctive facts** that change how a student should read the odds or the price at THIS school,
   each with its official URL: admission by college or major (Cornell's colleges, UIUC majors, Texas A&M
   automatic admission rule, UT Austin top-6 % rule…), in-state/out-of-state split of admits, a famous
   residency rule, a big gap between ED and RD admit rates if the school publishes it, a tuition guarantee
   or freeze, a co-op program that changes the cost (Northeastern), a free-tuition program for residents
   (Texas, UC Blue and Gold, Michigan Go Blue Guarantee…), honors college, etc. Facts, not opinions.

## Output: one JSON file per school

Write `/Users/mottalib/Documents/GitHub/a-publier/Mottalib-10M/us-college-cost/research/schools/<slug>.json`:

```json
{
  "slug": "harvard",
  "cycle": { "label": "Fall 2025 entering class (Class of 2029)", "applicants": 47893, "admitted": 2003, "enrolled": 1650,
             "doc": "Common Data Set 2025-2026, C1", "url": "https://…", "accessed": "2026-10-12" },
  "cycleNewer": null,
  "scores": { "satComposite": [1500, 1550, 1580], "satEbrw": null, "satMath": null, "act": [34, 35, 36],
              "pctSat": 0.54, "pctAct": 0.2, "doc": "CDS 2025-2026, C9", "url": "https://…" },
  "testPolicy": { "status": "required", "text": "SAT or ACT required for applicants to the class entering fall 2027 and later", "since": "fall 2025 entry",
                  "url": "https://…", "accessed": "2026-10-12" },
  "gpa": { "average": 4.18, "pctSubmitting": 0.7, "doc": "CDS 2025-2026, C12", "url": "https://…" },
  "cost": { "year": "2026-27", "tuition": 0, "fees": 0, "housingFood": 0, "books": 0, "personal": 0, "travel": null,
            "total": 0, "totalIncludes": "tuition, fees, housing, food, books, personal",
            "inState": null, "outOfState": null,
            "url": "https://…", "accessed": "2026-10-12" },
  "aidPromise": { "text": "…", "year": "2025-26 onward", "url": "https://…" },
  "plans": { "ed": false, "ed2": false, "ea": false, "rea": true, "deadlines": { "early": "November 1", "regular": "January 1" }, "url": "https://…" },
  "facts": [ { "text": "One factual sentence in plain English, with the number.", "url": "https://…" } ],
  "notes": "Anything you could not verify, any contradiction between official documents, which document you fell back to."
}
```

For public universities, `cost.inState` and `cost.outOfState` are objects with the same fields as `cost`
(tuition, fees, housingFood, books, personal, total). Leave the top-level amounts `null` in that case.

**Rules that matter more than completeness**
- Every number comes from a document you actually opened. If you cannot open it, the field is `null`, and
  `notes` says what you tried. An uncertain figure is never written. No estimates, no rounding of counts.
- Copy the figures exactly as published (a CDS gives counts; the rate is computed later).
- `accessed` is today, 2026-10-12. Keep the exact URL of the document (PDF link, not a search page).
- Write English, plain, without the em dash character.
- Touch nothing else in the repository: only your own `research/schools/<slug>.json` files (and PDFs in
  `.cache-raw/cds/`). No git commands.

At the end, reply with a short table: slug, cycle used, cost year found, fields left null and why.
