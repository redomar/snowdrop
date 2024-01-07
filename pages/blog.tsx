import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import NextLink from 'next/link';
import React from 'react';

type Post = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: object;
  body: any[];
  categories: any[];
  mainImage: object;
  slug: { current: string; _type: string };
  title: string;
};
type Posts = { posts: Post[] | null };

function Blog({ posts }: Posts) {
  return (
    <Container article key='i'>
      {
        // display title for each post
        posts?.map((post) => (
          <div key={post._id} className='w-full flex mb-2 p-2'>
            <NextLink href={`/blog/${post.slug.current}/`} key={post._id}>
              <span className='hover:text-[#0070f3] hover:cursor-pointer'>
                <MDXComponents.h2 key={post._id}>{post.title}</MDXComponents.h2>
                <span>{post._createdAt}</span>
              </span>
            </NextLink>
            <div>{}</div>
          </div>
        ))
      }
    </Container>
  );
}

export const getStaticProps = async () => {
  const query = `*[ _type == "post" ]`;
  const url = `https://vuk13jl1.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((response) => response.json());

  const posts: Posts = await result?.result;

  if (!posts) {
    return {
      props: {
        posts: [],
      },
    };
  }

  return {
    props: { posts },
  };
};

export default Blog;
