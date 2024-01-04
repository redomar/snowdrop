import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import NextLink from 'next/link';
import React from 'react';

type Post = {
  _createdAt: string;
  mainImage: object;
  _id: string;
  author: object;
  body: any[];
  _updatedAt: string;
  _rev: string;
  title: string;
  _type: string;
  slug: { current: string; _type: string };
  categories: any[];
};
type Posts = { posts: Post[] | null };

function Blog({ posts }: Posts) {
  return (
    <Container article key='i'>
      {
        // display title for each post
        posts?.map((post) => (
          <React.Fragment key={post._id}>
            <NextLink href={`/blog/${post.slug.current}/`} key={post._id}>
              <span className='hover:text-[#0070f3] hover:cursor-pointer'>
                <MDXComponents.H2 key={post._id}>{post.title}</MDXComponents.H2>
              </span>
            </NextLink>
            <div>{}</div>
          </React.Fragment>
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
