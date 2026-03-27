"use client"

import { useCallback, useEffect, useState } from "react"
import { useMatchRoute } from "@tanstack/react-router"
import { Header } from "./layout/header"
import { HeroSection } from "./sections/hero"
import { FeaturesSection } from "./sections/features"
import { PricingSection } from "./sections/pricing"
import { FooterSection } from "./layout/footer"
import { Direction } from "@radix-ui/react-direction"
import type { Locale } from "@/lib/i18n"
import { getLocaleDirection, normalizeLocale } from "@/lib/i18n"
import { getLocaleFromCookie } from "@/lib/cookies"

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("en")
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get locale from current URL path
    const pathname = typeof window !== "undefined" ? window.location.pathname : ""
    const localeFromPath = pathname.split("/")[1]
    const resolvedLocale = normalizeLocale(localeFromPath)
    
    setLocale(resolvedLocale)
    setDirection(getLocaleDirection(resolvedLocale))
    
    // Update HTML direction
    if (typeof document !== "undefined") {
      document.documentElement.dir = getLocaleDirection(resolvedLocale)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Direction dir={direction}>
      <div className="min-h-screen bg-background text-foreground">
        <Header locale={locale} />
        <main>
          <HeroSection locale={locale} />
          <FeaturesSection locale={locale} />
          <PricingSection locale={locale} />
        </main>
        <FooterSection locale={locale} />
      </div>
    </Direction>
  )
}
