import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';

type Posts = { posts: any[] | null };

const Blog = ({ posts }: Posts) => {
  return (
    <Container article={true}>
      {
        // display title for each post
        posts?.map((post) => (
          <>
            <MDXComponents.h2 key={post._id}>{post.title}</MDXComponents.h2>
            <div>{ }</div>
          </>
        ))
      }
    </Container>
  );
};

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
