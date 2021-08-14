import Head from 'next/head';
import Home from '@/components/home/Home';
import Footer from '@/components/home/Footer';
import styles from '@/styles/Home.module.css';
import Container from '@/components/Container';

const Index = () => {
  return (
    <>
      <Container>
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>

          <Home />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
