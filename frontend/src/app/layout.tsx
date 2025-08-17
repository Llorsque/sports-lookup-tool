import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sports Lookup Tool',
  description: 'Snelle en accurate informatie over sporters voor commentatoren.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
