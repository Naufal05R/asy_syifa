import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import localFont from '@next/font/local';
import { Footer, Navbar } from '@/components';
import { styles } from './styles';

const general = localFont({
  src: [
    {
      path: '../public/fonts/OTF/GeneralSans-Regular.otf',
      weight: '400',
    },
    {
      path: '../public/fonts/OTF/GeneralSans-Bold.otf',
      weight: '700',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Asy Syifa',
  description: "Ma'had Tahfizh Asy-Syifa",
  icons: {
    icon: {
      url: '/favicon.png',
      type: 'image/png',
    },
    shortcut: {
      url: '/favicon.png',
      type: 'image/png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={[general].join(' ')}
    >
      <head>
        <link
          rel='icon'
          href='/favicon.png'
          type='image/png'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          href='/favicon.png'
          type='image/png'
          sizes='any'
        />
      </head>
      <body className={`relative bg-white text-black`}>
        <header className='fixed z-20 top-0 w-full'>
          <Navbar className={`${styles.padding}`} />
        </header>
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
