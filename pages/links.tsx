import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import whiteTwitter from '../public/twitter/blue-circle.svg';
import Image from 'next/image';

interface ILink {
  name: string;
  link: string;
  src: string;
  alt: string;
  logo?: any;
  user: string;
}

const Link = (props: ILink) => {
  const { name, src, alt, logo, user, link } = props;
  return (
    <div
      className='relative border hover:border-black dark:hover:border-white dark:hover:bg-gray-900 hover:cursor-pointer rounded flex flex-col w-full p-2'
      onClick={(e) => {
        e.preventDefault;
        window.open(link, '_blank');
      }}>
      <img src={src} alt={alt} className='w-full rounded ' />
      {logo && (
        <span className='h-10 w-10 -mt-11 relative ml-auto mr-1'>
          <Image src={logo} layout='fill' objectFit='fill' />
        </span>
      )}
      <MDXComponents.h4>{name}</MDXComponents.h4>
      <span>{user}</span>
    </div>
  );
};

const Links = () => {
  return (
    <Container>
      <div className='self-center mt-2'>
        <MDXComponents.h1>Places you can find me online</MDXComponents.h1>
        <div className='grid grid-cols-3 gap-3'>
          <Link
            name='Twitter'
            link='https://twitter.com/mohamedomaru'
            src='https://pbs.twimg.com/profile_images/1231071307141390336/hWw2_Nwu_400x400.jpg'
            alt='image of author'
            logo={whiteTwitter}
            user='@MohamedOmaru'
          />
        </div>
      </div>
    </Container>
  );
};

export default Links;
