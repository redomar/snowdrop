import Head from 'next/head';
import Home from '@/components/home/Home';
import Footer from '@/components/home/Footer';
import styles from '@/styles/Home.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home />
      <Footer />
    </div>
  );
};

export default Index;
