import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)
  const isRTL = lang === 'ar'

  return (
    <header className='py-6'>
      <nav className={`container flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between`}>
        <ul className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-x-8`}>
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}