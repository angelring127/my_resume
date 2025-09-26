import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// 지원하는 언어 목록
export const locales = ["en", "ko", "ja"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // locale が無い場合は既定の 'en' にフォールバックする
  const resolvedLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  };
});
