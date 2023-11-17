import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Example Deployment',
  description: 'for codeathon 2023-11-17',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100`}>{children}</body>
    </html>
  );
}
