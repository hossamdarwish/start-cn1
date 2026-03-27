import type { Locale } from "@/lib/i18n"

export interface HeroSectionProps {
  locale: Locale
}

// Simple button implementation
function Button({ children, variant = "default", ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-colors"
  const variantClasses = variant === "default" 
    ? "bg-primary text-primary-foreground hover:bg-primary/80"
    : "border border-input hover:bg-muted"
  
  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  )
}

export function HeroSection({ locale }: HeroSectionProps) {
  const isArabic = locale === "ar"
  
  const content = {
    title: isArabic 
      ? "بناء منصة SaaS الخاصة بك بثقة"
      : "Build Your SaaS Platform with Confidence",
    subtitle: isArabic
      ? "حل من المستوى الأول مع دعم متعدد اللغات وتصميم حديث"
      : "Enterprise-grade solution with multilingual support and modern design",
    ctaPrimary: isArabic ? "ابدأ الآن" : "Get Started",
    ctaSecondary: isArabic ? "اعرف المزيد" : "Learn More",
    badge: isArabic ? "الآن مع دعم العربية" : "Now with Arabic Support",
  }

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">
              {content.badge}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center">
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            {content.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
            <Button
              size="lg"
              className="font-semibold"
            >
              {content.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold"
            >
              {content.ctaSecondary}
            </Button>
          </div>

          {/* Decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="relative h-80 w-full max-w-2xl rounded-lg border border-border bg-muted/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
