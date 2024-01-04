/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import Image from 'next/image';
import { Octokit } from '@octokit/core';
import { Endpoints, OctokitResponse } from '@octokit/types';
import BlueTwitterLogo from '../public/twitter/blue-circle.svg';

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

function Link({ name, src, alt, logo, user, link, followers }: ILink) {
  // Add href parameter
  return (
    <a
      href={link}
      role='button'
      className='relative border hover:border-black dark:hover:border-white 
      dark:hover:bg-gray-900 hover:cursor-pointer rounded flex flex-col w-full p-2
      md:flex-row md:p-3 md:pt-4'
      onClick={(e) => {
        e.preventDefault();
        window.open(link, '_blank');
      }}>
      <Image
        src={src}
        alt={alt}
        className='w-full md:w-[100px] md:h-[100px] rounded'
        width={100}
        height={100}
      />
      {logo ? (
        <span className='h-10 w-10 -mt-11 relative ml-auto mr-1 md:-mt-3 md:-ml-4'>
          <Image src={logo} alt={`${name}'s logo`} width={40} height={40} />
        </span>
      ) : (
        <span className='ml-5' />
      )}
      <span className='w-full md:mt-3'>
        <MDXComponents.h2>{name}</MDXComponents.h2>
        <span className='text-blue-700 dark:text-blue-300 tracking-tighter'>{user}</span>
        {followers && <span className='block'>Followers: {followers}</span>}
      </span>
    </a>
  );
}

function Links({ github }: IGithubUser) {
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
}

const getStaticProps = async () => {
  const PAT: string | undefined = process.env.GITHUB_PAT;
  const octokit: Octokit = new Octokit({ auth: PAT });

  const response: OctokitResponse<OctokitResponse<IGithubUser, number>, number> | null =
    (await octokit
      .request<OctokitResponse<IGithubUser>>({
        method: 'GET',
        url: '/user',
      })
      .catch(() => {})) as any;

  if (response?.status === 200) {
    const github: OctokitResponse<IGithubUser, number> = response?.data;

    return {
      props: {
        github,
      },
    };
  }
  return {
    notFound: true,
  };
};

export default Links;
export { getStaticProps };
