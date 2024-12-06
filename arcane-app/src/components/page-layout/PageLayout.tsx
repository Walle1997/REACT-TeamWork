import { memo } from 'react';
import Header from '../header/Header';
import './style.css';

type LayoutProps = {
  children: React.ReactNode
};

function PageLayout({ children }: LayoutProps ) {

  return (
    <div className={'PageLayout'}>
      <Header/>
      <div>{children}</div>
    </div>
  );
}

export default memo(PageLayout);
