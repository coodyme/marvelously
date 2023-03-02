import '@styles/globals.css';
import '@styles/chrome.css';
import '@styles/utils.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google'
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}