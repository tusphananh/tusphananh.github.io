import Footer from '@/components/common/footer';
import './globals.css';

import { AppDock } from '@/components/common/app-dock';
import { ThemeProvider } from '@/components/common/theme-provider';
import { StarsBackground } from '@/components/ui/stars-background';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TUSPHANANH',
  description: 'Global, Professional, Innovative',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <AppDock />
          <StarsBackground className='fixed' starDensity={0.001} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
