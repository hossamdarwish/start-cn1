import type { Locale } from "@/lib/i18n"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"

export interface PricingSectionProps {
  locale: Locale
}

export function PricingSection({ locale }: PricingSectionProps) {
  const isArabic = locale === "ar"

  const content = {
    title: isArabic ? "أسعار بسيطة" : "Simple Pricing",
    subtitle: isArabic ? "اختر الخطة التي تناسب احتياجاتك" : "Choose the plan that fits your needs",
    plans: [
      {
        name: isArabic ? "المبتدئ" : "Starter",
        price: "$29",
        period: isArabic ? "في الشهر" : "per month",
        description: isArabic ? "مثالي للبدء" : "Perfect for getting started",
        features: isArabic
          ? ["ما يصل إلى 3 مشاريع", "تحليلات أساسية", "دعم المجتمع", "تخزين 1 جيجابايت"]
          : ["Up to 3 projects", "Basic analytics", "Community support", "1 GB storage"],
        cta: isArabic ? "ابدأ الآن" : "Get Started",
        highlighted: false,
      },
      {
        name: isArabic ? "متخصص" : "Professional",
        price: "$99",
        period: isArabic ? "في الشهر" : "per month",
        description: isArabic ? "للفرق النامية" : "For growing teams",
        features: isArabic
          ? ["مشاريع غير محدودة", "تحليلات متقدمة", "دعم أولوية", "تخزين 100 جيجابايت", "وصول API"]
          : ["Unlimited projects", "Advanced analytics", "Priority support", "100 GB storage", "API access"],
        cta: isArabic ? "ابدأ التجربة المجانية" : "Start Free Trial",
        badge: isArabic ? "الأكثر شهرة" : "Most Popular",
        highlighted: true,
      },
      {
        name: isArabic ? "مؤسسة" : "Enterprise",
        price: isArabic ? "مخصص" : "Custom",
        period: isArabic ? "تواصل معنا" : "Contact us",
        description: isArabic ? "للمنظمات الكبيرة" : "For large organizations",
        features: isArabic
          ? ["كل شيء في Pro", "دعم مخصص", "تكاملات مخصصة", "تخزين غير محدود", "ضمان SLA"]
          : ["Everything in Pro", "Dedicated support", "Custom integrations", "Unlimited storage", "SLA guarantee"],
        cta: isArabic ? "اتصل بفريق المبيعات" : "Contact Sales",
        highlighted: false,
      },
    ],
  }

  return (
    <section
      id="pricing"
      className="px-4 py-20 sm:py-32"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {content.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border transition-all ${
                plan.highlighted
                  ? "border-primary bg-card shadow-xl ring-1 ring-primary/20 lg:scale-105"
                  : "border-border bg-card"
              } p-8`}
            >
              {plan.badge && (
                <div className="absolute top-0 start-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge variant="default">{plan.badge}</Badge>
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  / {plan.period}
                </span>
              </div>

              <Button
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>

              <div className="mt-8 space-y-4 border-t border-border pt-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
