// app/layout.tsx
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />

        {pathname === '/' && <Hero />}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
