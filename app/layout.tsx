import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Footprint Scanner — Check Your Email Privacy Risk',
  description:
    'Free tool to check if your email appears in data breaches. Get a privacy risk score instantly. No data stored.',
  keywords: [
    'email breach check',
    'digital footprint',
    'privacy scanner',
    'have i been pwned',
    'data breach checker',
  ],
  authors: [{ name: 'Shahriyar Fahim' }],
  openGraph: {
    title: 'Digital Footprint Scanner',
    description: 'Check if your email is exposed in data breaches. Free, open source.',
    type: 'website',
    url: 'https://your-domain.vercel.app',
  },
  twitter: {
    card: 'summary',
    title: 'Digital Footprint Scanner',
    description: 'Free email breach and privacy risk checker.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} dark`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-black text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
