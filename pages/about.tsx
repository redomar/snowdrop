import Container from '@/components/Container';
import AboutInfo from '@/components/markdown/About.mdx';
// import styles from '@/styles/Home.module.css';

const About = () => {
  return (
    <Container article={true}>
      <AboutInfo />
    </Container>
  );
};

export default About;
