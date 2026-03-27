import { Link, useNavigate } from "@tanstack/react-router"
import type { Locale } from "@/lib/i18n"
import { getAlternateLocale } from "@/lib/i18n"
import { Button } from "@workspace/ui/components/button"
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
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLanguageSwitch}
      className="gap-2"
    >
      <span className="text-sm font-medium">
        {locale === "ar" ? "English" : "العربية"}
      </span>
    </Button>
  )
}
