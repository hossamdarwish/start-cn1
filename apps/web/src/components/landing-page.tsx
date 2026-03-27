import { useParams } from "@tanstack/react-router"
import type { Locale } from "@/lib/i18n"
import { normalizeLocale, getAlternateLocale, getLocaleDirection } from "@/lib/i18n"

export function LandingPage() {
  const params = useParams({ from: "/{-$locale}/" })
  const locale = normalizeLocale((params.locale as string | undefined)) as Locale
  const direction = getLocaleDirection(locale)
  const isArabic = locale === "ar"
  const alternateLocale = getAlternateLocale(locale)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100" dir={direction}>
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">
              {isArabic ? "منصة SaaS" : "SaaS Platform"}
            </div>
            <a
              href={alternateLocale === "ar" ? "/ar/" : "/"}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              {isArabic ? "English" : "العربية"}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            {isArabic ? "بناء منصة SaaS الخاصة بك" : "Build Your SaaS Platform"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
            {isArabic
              ? "حل متكامل من المستوى الأول مع دعم متعدد اللغات وتصميم حديث"
              : "Enterprise-grade solution with multilingual support and modern design"}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              {isArabic ? "ابدأ الآن" : "Get Started"}
            </button>
            <button className="rounded-lg border-2 border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:border-slate-400">
              {isArabic ? "اعرف المزيد" : "Learn More"}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            {isArabic ? "الميزات الرئيسية" : "Key Features"}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-4xl font-bold text-blue-600">0{i}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {isArabic ? `الميزة ${i}` : `Feature ${i}`}
                </h3>
                <p className="mt-2 text-slate-600">
                  {isArabic
                    ? "وصف الميزة بالعربية يظهر هنا"
                    : "Feature description goes here"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            {isArabic ? "الأسعار" : "Pricing"}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { name: isArabic ? "أساسي" : "Starter", price: "$29" },
              { name: isArabic ? "احترافي" : "Professional", price: "$79" },
              { name: isArabic ? "مشروع" : "Enterprise", price: "Custom" },
            ].map((plan) => (
              <div key={plan.name} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold text-blue-600">{plan.price}</p>
                <button className="mt-8 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
                  {isArabic ? "اختر الآن" : "Choose"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600">
            {isArabic ? "جميع الحقوق محفوظة" : "© 2024 All rights reserved"}
          </p>
        </div>
      </footer>
    </div>
  )
}
