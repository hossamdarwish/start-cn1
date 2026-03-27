import { Link } from "@tanstack/react-router"
import type { Locale } from "@/lib/i18n"
import { Button } from "@workspace/ui/components/button"
import { LanguageToggle } from "../navigation/language-toggle"

export interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          to={locale === "ar" ? "/ar/" : "/"}
          className="flex items-center gap-2 text-xl font-bold"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span>S</span>
          </div>
          <span className="hidden sm:inline">
            {locale === "ar" ? "منصة SaaS" : "SaaS Platform"}
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            to={locale === "ar" ? "/ar/" : "/"}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {locale === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {locale === "ar" ? "الميزات" : "Features"}
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {locale === "ar" ? "الأسعار" : "Pricing"}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle locale={locale} />
          <Button variant="default" size="sm">
            {locale === "ar" ? "ابدأ الآن" : "Get Started"}
          </Button>
        </div>
      </div>
    </header>
  )
}
