import { useNavigate } from "@tanstack/react-router"
import type { Locale } from "@/lib/i18n"
import { getAlternateLocale } from "@/lib/i18n"
import { setLocaleCookie } from "@/lib/cookies"

export interface LanguageToggleProps {
  locale: Locale
}

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const navigate = useNavigate()
  const alternateLocale = getAlternateLocale(locale)

  const handleLanguageSwitch = () => {
    setLocaleCookie(alternateLocale)
    
    // Navigate to the same page with the alternate locale
    const currentPath = typeof window !== "undefined" 
      ? window.location.pathname.replace(/^\/(en|ar)?\//, "/")
      : "/"
    
    const newPath = alternateLocale === "en" 
      ? currentPath 
      : `/ar${currentPath}`
    
    window.location.href = newPath
  }

  return (
    <button
      onClick={handleLanguageSwitch}
      className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted gap-2"
    >
      <span className="text-sm font-medium">
        {locale === "ar" ? "English" : "العربية"}
      </span>
    </button>
  )
}
