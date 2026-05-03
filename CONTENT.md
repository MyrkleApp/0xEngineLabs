# LANDING FLOW — 0x Engine Labs
## Full Content Specification · v2.0
### Conversion-sequenced: Awareness → Recognition → Credibility → Desire → Logic → Permission → Urgency → Action

---

## NAV

### Links
Capabilities · Proof · Process · Contact

### Behaviour
Fixed. Centred pill hanging from top edge. No dropdowns. No logo — the hero wordmark is the logo. On scroll past hero: pill background gains `backdrop-filter: blur(12px)`.

---

## SECTION 1 — HERO
### Gate: Awareness → Recognition

### Label (eyebrow)
`Engineering Systems`

### Heading
You build systems.
They fail under load.

### Subheading
We fix that before it happens.

### Description
We design, build, and harden backend systems, infrastructure, and automation pipelines for companies operating under real-world constraints.

### CTA (primary)
Start a Project →

### CTA (secondary ghost)
See Our Work ↓

### Design notes
- Heading: left 8 columns, bottom-aligned
- Right 4 columns: description + CTAs
- "fail" gets Sand colour accent
- Subheading in Sand, Syne 600

---

## SECTION 2 — PROBLEM STATEMENT
### Gate: Recognition → Credibility
### Section label: `The Reality`

This section has no heading. It is a single full-width statement, large, that describes the customer's situation back to them with precision. No introduction. No label before the statement itself. It lands immediately.

### Statement (large, scroll-animated, character reveal)

> "Companies at growth stage don't lose to competition.
> They lose to their own infrastructure.
> APIs that buckle under concurrent load.
> Legacy systems that block every new feature.
> Automation that breaks when volume doubles.
> The cost isn't the fix.
> It's every week you don't."

### Typography spec
- Font: Syne 700
- Size: clamp(24px, 3.5vw, 48px)
- Line height: 1.15
- Colour: `#1A1A18` — full opacity, no muting
- Each line breaks deliberately — not wrapping
- The final line `"It's every week you don't."` is isolated, smaller (clamp(18px, 2.5vw, 32px)), Sand colour `#F0B67F`

### Layout
- Dark inversion panel: `#1A1A18` background, full width, no border radius
- Max-width: 840px, centred
- Padding: 120px top/bottom
- No cards. No dividers. No noise overlay. Just the words.

### Animation
- Lines pull up one by one, stagger 0.12s, ease [0.16, 1, 0.3, 1]
- Triggered by IntersectionObserver on section entry
- The final Sand line fades in separately at delay 0.8s after last line

### What this section does
It names the pain the customer is already feeling. When they read this, the reaction is not "interesting pitch" — it is "that's us." That recognition is the most valuable thing the page can generate before showing proof.

---

## SECTION 3 — PROOF OF WORK
### Gate: Credibility → Desire
### Section label: `Proof`

### Heading (WordsPullUpMultiStyle — two segments)
Segment 1: `Built systems.` — `#1A1A18`, font-normal
Segment 2: `Verified under load.` — `#FE5F55` (Signal Red), font-normal

### Subheading (below heading, DM Mono)
`No post-deployment failures. No theoretical benchmarks.`
Colour: `#6B6B66` · size: 13px

### Body paragraph (scroll-linked AnimatedLetter, Sand colour `#F0B67F`)
> "We optimize and restructure systems to handle real concurrency, sustained traffic, and operational stress. The measure is not feature delivery — it is system behavior under load. Built under constraint. Verified under load. Handed over. Still running."

### Proof Blocks — Asymmetric Layout
Left card: large, dark (`#1A1A18` bg), spans full height
Right column: two stacked cards, surface (`#F2F0EC` bg)

---

#### LEFT CARD — DOMINANT (dark, large)
**Label:** `01 — SYSTEM`
**Title:** `Distributed System Flow`
**Body:** Service-to-service communication structured for reliability and fault tolerance under concurrent load. Engineered for predictable behavior in production, not controlled environments.
**Footer line (DM Mono, Sand, 10px):** `Resilient execution layers.`
**Visual:** Dark noise texture background, large `0x` typographic mark at 3% opacity as background element

---

#### RIGHT CARD TOP
**Label:** `02 — CASE`
**Title:** `Backend Throughput`
**Checklist:**
- Reduced request latency across critical endpoints
- Stabilized response times under concurrent traffic
- Improved throughput without increasing infrastructure cost
- Resolved cascade failures under sustained peak load

**Footer link:** `View Details →` (DM Mono, 10px, hover → Signal Red)

---

#### RIGHT CARD BOTTOM
**Label:** `03 — CASE`
**Title:** `Infrastructure Rearchitecture`
**Checklist:**
- Migrated monolith into fault-isolated modular services
- Introduced recovery layers across service boundaries
- Improved deployment consistency across all environments
- Zero regression events post-migration

