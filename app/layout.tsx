import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const font = Open_Sans({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'reviewED',
  description: 'Find the best courses for you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
