import Container from '@/components/Container';
import imageUrlBuilder from '@sanity/image-url';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BlockContent from '@sanity/block-content-to-react';

type Post = {
  title: string;
  body: any[];
  image: any;
  post: any;
}

const Post = ({ title, body, image, post }: Post) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'vuk13jl1',
      dataset: 'production',
    });

    const url = imgBuilder.image(image).url();

    setImageUrl(url);
  }, [image]);

  console.log({ imageUrl }, { image });

  return (
    <Container article={true}>
      <div>{title}</div>
      {imageUrl && <Image src={imageUrl} width='100vw' height='100vh' />}
      <BlockContent blocks={body} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Post> = async (pageContext) => {
  const { slug } = pageContext.query;

  // No slug
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${slug}" ]`);
  const url = `https://vuk13jl1.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((response) => response.json());

  const post = await result?.result?.[0];

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: post.title,
      body: post.body,
      image: post.mainImage,
      post,
    },
  };
};

export default Post;
