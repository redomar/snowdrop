import { ReactNode } from 'react';

type ReactProps =
  | ReactNode
  | {
      children: string;
    };

const MDXComponents = {
  h1: (props: ReactProps) => <h1 className='text-5xl font-black tracking-tight mb-2 ' {...props} />,
  h2: (props: ReactProps) => <h2 className='text-4xl font-bold mb-2 ' {...props} />,
  h3: (props: ReactProps) => <h3 className='text-3xl font-medium  mb-2 ' {...props} />,
  h4: (props: ReactProps) => <h4 className='text-2xl font-medium tracking-wide mb-2 ' {...props} />,
  h5: (props: ReactProps) => <h5 className='text-xl font-medium tracking-wider mb-2 ' {...props} />,
  h6: (props: ReactProps) => <h6 className='text-lg font-light tracking-widest mb-2 ' {...props} />,
  p: (props: ReactProps) => <p className='text-gray-600 dark:text-gray-400 mb-8' {...props} />,
};

export default MDXComponents;
