import NextLink from 'next/link';
import { useTheme } from 'next-themes';
import { PropsWithoutRef } from 'react';

interface NavigationProps {
  isMounted?: boolean;
}

const Navigation = ({ isMounted = true }: PropsWithoutRef<NavigationProps>): JSX.Element => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className='shadow-sm flex items-center justify-between w-full max-w-full p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav bg-opacity-60 dark:bg-black  dark:bg-opacity-60 dark:text-gray-100'>
      <button
        aria-label='Toggle Dark Mode'
        type='button'
        className='w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
        {isMounted && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            stroke='currentColor'
            className='w-4 h-4 text-gray-800 dark:text-gray-200'>
            {resolvedTheme === 'dark' ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            )}
          </svg>
        )}
      </button>
      <div>
        <NextLink href='/'>
          <a className='p-1 text-gray-900 sm:p-4 dark:text-gray-100'>Home</a>
        </NextLink>
        <NextLink href='/links'>
          <a className='p-1 text-gray-900 sm:p-4 dark:text-gray-100'>Links</a>
        </NextLink>
        <NextLink href='/blog'>
          <a className='p-1 text-gray-900 sm:p-4 dark:text-gray-100'>Blog</a>
        </NextLink>
        <NextLink href='/games/chess'>
          <a className='p1 text-gray-900 sm:p-4 dark:text-gray-100'>Chess</a>
        </NextLink>
        <NextLink href='/about'>
          <a className='p-1 text-gray-900 sm:p-4 dark:text-gray-100'>About</a>
        </NextLink>
      </div>
    </nav>
  );
};

export default Navigation;
