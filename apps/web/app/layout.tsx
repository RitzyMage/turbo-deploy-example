import type { Metadata } from 'next';
import { Oswald, Cinzel } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';

const oswald = Oswald({ subsets: ['latin'] });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-header' });

export const metadata: Metadata = {
  title: 'Example Deployment',
  description: 'for codeathon 2023-11-17',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} ${cinzel.variable} bg-slate-800 text-slate-100 flex flex-col items-center min-h-screen`}>
        <Header />
        <div className="flex flex-col justify-stretch flex-grow w-prose w-full max-w-prose">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
