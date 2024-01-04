import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      New Blog
      <article>{children}</article>
    </div>
  );
}

export default Layout;
