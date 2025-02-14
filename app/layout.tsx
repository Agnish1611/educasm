import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager } from '@/components/shared/GoogleTagManager';
import '@/styles/globals.css';
import { Providers } from './providers';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <GoogleTagManager /> */}
          <div className="min-h-screen bg-background text-white">
            <Toaster position="top-right" />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}