**Footer link:** `View Details →` (DM Mono, 10px, hover → Signal Red)

---

#### FOURTH CARD (below, full width or 2-col span)
**Label:** `04 — CASE`
**Title:** `Automation Pipeline`
**Body:** Replaced manual operational workflows with structured execution pipelines. Reduced overhead. Introduced monitoring and failure alerting. Systems now self-report before humans notice.
**Checklist:**
- Eliminated manual execution dependencies
- Reduced operational overhead by structured scheduling
- Monitoring and failure alert systems deployed
- Execution consistency across all pipeline stages

**Footer line (DM Mono, muted, 9px):** `Metrics available on request.`

---

## SECTION 4 — CAPABILITIES
### Gate: Desire → Logic
### Section label: `Capabilities`

### Heading
`Four domains.`
`No overlap. No generalism.`

Line 1: `#1A1A18`, Syne 700
Line 2: `#6B6B66`, Syne 600 — softer, acts as clarifier

### Subheading (DM Mono, muted)
`Every engagement lives inside one of these. We do not stretch scope.`

### Card Grid — Asymmetric (KEY LAYOUT)

```
[ CARD 01 — double height, left col ]  [ CARD 02 — top right ]
[                                   ]  [ CARD 03 — bottom right ]
[ CARD 04 — full width bottom       ]
```

Card 01 gets double height. It is the primary domain and must command space. The grid asymmetry signals confidence — uniform grids signal templates.

---

#### CARD 01 — PRIMARY (double height)
**Number:** `01 — DOMAIN`
**Title:** `Software Engineering`
**Body:** High-performance backend systems designed for reliability and long-term maintainability. Built for the production environment, not the demo.
**Checklist:**
- Performance-first system architecture
- Reliability by design, not by patch
- Long-term maintainability baked in
- Full lifecycle ownership from spec to deployment

**Visual treatment:** Large `01` numeral at 4% opacity as background element (Sand colour). No image.

---

#### CARD 02
**Number:** `02 — DOMAIN`
**Title:** `Systems Architecture`
**Body:** Designing scalable, modular systems that handle real-world constraints from day one.
**Checklist:**
- Modular service design
- Horizontal and vertical scalability paths
- Fault isolation by default

---

#### CARD 03
**Number:** `03 — DOMAIN`
**Title:** `Digital Transformation`
**Body:** Reworking legacy systems into modern, efficient architectures without operational disruption.
**Checklist:**
- Legacy system assessment and mapping
- Phased migration without downtime
- Modern architecture, existing team continuity

---

#### CARD 04 (full width)
**Number:** `04 — DOMAIN`
**Title:** `Process Automation`
**Body:** Eliminating operational inefficiencies through structured, monitorable automation systems. If a human is doing it on a schedule, it should be a pipeline.
**Checklist:**
- Workflow mapping and bottleneck identification
- Structured pipeline architecture
- Monitoring, alerting, and failure handling built in
- Execution consistency at scale

---

## SECTION 5 — PROCESS
### Gate: Logic → Objection Cleared
### Section label: `Execution Model`

### Heading
`How We Work.`
— "Work." in Mint `lime`

### Layout
Three equal columns. `0.5px solid #B8B5AE` hairline dividers. No card wrappers — the grid IS the structure. Clean, horizontal, systematic.

---

#### STEP 01 — Diagnose
**Number:** `01 — STEP`
**Title:** `Diagnose.`
**Body:** We map the system before we touch it. Constraints, bottlenecks, and failure points are identified and documented. Nothing is assumed.

---

#### STEP 02 — Build
**Number:** `02 — STEP`
**Title:** `Build.`
**Body:** We implement against defined performance and reliability targets. Every layer is intentional. Scope does not drift.

---

#### STEP 03 — Scale
**Number:** `03 — STEP`
**Title:** `Scale.`
**Body:** We harden until the system is boring. Boring means stable. Stable means done. Growth and load are no longer events — they are conditions the system was built for.

### Copy note
`"We harden until the system is boring."` — this phrase does not appear anywhere else in the engineering services space. Use it exactly. It is the most confidence-signalling sentence on the page.

---

## SECTION 6 — CONVICTION LAYER
### Gate: Objection Cleared → Permission
### Section label: `Why It Works`

This section kills the last fear: *"What if I hire them and it goes wrong?"*

Use whichever Option applies. Do not use multiple Options simultaneously — pick the strongest one available and let it stand alone.

---

### OPTION A — Metric (use if systems have shipped)
**Heading (large, centred, Syne 800):**
`8 systems deployed.`
`Zero post-launch failures.`

**Subline (DM Mono, muted):**
`Across backend systems, infrastructure rearchitectures, and automation pipelines.`

