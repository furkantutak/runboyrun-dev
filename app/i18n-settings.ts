export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function getOptions(lng = i18n.defaultLocale, ns = 'common') {
  return {
    // debug: true,
    supportedLngs: i18n.locales,
    fallbackLng: i18n.defaultLocale,
    lng,
    fallbackNS: 'common',
    defaultNS: 'common',
    ns
  };
} 