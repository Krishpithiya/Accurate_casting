import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://accuratecasting.com'),
  title: 'Accurate Casting | Precision Investment Casting Manufacturer',
  description:
    'Accurate Casting is a premier manufacturer of high-quality Investment Casting products catering to both domestic and international markets in Rajkot, Gujarat.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Accurate Casting | Precision Investment Casting',
    description:
      'Melt-in Fidelity. Production capacity of 550 MT per annum for Carbon Steel, Alloy Steel, Stainless Steel, and Super Alloys.',
    url: 'https://accuratecasting.com',
    siteName: 'Accurate Casting',
    images: [
      {
        url: '/images/OUR-VISION.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
