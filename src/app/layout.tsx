import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import './globals.css';

const roboto = Roboto({
  variable: '--font-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    absolute: 'Rockstreamer - Your Ultimate Music Streaming Experience',
    template: '%s | Rockstreamer Frontend'
  },
  description:
    'Discover Rockstreamer, your ultimate music streaming experience. Enjoy a vast library of songs, personalized playlists, and seamless streaming on all your devices. Join us and rock out to your favorite tunes anytime, anywhere.',
  keywords: [
    'RockStreamer',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Frontend Assessment',
    'Video Player',
    'Carousel',
    'Dark Mode'
  ],
  authors: [
    {
      name: 'Sajal das',
      url: 'https://sajaldas-v2.netlify.app'
    }
  ],
  creator: 'Sajal Das',
  applicationName: 'RockStreamer Frontend',

  openGraph: {
    title: 'RockStreamer Frontend Coding Test',
    description:
      'Modern frontend implementation using Next.js App Router with video playback, carousel, and theme switching.',
    url: 'https://rockstreamer-frontend.vercel.app',
    siteName: 'RockStreamer Frontend',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'RockStreamer Frontend Preview'
      }
    ]
  },

  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className='min-h-[70vh]'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
