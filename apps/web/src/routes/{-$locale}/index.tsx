import { createFileRoute } from "@tanstack/react-router"
import { LandingPage } from "@/components/landing-page"
import type { Locale } from "@/lib/i18n"

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => {
    const locale = params.locale as Locale
    const isArabic = locale === "ar"
    
    const title = isArabic 
      ? "منصة SaaS - بناء منصتك بثقة" 
      : "SaaS Platform - Build with Confidence"
    const description = isArabic
      ? "حل متكامل من المستوى الأول مع دعم متعدد اللغات وتصميم حديث وميزات قوية"
      : "Enterprise-grade SaaS solution with multilingual support, modern design, and powerful features"

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "keywords",
          content: isArabic
            ? "SaaS, منصة, متعدد اللغات, عربي"
            : "SaaS, platform, multilingual, English",
        },
      ],
    }
  },
  component: LocalizedIndex,
})

function LocalizedIndex() {
  return <LandingPage />
}
