import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import DecoFrame from '@/components/layout/DecoFrame';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'INTP Coach',
  description: 'Productivity coach for INTPs, powered by Perplexity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <DecoFrame>
            {children}
          </DecoFrame>
        </Providers>
      </body>
    </html>
  );
}
