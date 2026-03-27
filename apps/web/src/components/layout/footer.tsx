import type { Locale } from "@/lib/i18n"

export interface FooterSectionProps {
  locale: Locale
}

export function FooterSection({ locale }: FooterSectionProps) {
  const isArabic = locale === "ar"

  const content = {
    company: isArabic ? "الشركة" : "Company",
    product: isArabic ? "المنتج" : "Product",
    resources: isArabic ? "الموارد" : "Resources",
    legal: isArabic ? "قانوني" : "Legal",
    links: {
      about: isArabic ? "حول" : "About",
      blog: isArabic ? "مدونة" : "Blog",
      careers: isArabic ? "وظائف" : "Careers",
      features: isArabic ? "الميزات" : "Features",
      pricing: isArabic ? "الأسعار" : "Pricing",
      docs: isArabic ? "الوثائق" : "Documentation",
      api: isArabic ? "مرجع API" : "API Reference",
      community: isArabic ? "المجتمع" : "Community",
      privacy: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
      terms: isArabic ? "شروط الخدمة" : "Terms of Service",
    },
    copyright: isArabic 
      ? "© 2026 منصة SaaS. جميع الحقوق محفوظة."
      : "© 2026 SaaS Platform. All rights reserved.",
  }

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="font-semibold">{content.company}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.about}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.blog}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold">{content.product}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.features}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.pricing}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold">{content.resources}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.docs}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.api}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.community}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold">{content.legal}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {content.links.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
