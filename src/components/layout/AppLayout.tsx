import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return <div className={'app'}>{children}</div>;
};
