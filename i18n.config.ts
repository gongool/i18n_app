export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    directions: {
      en: 'ltr',
      ar: 'rtl'
    }
  } as const
  
  export type Locale = (typeof i18n)['locales'][number]