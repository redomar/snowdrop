import { ReactNode } from 'react';

const MDXComponents = {
  h1: (props: ReactNode) => <h1 className='text-5xl font-black tracking-tight' {...props} />,
  h2: (props: ReactNode) => <h2 className='text-4xl font-bold ' {...props} />,
  h3: (props: ReactNode) => <h3 className='text-3xl font-bold ' {...props} />,
  h4: (props: ReactNode) => <h3 className='text-2xl font-bold tracking-wide' {...props} />,
  h5: (props: ReactNode) => <h3 className='text-xl font-bold tracking-wider' {...props} />,
  h6: (props: ReactNode) => <h3 className='text-lg font-bold tracking-wider' {...props} />,
};

export default MDXComponents;
