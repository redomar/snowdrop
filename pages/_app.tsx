import type { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      {/* @ts-ignore */}
      <MDXProvider components={MDXComponents}>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
export default MyApp;
