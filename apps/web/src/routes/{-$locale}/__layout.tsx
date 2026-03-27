import { Outlet, createFileRoute } from "@tanstack/react-router"
import type { Locale } from "@/lib/i18n"
import { normalizeLocale } from "@/lib/i18n"

export const Route = createFileRoute("/{-$locale}/__layout")({
  validateSearch: (search: Record<string, any>) => search,
  component: LocaleLayout,
  parseParams: ({ locale }) => ({
    locale: normalizeLocale(locale),
  }),
  stringifyParams: ({ locale }) => ({
    locale: locale === "en" ? undefined : locale,
  }),
  head: ({ params }) => {
    const locale = params.locale as Locale
    const isArabic = locale === "ar"
    
    const title = isArabic ? "منصة SaaS - بناء منصتك بثقة" : "SaaS Platform - Build with Confidence"
    const description = isArabic
      ? "منصة SaaS متكاملة مع دعم كامل للغة العربية وتصميم حديث"
      : "Comprehensive SaaS platform with full Arabic support and modern design"
    
    const siteUrl = locale === "ar" ? "https://saasplatform.com/ar/" : "https://saasplatform.com/"

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
          name: "og:title",
          content: title,
        },
        {
          name: "og:description",
          content: description,
        },
        {
          name: "og:url",
          content: siteUrl,
        },
        {
          name: "og:locale",
          content: isArabic ? "ar_SA" : "en_US",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: siteUrl,
        },
      ],
    }
  },
})

function LocaleLayout() {
  return <Outlet />
}
