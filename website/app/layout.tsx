import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './globals.css';

type RootLayoutProps = {
  children: ReactNode;
};

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className="scroll-smooth" lang="en" suppressHydrationWarning>
    <body className={cn(sans.variable, mono.variable, 'font-sans antialiased')}>
      <div className="container mx-auto">{children}</div>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
