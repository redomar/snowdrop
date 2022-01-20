import Head from 'next/head';
import Home from '@/components/home/Home';
import Footer from '@/components/home/Footer';
import { Headings, Meta } from '@/components/Heading';
import Navigation from '@/components/Navigation';

const indexMeta: Meta = {
  pageTitle: 'Snowdrop',
  pageDescription: 'Full stack developer, JavaScript enthusiast, Amatueur Photographer.',
  type: 'website',
  author: 'Mohamed Omar',
};

const Index = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <div className='flex flex-col h-[55vh]'>
        <Headings {...indexMeta} />
        <Navigation />
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
