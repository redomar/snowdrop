import styles from '@/styles/Home.module.css';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      New Blog
      <article>{children}</article>
    </div>
  );
};

export default Layout;
