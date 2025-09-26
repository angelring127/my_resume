import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// 지원하는 언어 목록
export const locales = ["en", "ko", "ja"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // 지원하지 않는 언어인 경우 404 페이지로 리다이렉트
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
