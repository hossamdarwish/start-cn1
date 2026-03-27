# Multilingual i18n SaaS Landing Page - Testing Guide

## Quick Start Testing

### Running the Development Server

```bash
cd apps/web
npm run dev
# Server runs on http://localhost:3000
```

## Testing Checklist

### 1. Routing Tests

#### Test Default Routing (English)
- [ ] Visit `http://localhost:3000/`
- [ ] Verify page loads with English content
- [ ] Verify HTML has `lang="en"` and `dir="ltr"`
- [ ] Verify URL remains `/` (no redirect)

#### Test Explicit English Routing
- [ ] Visit `http://localhost:3000/en/`
- [ ] Verify page loads with English content
- [ ] Verify HTML has `lang="en"` and `dir="ltr"`

#### Test Arabic Routing
- [ ] Visit `http://localhost:3000/ar/`
- [ ] Verify page loads with Arabic content
- [ ] Verify HTML has `lang="ar"` and `dir="rtl"`
- [ ] Verify content is right-aligned (RTL layout)

### 2. Component Translation Tests

#### Header Component
- [ ] English: "SaaS Platform" logo visible
- [ ] Arabic: "منصة SaaS" logo visible
- [ ] Navigation items translated correctly
- [ ] Language toggle button shows correct alternate language

#### Hero Section
- [ ] English: Title reads "Build Your SaaS Platform with Confidence"
- [ ] Arabic: Title reads "بناء منصة SaaS الخاصة بك بثقة"
- [ ] CTA buttons are translated
- [ ] Badge text is translated

#### Features Section
- [ ] All 6 feature cards display correctly
- [ ] Feature names are translated
- [ ] Feature descriptions are translated
- [ ] Cards maintain alignment in both languages

#### Pricing Section
- [ ] All 3 pricing tiers display correctly
- [ ] Plan names are translated (e.g., "Starter" → "المبتدئ")
- [ ] Prices remain consistent ($29, $99, Custom)
- [ ] Feature lists are translated
- [ ] "Most Popular" badge is translated

#### Footer Section
- [ ] All footer links are present
- [ ] Footer content is translated
- [ ] Column headers are translated
- [ ] Copyright notice is translated

### 3. RTL (Right-to-Left) Tests

#### Layout Direction
- [ ] Arabic page displays right-aligned content
- [ ] English page displays left-aligned content
- [ ] HTML `dir="rtl"` attribute is set for Arabic
- [ ] HTML `dir="ltr"` attribute is set for English

#### Typography
- [ ] Arabic text uses Noto Sans Arabic font
- [ ] English text uses Noto Sans font
- [ ] Text is readable and properly formatted in both languages
- [ ] Line heights and spacing are appropriate for each language

#### Components in RTL
- [ ] Buttons maintain proper styling in RTL
- [ ] Icons flip or align correctly in RTL
- [ ] Form inputs work correctly in RTL context
- [ ] Spacing and padding adjust for RTL

### 4. Language Switching Tests

#### Toggle Button
- [ ] Language toggle button is visible in header
- [ ] Button shows "العربية" when on English page
- [ ] Button shows "English" when on Arabic page
- [ ] Clicking toggle navigates to alternate language version

#### URL Changes
- [ ] From `/` (English) → `/ar/` (Arabic)
- [ ] From `/ar/` (Arabic) → `/` (English)
- [ ] URL updates correctly in address bar

#### Content Updates
- [ ] All page content updates when language switches
- [ ] Direction changes (LTR ↔ RTL)
- [ ] Font changes appropriately
- [ ] No console errors during language switch

#### Cookie Persistence
- [ ] Open DevTools → Application → Cookies
- [ ] Switch to Arabic, verify `language=ar` cookie is set
- [ ] Switch to English, verify `language=en` cookie is set
- [ ] Close and reopen page (cookie should persist preference)

### 5. SEO Tests

#### Meta Tags
- [ ] Page title is translated (check browser tab)
- [ ] Meta description is translated and present
- [ ] OG tags have translated content
- [ ] Language-specific titles and descriptions

#### Canonical Links
- [ ] English page has canonical: `https://saasplatform.com/`
- [ ] Arabic page has canonical: `https://saasplatform.com/ar/`

