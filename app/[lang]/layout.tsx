import type { Metadata } from 'next';
import Headers from '@/components/common/Header/headers';
import { Inter } from 'next/font/google';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/common/Theme/theme-provider';
import { Locale, i18n } from '@/i18n.config';
import { Toaster } from '@/components/ui/sonner';


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Headers lang={params.lang} />
          {children}
          <Toaster position='top-center' />
        </ThemeProvider>
      </body>
    </html>
  );
}
