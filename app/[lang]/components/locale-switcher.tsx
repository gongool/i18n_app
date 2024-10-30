'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
   const currentLocale = pathName.split('/')[1]
  const isRTL = currentLocale === 'ar'
 


  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className={`flex gap-x-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`rounded-md border bg-black px-3 py-2 text-white
                ${locale === currentLocale ? 'bg-gray-800' : 'bg-black'}`}
            >
              {locale === 'ar' ? 'العربية' : 'English'}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}