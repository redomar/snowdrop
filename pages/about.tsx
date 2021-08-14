import Container from '@/components/Container';
import AboutInfo from '@/components/markdown/About.mdx';
// import styles from '@/styles/Home.module.css';

const About = () => {
  return (
    <Container>
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        <AboutInfo />
      </article>
    </Container>
  );
};

export default About;
