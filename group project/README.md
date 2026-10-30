# Overlap — Group Project

> **Meet the people you already share a campus with.**

🌐 **Live site:** [https://overlaps.tech/](https://overlaps.tech/)

Overlap is a campus introduction app built for the **Web Programming** class. Instead of swiping on looks, it introduces students through the things they actually share: courses, clubs, free time, interests and values.

## Team

| Name | Student ID |
| --- | --- |
| Rahimjon | 202438377 |
| Asilbek | 202438394 |
| Shuhratxon | 202537358 |

## Contents of this folder

| File | Description |
| --- | --- |
| [Overlap-class-presentation.pptx](Overlap-class-presentation.pptx) | The class presentation (31 slides: 25 main + backup slides) |
| README.md | This file |

## The problem

You share a campus with thousands of people and meet only a handful.

1. **Same lecture, never spoken.** You can see the same faces for a whole semester without saying hello.
2. **Most apps start from looks.** A photo and a swipe say nothing about whether you would get along.
3. **Campus life has better reasons.** A course, a club or a free hour makes the first message easy.

## The idea

Overlap introduces people through what they already share, so the first message has something to talk about.

- **Only shared things count.** Courses, clubs, free time, interests and values make up the score. Never looks.
- **Six people a day.** A short list instead of an endless feed.
- **Every card explains itself.** For example, "You're both in Data Structures" tells you why you were introduced.
- **Four modes:** Friends, Study buddy, Dating (needs its own consent) and Open.

## The app at a glance

The app has four tabs:

| Tab | What it does |
| --- | --- |
| **Picks** | Six people a day, each one explained |
| **Waves** | Who waved at you, with an optional note |
| **Matches** | Chat and plan a meetup with mutual waves |
| **Me** | Edit your profile, privacy and data export |

### Joining (about three minutes)

1. Sign in with a school email and a six-digit code. No password.
2. Age check: the full birth date is checked, then only the year is stored.
3. Answer the overlap questions: courses, clubs, a free-time grid, interests and three short prompts.
4. Upload photos and a selfie. A human moderator approves them, then the selfie is deleted.

### Daily flow

- **Swipe right to wave, left to pass** (or use the buttons).
- **"Why you overlap" chips** show every reason, such as the same course section, a shared club or the same free hour.
- **React to a photo or prompt** with a short note, which makes a better opener than a bare like.
- **Waves are private until mutual.** A match exists only when both people wave.
- **Chat with icebreakers** built only from shared items. Chats are never logged.
- **Plan the meetup** from shared free time at safe public places. Yellow, green and red dots show waiting, accepted and declined. A confirmed meetup stays pinned in the chat with emergency contacts.

## How matching works

Each pair of students gets a score from 0 to 100, built from five ingredients:

```
S(a,b) = 100 × ( wC·C + wK·K + wT·T + wI·I + wV·V )
```

| Term | Ingredient | Question it answers |
| --- | --- | --- |
| **C** | Courses | Do you take the same course section? Sharing a section counts extra. |
| **K** | Clubs | Do you belong to the same clubs? Rarer clubs count more. |
| **T** | Free time | Do your weekly free hours line up? A shared campus spot adds a little. |
| **I** | Interests | Do you like the same things, such as photography or board games? |
| **V** | Values | How close are your answers to eight short agree/disagree statements? |

### Rare things count more

Shared items are weighted by rarity: `w(x) = ln( N / (1 + n) )`, where `N` is the number of students on campus and `n` is the number who share the item.

- A club of 3 people has weight **3.22**, a strong signal.
- A course of 60 people has weight **0.49**, a weaker one.

### Worked example (Friends mode)

Emma and Liam score **43.7**:

| Ingredient | Value | × Weight | = Points |
| --- | --- | --- | --- |
| Courses (C) | 0.55 | 0.20 | 11.0 |
| Clubs (K) | 0.25 | 0.25 | 6.2 |
| Free time (T) | 0.42 | 0.20 | 8.5 |
| Interests (I) | 0.44 | 0.30 | 13.2 |
| Values (V) | 0.97 | 0.05 | 4.8 |
| **Total** | | | **43.7** |

Friends-mode weights: interests 30%, clubs 25%, courses 20%, free time 20%, values 5%.

### Modes, sliders and two-sided ranking

- Each **mode** changes the weights.
- Three **sliders** (0.5× to 1.5×) let you tune classes, interests and free time.
- Ranking is **two-sided** and uses the harmonic mean, so a match must be good for both people. Scores of 90 and 10 average to 50 but rank only about 18.

### From scores to six daily picks

- 4 from the top of the ranked list
- 1 from the middle (rank 20 to 50) for variety
- 1 newcomer who joined in the last 7 days

Fairness rules:

- Nobody is shown more than 25 times a day.
- Someone passed twice is never shown again.
- A low trust score halves your reach.
- "Today" is the Seoul calendar day, not UTC.

## How it is built

```
Browser  →  Next.js 16  →  Matching engine  →  Data
```

| Layer | Technology |
| --- | --- |
| **Browser** | React 19, Tailwind v4, Korean and English, swipe gestures, mobile first |
| **Server** | Next.js 16 (App Router, server actions). Every action checks permissions itself |
| **Matching engine** | Plain TypeScript functions, rarity-weighted overlap, symmetric and property-tested |
| **Data** | PostgreSQL with Prisma 7, emailed codes (no passwords), photos in object storage |

By the numbers: about **47,000** lines of TypeScript, **49** database tables, **1,475** unit tests and **27** end-to-end suites.

The scoring is two small pure functions, `scoreFromTerms` and `reciprocityScore`. They use no database and no randomness, which makes them easy to test, including tests that check `score(a,b) = score(b,a)`.

## Safety and moderation

1. **A person reports.** They pick a reason and add context. Urgent kinds are sorted first.
2. **A moderator decides.** A human reads the report and writes a reason. Nothing is automatic.
3. **Enforcement is clear.** Warn, 7-day suspension or ban. The person sees why and can appeal.

Moderators have a verification queue (compare a selfie to profile photos) and a reports queue. They see the minimum: who someone wants to date is never loaded for them.

## Privacy rules built into the code

- **No ID numbers.** Only the birth year is kept after the age check.
- **Selfies are temporary.** Deleted within 7 days; only a "verified" flag stays.
- **Chats stay private.** Never logged or shared. Moderators see only what a reporter attaches.
- **Encrypted preferences.** Who you'd like to date is encrypted and never shown to moderators.
- **Delete means delete.** A 30-day grace period, then your identity is scrubbed.
- **Fictional data only in development.** Fake users exist only on a development database, never in production.

## Status and roadmap

| Stage | Plan |
| --- | --- |
| **Now** | Live at [overlaps.tech](https://overlaps.tech/), no invites yet; mobile app in progress |
| **Before launch** | A written moderator on-call rota; a 300+ waitlist or a pilot of 50 or fewer |
| **First pilot** | Invite-only, at most 50 people, one campus |
| **Later** | More campuses, Android and iPhone apps, chat photos |

Still open: a lawyer's review of the Terms and Privacy Policy, a named privacy officer with the official filings, and a stronger age check (today it is a birth year plus a declaration).

## What we learned

1. **Small pure functions.** Keeping scoring free of the database let property tests catch a real bug with duplicate items.
2. **Never select it, don't just hide it.** A field a role must not see should never be loaded for that role. Tests check the database query, not only the screen.
3. **Test the real path, on phone and desktop.** A button can look ready before the page finishes loading. Browser tests at both sizes found bugs unit tests could not.

## Demo notes

The presentation uses a fictional campus: **Hartwell University**, with 25 invented students on a throwaway local database. The portraits are AI-generated faces and nobody shown is a real student. Overlap is not open to the public yet.

## Visit

Scan the QR code in the presentation or go to **[https://overlaps.tech/](https://overlaps.tech/)** and join the waitlist.
