import Head from 'next/head';

interface Meta {
  pageTitle: string;
  pageDescription: string;
  type: string;
  author: string;
}

const Headings = ({ pageTitle, pageDescription, type, author }: Meta): JSX.Element => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageDescription} name='description' />
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content='Snowdrop' />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:author' content={author} />
      <meta property='og:description' content={pageDescription} />
    </Head>
  );
};

export { Headings };
export type { Meta };
