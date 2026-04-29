import type { Metadata } from 'next';
import { Lora, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

import JsonLd from '@/components/JsonLd';

// ... imports remain the same

export const metadata: Metadata = {
  metadataBase: new URL('https://islandcuisineclt.com'),
  title: {
    default: 'Island Cuisine | Authentic Caribbean Restaurant in Charlotte, NC',
    template: '%s | Island Cuisine Charlotte'
  },
  description: 'Experience the vibrant flavors of the Caribbean at Island Cuisine in Charlotte, NC. Fresh jerk chicken, oxtail, curry dishes, and authentic island flavors.',
  keywords: ['Caribbean restaurant Charlotte NC', 'Jamaican food Charlotte', 'island cuisine', 'jerk chicken', 'oxtail', 'Caribbean food delivery', 'authentic Jamaican'],
  authors: [{ name: 'Suzette Miller', url: 'https://islandcuisineclt.com' }],
  creator: 'Island Cuisine',
  publisher: 'Island Cuisine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Island Cuisine | Authentic Caribbean Restaurant',
    description: 'Experience the vibrant flavors of the Caribbean at Island Cuisine in Charlotte, NC.',
    url: 'https://islandcuisineclt.com',
    siteName: 'Island Cuisine Charlotte',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Island Cuisine Charlotte',
    description: 'Authentic Caribbean flavors in Charlotte, NC',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#E87A5D" />
        <JsonLd />
      </head>
      <body className={`${lora.variable} ${montserrat.variable} font-sans antialiased`}>
        <div id="home" /> {/* Anchor for scroll */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
