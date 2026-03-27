import type { Locale } from "@/lib/i18n"

export interface FeaturesSectionProps {
  locale: Locale
}

export function FeaturesSection({ locale }: FeaturesSectionProps) {
  const isArabic = locale === "ar"

  const content = {
    title: isArabic ? "ميزات قوية" : "Powerful Features",
    subtitle: isArabic ? "كل ما تحتاجه للنجاح" : "Everything you need to succeed",
    features: [
      {
        name: isArabic ? "دعم متعدد اللغات" : "Multilingual Support",
        description: isArabic
          ? "دعم سلس للغة الإنجليزية والعربية مع تخطيط RTL تلقائي"
          : "Seamless support for English and Arabic with automatic RTL layout",
      },
      {
        name: isArabic ? "ترجمات آمنة النوع" : "Type-Safe Translations",
        description: isArabic
          ? "ضمانات وقت الترجمة لجميع احتياجات التدويل الخاصة بك"
          : "Compile-time guarantees for all your internationalization needs",
      },
      {
        name: isArabic ? "مكونات واجهة مستخدم حديثة" : "Modern UI Components",
        description: isArabic
          ? "مكونات جميلة وسهلة الوصول مبنية مع shadcn/ui"
          : "Beautiful, accessible components built with shadcn/ui",
      },
      {
        name: isArabic ? "عرض من جانب الخادم" : "Server-Side Rendering",
        description: isArabic
          ? "صفحات سريعة وسهلة الاستخدام مع TanStack Start"
          : "Fast, SEO-friendly pages with TanStack Start",
      },
      {
        name: isArabic ? "دعم المظهر" : "Theme Support",
        description: isArabic
          ? "الوضع المظلم والفاتح المدمج مع تفضيلات المستخدم"
          : "Built-in dark and light mode with user preferences",
      },
      {
        name: isArabic ? "محسّن للأداء" : "Performance Optimized",
        description: isArabic
          ? "ترجمات بدون نفقات وأصول محملة بكسل"
          : "Zero-overhead translations and lazy-loaded assets",
      },
    ],
  }

  return (
    <section
      id="features"
      className="px-4 py-20 sm:py-32"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-sm font-semibold text-primary">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold leading-8">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
