import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import BlueTwitterLogo from '../public/twitter/blue-circle.svg';
import Image from 'next/image';
import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';
interface IGithubUser {
  github: Endpoints['GET /user']['response']['data'];
}

interface ILink {
  name: string;
  link: string;
  src: string;
  alt: string;
  logo?: any;
  followers?: number;
  user: string;
}

const Link = ({ name, src, alt, logo, user, link, followers }: ILink) => {
  return (
    <div
      className='relative border hover:border-black dark:hover:border-white 
      dark:hover:bg-gray-900 hover:cursor-pointer rounded flex flex-col w-full p-2
      md:flex-row md:p-3 md:pt-4'
      onClick={(e) => {
        e.preventDefault;
        window.open(link, '_blank');
      }}>
      <img
        src={src}
        alt={alt}
        className='w-full md:w-[100px] md:h-[100px] rounded '
        width='100px'
      />
      {logo ? (
        <span className='h-10 w-10 -mt-11 relative ml-auto mr-1 md:-mt-3 md:-ml-4'>
          <Image
            src={logo}
            layout='fill'
            objectFit='fill'
            alt={`${name}'s logo`}
            width='40px'
            height='40px'
          />
        </span>
      ) : (
        <span className='ml-5'></span>
      )}
      <span className='w-full md:mt-3'>
        <MDXComponents.h2>{name}</MDXComponents.h2>
        <span className='text-blue-700 dark:text-blue-300 tracking-tighter'>{user}</span>
        {followers && <span className='block'>Followers: {followers}</span>}
      </span>
    </div>
  );
};

const Links = ({ github }: IGithubUser) => {
  return (
    <Container>
      <div className='self-center mt-2'>
        <MDXComponents.h1>Places you can find me online</MDXComponents.h1>
        <div className='grid grid-cols-2 gap-3 md:grid-cols-1'>
          <Link
            name='Twitter'
            link='https://twitter.com/mohamedomaru'
            src='https://pbs.twimg.com/profile_images/1231071307141390336/hWw2_Nwu_400x400.jpg'
            alt='image of author'
            logo={BlueTwitterLogo}
            user='@MohamedOmaru'
          />
          <Link
            name='Github'
            link={github.html_url}
            src={github.avatar_url}
            followers={github.followers}
            alt='image of author'
            user={github.login}
          />
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const PAT = process.env.GITHUB_PAT;
  const octokit = new Octokit({ auth: PAT });

  const response = await octokit.request('GET /user');
  const github = response.data;

  return {
    props: {
      github,
    },
  };
}
export default Links;
