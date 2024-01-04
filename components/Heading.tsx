import Head from 'next/head';
import React from 'react';

interface Meta {
  pageTitle: string;
  pageDescription: string;
  type: string;
  author: string;
}

function Headings({ pageTitle, pageDescription, type, author }: Meta): React.JSX.Element {
  return (
    <Head>
      <title key='title'>{pageTitle}</title>
      <meta key='description' content={pageDescription} name='description' />
      <meta key='type' property='og:type' content={type} />
      <meta key='site_name' property='og:site_name' content='Snowdrop' />
      <meta key='pg_title' property='og:title' content={pageTitle} />
      <meta key='pg_auth' property='og:author' content={author} />
      <meta key='pg_desc' property='og:description' content={pageDescription} />
    </Head>
  );
}

export { Headings };
export type { Meta };
