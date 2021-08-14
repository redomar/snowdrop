import { ReactNode } from 'react';
import styles from '@/styles/Home.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      New Blog
      <article className={styles.card}>{children}</article>
    </div>
  );
};

export default Layout;
