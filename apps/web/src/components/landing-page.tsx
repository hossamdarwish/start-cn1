import { useParams } from "@tanstack/react-router"
import { Header } from "./layout/header"
import { HeroSection } from "./sections/hero"
import { FeaturesSection } from "./sections/features"
import { PricingSection } from "./sections/pricing"
import { FooterSection } from "./layout/footer"
import type { Locale } from "@/lib/i18n"
import { normalizeLocale } from "@/lib/i18n"

export function LandingPage() {
  const params = useParams({ from: "/{-$locale}/" })
  const locale = normalizeLocale((params.locale as string | undefined)) as Locale

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <FeaturesSection locale={locale} />
        <PricingSection locale={locale} />
      </main>
      <FooterSection locale={locale} />
    </div>
  )
}