**Layout:** Full-width, centred, dark panel (`#1A1A18` bg), minimal. The numbers do the work. Nothing else on this panel.

---

### OPTION B — Client Quote (use if a real quote exists)
**Format:** Single quote. Large. Attributed fully — first name, last name, title, company name. No anonymisation. Anonymous quotes have zero conversion value.

**Placeholder structure:**
> `"They took a system that was failing at 400 concurrent requests and rebuilt it to handle 40,000. Delivered on time. Still running 14 months later."`
> — [Full Name], [Title], [Company]

**Layout:** Quote centred, max-width 680px. Attribution below in DM Mono, 11px, muted. Dark panel, same as Option A.

---

### OPTION C — Capacity Signal (use if neither A nor B exists yet)
**Heading (Syne 700, large):**
`0x operates with a limited client roster by design.`

**Body (DM Mono, 13px):**
Every engagement receives the full team. We do not parallelize client work. This means the systems we deliver get the attention they require — and we do not take on work we cannot execute at the standard our existing clients expect.

**Status line (DM Mono, Sand, 11px):**
`Currently scoped through Q3 2026. Accepting enquiries for Q4.`

**CTA:** `Enquire for Q4 →` (Signal Red pill)

**Copy note:** Option C is not a fallback — it is psychologically the most powerful of the three for an early-stage firm. It reframes the conversion from "I hope they'll take my project" to "I need to act before the window closes." Scarcity, when honest, outperforms generic social proof.

---

## SECTION 7 — PRINCIPLES
### Gate: Permission → Urgency
### Section label: `Principles`

### Heading
`Operational Principles.`

### Layout
Full-width stacked list. Each principle is one row, separated by `0.5px solid #B8B5AE` hairline. Top and bottom hairlines close the list.

Each row:
- Left: principle text, Syne 700, clamp(28px → 40px), `#1A1A18`
- Right: index number, DM Mono, 9px, `rgba(26,26,24,0.20)`
- Hover: full line → `#FE5F55`, transition 400ms ease
- Last accent word per line rotates: Sand → Red → Mint → Sand

---

#### PRINCIPLE 01
`Performance over abstraction.`
Accent word: `abstraction.` → Sand `#F0B67F`

#### PRINCIPLE 02
`Systems must survive load, not demos.`
Accent word: `demos.` → Signal Red `#FE5F55`

#### PRINCIPLE 03
`Every layer is intentional.`
Accent word: `intentional.` → Mint `lime`

#### PRINCIPLE 04
`Complexity is controlled, not accumulated.`
Accent word: `accumulated.` → Sand `#F0B67F`

### Copy note
These four statements require no explanation, no subcopy, no elaboration. A visitor who needs them explained is not the target client. The right client reads these and feels recognised. The wrong client self-selects out. Both outcomes are correct.

---

## SECTION 8 — CTA BREAK
### Gate: Urgency → Action
### Section label: none — this section has no label

### Layout
Full-width dark inversion panel. `#1A1A18` background. Centred content. Max-width 640px. 140px top padding minimum.

### Heading (Syne 700, clamp(36px → 64px), `#FAFAF8`)
`Systems that fail cost more`
`than systems built right.`

### Subline (Syne 500, 22px, `rgba(250,250,248,0.65)`)
`Let's build yours.`

### CTA
`Start a Project →`
Signal Red pill. Centred. Standard spec.

### Below CTA (DM Mono, 10px, `rgba(250,250,248,0.35)`)
`contact@0xenginelabs.com`

### Design note
Nothing else on this panel. No noise overlay. No grid lines. No decorative elements. The negative space is doing the persuasion work. Any added element competes with the ask and reduces conversion.

---

## FOOTER — Resolution
### Section label: none

### Brand mark
SVG logo + `0X ENGINE LABS` — Syne 700, 14px, `#FAFAF8` on dark, `#1A1A18` on light

### Tagline
`Systems. Built properly.`
DM Mono, 11px, muted

### Left column CTA
`Start a Project →` — Signal Red pill, smaller variant (padding: `4px 6px 4px 16px`)

### Link columns (3-column grid)

**Engineering**
- Custom Software
- Infrastructure
- API Systems
- Process Automation
- Performance Audits

**Company**
- About 0x
- How We Work
- Case Studies
- Join the Team

**Contact**
- Start a Project
- contact@0xenginelabs.com
- Legal & Privacy
- Terms of Engagement
- Report an Issue

### Bottom bar
Left: `Built by 0x Engine Labs — Systems. Built properly.` — DM Mono, 9px, 30% opacity
Right: `contact@0xenginelabs.com` — DM Mono, 9px, 50% opacity, hover → Mint `lime`

### No social icons.
Social icons signal media brand. 0x Engine Labs is an engineering firm. The only link out is an email.