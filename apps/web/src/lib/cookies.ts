import type { Locale } from "./i18n"

const LOCALE_COOKIE_NAME = "language"
const THEME_COOKIE_NAME = "theme"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

export function setLocaleCookie(locale: Locale, response?: Response) {
  const cookie = `${LOCALE_COOKIE_NAME}=${locale}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`
  
  if (typeof document !== "undefined") {
    document.cookie = cookie
  }
  
  if (response) {
    response.headers.append("Set-Cookie", cookie)
  }
}

export function getLocaleFromCookie(): Locale | null {
  if (typeof document === "undefined") return null
  
  const cookies = document.cookie.split(";")
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=")
    if (name === LOCALE_COOKIE_NAME) {
      return (value as Locale) || null
    }
  }
  
  return null
}

export function setThemeCookie(theme: "light" | "dark", response?: Response) {
  const cookie = `${THEME_COOKIE_NAME}=${theme}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`
  
  if (typeof document !== "undefined") {
    document.cookie = cookie
  }
  
  if (response) {
    response.headers.append("Set-Cookie", cookie)
  }
}

export function getThemeFromCookie(): "light" | "dark" | null {
  if (typeof document === "undefined") return null
  
  const cookies = document.cookie.split(";")
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=")
    if (name === THEME_COOKIE_NAME) {
      return (value as "light" | "dark") || null
    }
  }
  
  return null
}
