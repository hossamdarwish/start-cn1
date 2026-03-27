import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import "@/globals.css"

import { getLocaleDirection, getLocaleHtmlLang, normalizeLocale } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n"

export const Route = createRootRoute({
  head: () => {
    const locale = normalizeLocale(undefined) as Locale
    const isArabic = locale === "ar"
    
    const title = isArabic ? "منصة SaaS - بناء منصتك بثقة" : "SaaS Platform - Build with Confidence"
    const description = isArabic
      ? "منصة SaaS متكاملة مع دعم كامل للغة العربية وتصميم حديث"
      : "Comprehensive SaaS platform with full Arabic support and modern design"

    return {
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
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
          name: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      links: [
        {
          rel: "canonical",
          href: locale === "ar" ? "https://saasplatform.com/ar/" : "https://saasplatform.com/",
        },
        {
          rel: "alternate",
          hrefLang: "en",
          href: "https://saasplatform.com/",
        },
        {
          rel: "alternate",
          hrefLang: "ar",
          href: "https://saasplatform.com/ar/",
        },
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: "https://saasplatform.com/",
        },
      ],
    }
  },
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
