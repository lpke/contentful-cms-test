import Providers from '@/Providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Contentful CMS Test',
  description: 'Contentful with NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="m-auto max-w-5xl p-2 pt-8 md:p-8">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
