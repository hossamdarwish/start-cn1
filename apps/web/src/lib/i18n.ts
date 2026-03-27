export type Locale = "en" | "ar"

export const DEFAULT_LOCALE: Locale = "en"
export const SUPPORTED_LOCALES: Locale[] = ["en", "ar"]

export function isValidLocale(locale: string | undefined): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale)
}

export function normalizeLocale(locale: string | undefined): Locale {
  if (isValidLocale(locale)) {
    return locale
  }
  return DEFAULT_LOCALE
}

export function getLocaleDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr"
}

export function getLocaleHtmlLang(locale: Locale): string {
  return locale === "ar" ? "ar" : "en"
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en"
}
