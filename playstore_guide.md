# The Uncalculator — Play Store Submission Guide
### Complete Step-by-Step for Beginners (Zero Coding Required)

---

## WHAT YOU HAVE IN THIS FOLDER

| File | What it does |
|------|-------------|
| `index.html` | Your complete app — all 19 chapters, all bugs fixed |
| `manifest.json` | Tells Android "this is an app" — needed for Play Store |
| `sw.js` | Makes the app work offline (no internet needed after first load) |
| `icon-192.png` | App icon (you need to create this — see Step 2) |
| `icon-512.png` | Larger app icon for Play Store listing |

---

## ROUTE 1 — FASTEST: Free website host → Play Store via TWA (3-5 days)

This method turns your HTML app into a real Play Store listing WITHOUT needing to learn Android development. Google officially supports this.

### Step 1: Host your app for free on Netlify (10 minutes)

1. Go to **https://netlify.com** and create a free account
2. Drag your entire `uncalculator` folder onto the Netlify dashboard
3. Netlify gives you a URL like: `https://uncalculator.netlify.app`
4. Done! Your app is live on the web.

### Step 2: Create your app icons (15 minutes)

You need two square PNG images with no rounded corners (Google adds the rounding):
- `icon-192.png` — 192×192 pixels
- `icon-512.png` — 512×512 pixels

