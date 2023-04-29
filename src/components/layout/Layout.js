import { AppBar } from 'components/appBar/AppBar';
import css from '../layout/Layout.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={<>Loading page...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
