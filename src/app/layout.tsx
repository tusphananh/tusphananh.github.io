import Footer from '@/components/common/footer';
import './globals.css';

import { AppDock } from '@/components/common/app-dock';
import { ThemeProvider } from '@/components/common/theme-provider';
import Orbiting from '@/components/magicui/orbiting';
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
  title: 'tusphananh',
  description: 'Global Engineer, Professional, Innovative',
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
          <div className='fixed z-0 h-full w-full'>
            <Orbiting duration={20} delay={20} radius={200} path>
              <div className='h-44 w-44 rounded-full bg-red-500/80 bg-gradient-to-r from-sky-500/80 to-teal-500/80 blur-2xl' />
            </Orbiting>

            <Orbiting duration={20} delay={20} radius={400} reverse path>
              <div className='h-72 w-72 rounded-full bg-red-500/80 bg-gradient-to-r from-violet-500/80 to-rose-500/80 blur-3xl' />
            </Orbiting>
          </div>
          <StarsBackground className='fixed' starDensity={0.0003} />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