#### Hreflang Links
- [ ] English page includes hreflang links to all versions
- [ ] Arabic page includes hreflang links to all versions
- [ ] Links point to correct URLs

#### Structured Data
- [ ] Check DevTools → Elements for proper language attributes
- [ ] HTML lang attribute matches content language
- [ ] Dir attribute matches language direction

### 6. SEO XML Files

#### Sitemap
- [ ] File exists at `/public/sitemap.xml`
- [ ] Contains entries for both language versions
- [ ] Each entry has hreflang links to alternates

#### Robots.txt
- [ ] File exists at `/public/robots.txt`
- [ ] Allows both `/` and `/ar/` paths
- [ ] References sitemap.xml correctly

### 7. Accessibility Tests

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Language toggle is keyboard accessible
- [ ] Links are easily distinguishable
- [ ] Focus indicators are visible

#### Screen Reader
- [ ] All text content is readable by screen readers
- [ ] Images have alt text (if any)
- [ ] Semantic HTML is used correctly
- [ ] Language attribute helps screen reader

#### Color Contrast
- [ ] Text has sufficient contrast with background
- [ ] Works in light mode and dark mode
- [ ] Focus indicators have good contrast

### 8. Browser Compatibility

#### Desktop Browsers
- [ ] Chrome/Chromium - English and Arabic
- [ ] Firefox - English and Arabic
- [ ] Safari - English and Arabic
- [ ] Edge - English and Arabic

#### Mobile Browsers
- [ ] iPhone Safari - English and Arabic
- [ ] Android Chrome - English and Arabic
- [ ] Responsive layout works on all screen sizes

#### Different Screen Sizes
- [ ] Mobile (375px) - Layout stacks correctly
- [ ] Tablet (768px) - Two-column layouts appear
- [ ] Desktop (1024px+) - Full multi-column layout

### 9. Performance Tests

#### Page Load
- [ ] Page loads within 3 seconds on fast connection
- [ ] First Contentful Paint occurs quickly
- [ ] No console errors or warnings

#### Bundle Size
- [ ] Paraglide translations don't bloat bundle
- [ ] Only active language loads
- [ ] Font loading is optimized

### 10. Build & Deploy Tests

#### Development Build
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings (unless ignored)

#### Preview Build
```bash
npm run preview
```
- [ ] Can start preview server
- [ ] All pages load correctly in preview
- [ ] No 404 errors

## Manual Testing via Console

### Access Test Utilities

In browser DevTools Console:

```javascript
// Import test utilities (if exposed globally)
testUtils.runAllTests()

// Run specific tests
testUtils.testLocaleValidation()
testUtils.testDirectionMapping()
testUtils.testLocaleAlternation()
testUtils.testURLPatterns()
testUtils.testRTLAttributes()
testUtils.testSEOFeatures()
```

## Known Issues & Solutions

### Issue: Arabic text not displaying correctly

**Solution:**
1. Clear browser cache
2. Check if Noto Sans Arabic font loaded (DevTools → Fonts)
3. Verify `dir="rtl"` attribute on HTML element

### Issue: Language doesn't change after toggle

**Solution:**
1. Check if cookie is being set (DevTools → Cookies)
2. Verify localStorage is not blocking cookies
3. Check browser console for errors

### Issue: Layout breaks in RTL mode

**Solution:**
1. Check for hardcoded `left`/`right` CSS (should use `start`/`end`)
2. Verify margin and padding use logical properties
3. Check component styling doesn't override RTL direction

## Performance Baseline

Target metrics:

- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

## Reporting Issues

When reporting issues, include:

1. **Environment**: Browser, OS, screen size
2. **Steps to reproduce**: Exact actions taken
3. **Expected behavior**: What should happen
4. **Actual behavior**: What happened instead
5. **Screenshots/Video**: Visual evidence if possible
6. **Console errors**: Any JavaScript errors
7. **Network requests**: Check if assets loaded correctly

## Regression Testing

Before deploying, verify:

- [ ] All routing patterns work
- [ ] Both languages display correctly
- [ ] RTL layout is correct
- [ ] Language switching works
- [ ] SEO tags are present
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Accessibility passes
- [ ] Performance is acceptable
- [ ] Build succeeds

---

**Last Updated**: March 27, 2026
**Version**: 1.0
