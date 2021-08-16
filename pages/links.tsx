import Container from '@/components/Container';
import MDXComponents from '@/components/MDXComponents';
import BlueTwitterLogo from '../public/twitter/blue-circle.svg';
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
      className='relative border hover:border-black dark:hover:border-white 
      dark:hover:bg-gray-900 hover:cursor-pointer rounded flex flex-col w-full p-2
      md:flex-row md:p-3 md:pt-4'
      onClick={(e) => {
        e.preventDefault;
        window.open(link, '_blank');
      }}>
      <img src={src} alt={alt} className='w-full md:w-24 rounded ' />
      {logo && (
        <span className='h-10 w-10 -mt-11 relative ml-auto mr-1 md:-mt-3 md:-ml-4'>
          <Image src={logo} layout='fill' objectFit='fill' />
        </span>
      )}
      <span className='w-full md:mt-3'>
        <MDXComponents.h4>{name}</MDXComponents.h4>
        <span>{user}</span>
      </span>
    </div>
  );
};

const Links = () => {
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
        </div>
      </div>
    </Container>
  );
};

export default Links;
