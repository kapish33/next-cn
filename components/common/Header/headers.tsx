import React from 'react';
import { MainNavigationMenu } from './main-menu';
import { ThemeToggle } from '@/components/common/Theme/theme';
import { assets } from '@/assets';
import Image from 'next/image';
import LocaleSwitcher from '@/components/locale-switcher';
import Link from 'next/link';
import { Locale } from '@/i18n.config';

interface Hero {
  lang: Locale;
}

const Headers: React.FC<Hero> = ({ lang }) => {
  return (
    <div className='sticky top-0 left-0 w-full h-auto z-50 bg-white shadow-md px-4 py-2'>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <Link href={`/${lang}`}>
          <Image
            className='w-10 rounded-full md:block hidden'
            src={assets.header}
            alt={'alt'}
            width={40}
            height={40}
          />
        </Link>
        <MainNavigationMenu lang={lang} />
        <div className='flex gap-2'>
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Headers;
