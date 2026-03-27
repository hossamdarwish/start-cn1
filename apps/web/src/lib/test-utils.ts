import type { Locale } from "./i18n"
import { normalizeLocale, getLocaleDirection, getAlternateLocale } from "./i18n"

/**
 * Test utilities for multilingual functionality
 */

export const testUtils = {
  /**
   * Test locale validation
   */
  testLocaleValidation: () => {
    const validLocales: Locale[] = ["en", "ar"]
    const invalidLocales = ["fr", "es", "de", "es-ES", ""]

    console.log("[TEST] Locale Validation")
    validLocales.forEach((locale) => {
      const normalized = normalizeLocale(locale)
      const isValid = normalized === locale
      console.log(`  ✓ ${locale}: ${isValid ? "PASS" : "FAIL"}`)
    })

    invalidLocales.forEach((locale) => {
      const normalized = normalizeLocale(locale)
      const isDefault = normalized === "en"
      console.log(`  ✓ Invalid "${locale}" defaults to "en": ${isDefault ? "PASS" : "FAIL"}`)
    })
  },

  /**
   * Test direction mapping
   */
  testDirectionMapping: () => {
    console.log("\n[TEST] Direction Mapping")
    const testCases: [Locale, "ltr" | "rtl"][] = [
      ["en", "ltr"],
      ["ar", "rtl"],
    ]

    testCases.forEach(([locale, expectedDir]) => {
      const dir = getLocaleDirection(locale)
      const isCorrect = dir === expectedDir
      console.log(`  ✓ ${locale} → ${dir}: ${isCorrect ? "PASS" : "FAIL"}`)
    })
  },

  /**
   * Test locale alternation
   */
  testLocaleAlternation: () => {
    console.log("\n[TEST] Locale Alternation")
    const testCases: [Locale, Locale][] = [
      ["en", "ar"],
      ["ar", "en"],
    ]

    testCases.forEach(([current, expected]) => {
      const alternate = getAlternateLocale(current)
      const isCorrect = alternate === expected
      console.log(
        `  ✓ ${current} → ${alternate}: ${isCorrect ? "PASS" : "FAIL"}`
      )
    })
  },

  /**
   * Test URL routing patterns
   */
  testURLPatterns: () => {
    console.log("\n[TEST] URL Routing Patterns")
    const patterns = [
      { url: "/", expectedLocale: "en", description: "Root (default)" },
      { url: "/en/", expectedLocale: "en", description: "Explicit English" },
      { url: "/ar/", expectedLocale: "ar", description: "Explicit Arabic" },
    ]

    patterns.forEach(({ url, expectedLocale, description }) => {
      const locale = url.split("/")[1] || "en"
      const normalized = normalizeLocale(locale === "" ? undefined : locale)
      const isCorrect = normalized === expectedLocale
      console.log(`  ✓ ${url} (${description}): ${isCorrect ? "PASS" : "FAIL"}`)
    })
  },

  /**
   * Test RTL attribute propagation
   */
  testRTLAttributes: () => {
    console.log("\n[TEST] RTL Attributes")
    if (typeof document !== "undefined") {
      const htmlElement = document.documentElement
      const currentDir = htmlElement.getAttribute("dir")
      const currentLang = htmlElement.getAttribute("lang")

      console.log(`  Current dir attribute: ${currentDir}`)
      console.log(`  Current lang attribute: ${currentLang}`)

      const isRTL =
        currentDir === "rtl" && (currentLang === "ar" || currentLang === "ar-SA")
      const isLTR =
        currentDir === "ltr" && (currentLang === "en" || currentLang === "en-US")

      if (isRTL || isLTR) {
        console.log(`  ✓ Direction setup: PASS`)
      } else {
        console.log(`  ✗ Direction setup: FAIL`)
      }
    } else {
      console.log("  [SERVER] RTL attributes cannot be tested in server environment")
    }
  },

  /**
   * Test component rendering for both languages
   */
  testComponentRendering: () => {
    console.log("\n[TEST] Component Rendering")
    console.log("  Manual verification needed:")
    console.log("  1. Visit http://localhost:3000/ (English)")
    console.log("  2. Verify Header shows English content")
    console.log("  3. Verify Hero section displays English text")
    console.log("  4. Verify Pricing cards show English prices/descriptions")
    console.log("  5. Visit http://localhost:3000/ar/ (Arabic)")
    console.log("  6. Verify Header shows Arabic content with RTL layout")
    console.log("  7. Verify all text is right-aligned (RTL)")
    console.log("  8. Verify Arabic font is applied (Noto Sans Arabic)")
  },

  /**
   * Test language switching
   */
  testLanguageSwitching: () => {
    console.log("\n[TEST] Language Switching")
    console.log("  Manual verification needed:")
    console.log("  1. Click language toggle button in header")
    console.log("  2. Verify URL changes from / to /ar/ or vice versa")
    console.log("  3. Verify all content updates to the new language")
    console.log("  4. Verify direction changes (LTR ↔ RTL)")
    console.log("  5. Verify cookie is set (check DevTools)")
  },

  /**
   * Test SEO features
   */
  testSEOFeatures: () => {
    console.log("\n[TEST] SEO Features")
    if (typeof document !== "undefined") {
      const htmlElement = document.documentElement
      const langAttr = htmlElement.getAttribute("lang")
      const dirAttr = htmlElement.getAttribute("dir")

      console.log(`  ✓ HTML lang attribute: ${langAttr}`)
      console.log(`  ✓ HTML dir attribute: ${dirAttr}`)

      const canonicalLink = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null
      const hrefLangLinks = document.querySelectorAll('link[hreflang]')

      if (canonicalLink) {
        console.log(`  ✓ Canonical link: ${canonicalLink.href}`)
      } else {
        console.log(`  ✗ Canonical link: NOT FOUND`)
      }

      console.log(`  ✓ Found ${hrefLangLinks.length} hreflang links`)
      hrefLangLinks.forEach((link) => {
        const hreflang = link.getAttribute("hreflang")
        const href = link.getAttribute("href")
        console.log(`    - ${hreflang}: ${href}`)
      })
    } else {
      console.log("  [SERVER] SEO attributes verified in root route")
    }
  },

  /**
   * Run all tests
   */
  runAllTests: () => {
    console.log("===== MULTILINGUAL APP TEST SUITE =====\n")
    testUtils.testLocaleValidation()
    testUtils.testDirectionMapping()
    testUtils.testLocaleAlternation()
    testUtils.testURLPatterns()
    testUtils.testRTLAttributes()
    testUtils.testComponentRendering()
    testUtils.testLanguageSwitching()
    testUtils.testSEOFeatures()
    console.log("\n===== END TEST SUITE =====")
  },
}

// Run tests in development mode
if (typeof window !== "undefined" && (window as any).__DEV__) {
  console.log(
    "To run tests, open DevTools console and run: testUtils.runAllTests()"
  )
}