**Free tools to create icons:**
- **Canva** (canva.com) — search "app icon", use the dark background (#08111f) and add the ∑ symbol or a brain emoji
- **Adobe Express** (express.adobe.com) — free tier available
- **Figma** (figma.com) — free, most professional

**Icon design suggestion:**
- Background: Dark navy (#08111f)
- Symbol: A stylised brain with a circuit pattern, or the letters "UC" in the Syne font
- Accent colour: Mint green (#00e5a0)

Save both files into your uncalculator folder, then re-upload to Netlify.

### Step 3: Register as a Google Play Developer ($25 one-time fee)

1. Go to **https://play.google.com/console**
2. Sign in with your Google account
3. Pay the $25 one-time registration fee
4. Fill in your developer profile (name, email, address)

This takes 24-48 hours to activate.

### Step 4: Use Bubblewrap to create the Android app (30 minutes)

Bubblewrap is Google's official free tool to wrap a website into a Play Store app.

**Install Node.js first:**
1. Go to **https://nodejs.org**
2. Download the "LTS" version
3. Install it (just click Next through the installer)

**Install and run Bubblewrap:**
Open Terminal (Mac) or Command Prompt (Windows), then type these commands one at a time:

```
npm install -g @bubblewrap/cli
```
```
bubblewrap init --manifest https://your-netlify-url.netlify.app/manifest.json
```
Replace `your-netlify-url` with your actual Netlify subdomain.

Bubblewrap will ask you questions:
- **Application ID**: `com.yourname.uncalculator` (use your actual name, e.g., `com.john.uncalculator`)
- **App name**: The Uncalculator
- **Short name**: Uncalculator
- **Version**: 1
- **Display mode**: standalone

Then build:
```
bubblewrap build
```

This creates a file called `app-release-bundle.aab` — this is your Play Store app file.

### Step 5: Submit to Google Play Console

1. Go to **https://play.google.com/console**
2. Click "Create app"
3. Fill in:
   - **App name**: The Uncalculator
   - **Default language**: English
   - **App or game**: App
   - **Free or paid**: Free (recommended for first launch)
4. Complete the **Store listing**:
   - Short description (80 chars max): "19 mental math techniques for real-world survival. No calculator needed."
   - Full description: Copy the text from the "Play Store Description" section below
   - Add your screenshots (take them on your phone from the browser version)
   - Upload your 512×512 icon
   - Upload a Feature Graphic (1024×500 PNG — a banner image for the Play Store)
5. Complete the **Content rating** questionnaire (select: no violence, no ads, no user data collected — you'll get "Everyone" rating)
6. Upload the `.aab` file under **Production → Releases**
7. Submit for review

Google typically approves apps within **3-7 business days**.

---

## ROUTE 2 — BETTER QUALITY: Capacitor (1-2 weeks)

If you want the app to feel more native (faster animations, better haptics, system notifications), use Capacitor. This requires more setup but produces a better result.

**Install:**
```
npm install -g @ionic/cli
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/haptics @capacitor/preferences
```

**Setup:**
```
npx cap init "The Uncalculator" "com.yourname.uncalculator" --web-dir .
npx cap add android
npx cap sync
npx cap open android
```

Then build a signed AAB in Android Studio (free from Google).

---

## PLAY STORE LISTING — Copy-paste text

### Short Description (80 characters)
```
Mental math techniques for real life. No calculator. No anxiety. Just results.
```

### Full Description (use this in the Play Store listing)
```
The Uncalculator teaches you 19 powerful mental math techniques used by 
traders, engineers, and everyday people who are done fumbling for their 
phone every time a number appears.

No memorisation. No tricks that only work in perfect conditions. These are 
the same methods used in Vedic Mathematics, and they work at the checkout, 
in meetings, at restaurants, and everywhere else your calculator isn't fast 
enough.

WHAT YOU'LL LEARN:
• Left-to-Right Addition — stop stacking numbers, start flowing through them
• The All From 9, Last From 10 method — calculate change instantly
• The Magic 11 Sandwich — multiply by 11 in your head in 2 seconds
• Base Method — multiply numbers near 100 with almost no effort
• Digital Roots — verify any calculation instantly without redoing it
• Rule of 72 — understand compound interest at a glance
• The Butterfly Method — add and compare fractions without common denominators
• Cube Root Hack — find cube roots of 6-digit numbers in seconds
• ...and 11 more techniques

HOW IT WORKS:
→ Read the concept (what and why)
→ Learn the method (the exact steps)
→ See worked examples (real-world scenarios)
→ Take a short quiz to lock it in
→ Daily practice keeps your skills sharp

DESIGNED FOR REAL LIFE:
Every chapter is built around a real scenario — tipping at restaurants, 
splitting bills, checking invoices, calculating discounts, understanding 
your credit card interest. This isn't school maths. This is survival maths.

FREE TO START:
The Uncalculator is completely free. No ads. No subscriptions.
```

### Tags/Keywords for Play Store
```
mental math, math tricks, vedic mathematics, arithmetic, brain training, 
mental calculation, math practice, number sense, math skills, no calculator
```

---

## PRIVACY POLICY (Required by Google — host this on GitHub Pages for free)

```
Privacy Policy for The Uncalculator

Last updated: [Your date]

The Uncalculator does not collect, store, or transmit any personal data.

All progress data (completed chapters, practice statistics) is stored 
locally on your device using your browser's localStorage. This data 
never leaves your device and is not accessible to us.

We do not use any analytics, tracking, advertising, or third-party 
services.

Contact: [your email address]
```

**How to host this free:**
1. Create a GitHub account at github.com
2. Create a new repository called "uncalculator-privacy"
3. Add a file called `index.md` with the privacy policy text above
4. Go to Settings → Pages → Enable GitHub Pages
5. Your policy URL will be: `https://yourusername.github.io/uncalculator-privacy`
6. Use this URL in the Play Console privacy policy field.

---

## WHAT THE BUGS WERE AND WHAT WAS FIXED

| Bug | What Was Broken | What Was Fixed |
|-----|----------------|----------------|
| BUG-01 | Quiz options broke on answers with $, (), or ' characters | Switched to data-val attributes with URL encoding |
| BUG-05 | Retry Quiz sent user back to Concepts page | Now jumps directly to the quiz |
| BUG-06 | Previous answer bled into next question | Selection state resets on each new question |
| BUG-07 | Dev mode checkbox visible to all users | Replaced with 7-tap secret gesture on the title |
| CSS-01 | items-center (invalid CSS property) | Fixed to align-items: center |
| DATA-01 | Empty steps in methods caused blank bullet points | All blank steps filtered out |
| PASS-01 | Passing score hardcoded to 80%, ignoring per-chapter data | Reads passingScore from each chapter's data |

---

## HIDDEN DEVELOPER MODE

To activate: **Tap the "Uncalculator" title 7 times within 3 seconds** on the landing screen.

A toast notification will confirm it's on or off.
When ON: all 19 chapters are unlocked regardless of progress.
When OFF: normal progression — must complete each chapter to unlock the next.

The data for all 19 chapters is always present in the app. Dev mode only changes what's visible.

---

## FOLDER STRUCTURE

```
uncalculator/
  index.html     ← The complete app (all logic, data, styles in one file)
  manifest.json  ← PWA manifest (needed for Play Store via TWA)
  sw.js          ← Service worker (offline support)
  icon-192.png   ← App icon 192×192 (YOU CREATE THIS)
  icon-512.png   ← App icon 512×512 (YOU CREATE THIS)
```

---

## MONETISATION OPTIONS (decide before submitting)

| Option | Revenue | Complexity | Recommended? |
|--------|---------|-----------|-------------|
| Completely free | $0 but great reviews | Zero | Good for launch |
| Free + one-time IAP ($2.99) | Medium | Medium (needs Play Billing) | ✓ Best long-term |
| Ads between chapters | Low, annoying users | Low | ✗ Avoid |
| Free + tip jar | Low, warm feeling | Low | Good secondary |

**Recommendation:** Launch free, collect reviews, add the $2.99 "Supporter" unlock in v1.1.

---

*For any questions about this guide, the app code, or the Play Store process — ask Claude.*
