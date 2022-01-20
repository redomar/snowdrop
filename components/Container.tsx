import { useState, useEffect } from 'react';
import { Headings, Meta } from './Heading';
import Navigation from './Navigation';

interface ContainerProps {
  article?: boolean;
}

const Container: React.FC<ContainerProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, article, ...customMeta } = props;
  const name: string = 'Mohamed Omar';

  const meta: Meta = {
    pageTitle: `${name} – Developer, Photographer.`,
    pageDescription: `Full stack developer, JavaScript enthusiast, Amatueur Photographer.`,
    // image: '',
    type: 'website',
    author: name,
    ...customMeta,
  };

  const mainArea = 'flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full';

  return (
    <div className='bg-white dark:bg-black'>
      <Headings {...meta} />
      <Navigation isMounted={mounted} />
      <main id='skip' className='flex flex-col justify-center px-8 bg-white dark:bg-black'>
        {article ? (
          <article className={mainArea}>{children}</article>
        ) : (
          <section className={mainArea}>{children}</section>
        )}

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Container;
