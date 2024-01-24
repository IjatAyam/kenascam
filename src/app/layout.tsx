import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description: 'Malaysia scam directory',
  title: 'KenaScam',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider>
        <body className={`${inter.className} flex min-h-dvh flex-col`}>{children}</body>
      </Provider>
    </html>
  );
}
