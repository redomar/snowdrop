import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return <button className='bg-black text-white rounded-sm px-3 w-20 min-w-min'>{children}</button>;
}
