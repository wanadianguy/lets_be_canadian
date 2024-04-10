import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import {Header} from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Let's be Canadian",
  description: 'Immigration helper',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
