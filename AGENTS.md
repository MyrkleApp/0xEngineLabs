# AGENTS.md — 0x Engine Labs Landing System

---

## PURPOSE

This document defines how to translate:
- DESIGN.md → layout + animation behavior
- CONTENT.md → copy + messaging
- FOOTER.DESIGN.md → footer structure

Into a consistent, production-ready Next.js implementation.

No deviations. No reinterpretation.

---

## CORE PRINCIPLE

Content drives structure.  
Design defines behavior.  
Agents do not invent.

If something is missing:
- leave it empty
- or mark as TODO

Do not generate new marketing content.

---

## SECTION MAPPING (SOURCE OF TRUTH)

| Section | Source |
|--------|-------|
| Hero | CONTENT.md + DESIGN.md |
| Capabilities | CONTENT.md |
| System Positioning | DESIGN.md (updated block) |
| Proof / System Output | DESIGN.md |
| Process | CONTENT.md |
| Principles | CONTENT.md |
| Footer | FOOTER.DESIGN.md (modified to brand) |

---

## GLOBAL RULES

### 1. No Creative Drift
Remove:
- storytelling language
- artistic framing
- emotional tone

Maintain:
- engineering clarity
- operational language
- system-level descriptions

---

### 2. Typography Rules

- Primary font → Cabinet Grotesk
- Serif accent → Gambarino (italic only)
- Serif usage → ONLY in highlighted segment (WordsPullUpMultiStyle)

---

### 3. Color Rules

- Background → lime
- Surface → #101010 / #212121
- Primary → #F0B67F
- Accent → #FE5F55
- Text → #020202 / gray scale

Do not introduce new colors.

---

### 4. Animation Philosophy

Animations represent:
- emergence (not decoration)
- system activation (not flair)

Avoid:
- bounce
- elastic easing
- exaggerated motion

---

## COMPONENT CONTRACTS

---

### WordsPullUp

**Purpose:** Headline reveal

**Rules:**
- Split by word
- Each word → motion.span
- Initial: y:20, opacity: 0
- Animate: y:0, opacity: 1
- Stagger: 0.08s
- Trigger: useInView (once: true)

---

### WordsPullUpMultiStyle

**Purpose:** Multi-tone structured statements

**Input:**
```ts
[{ text: string, className: string }]