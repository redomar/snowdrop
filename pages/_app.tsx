import type { AppProps } from 'next/app';
import '../styles/index.css';
import '@components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
export default MyApp;
