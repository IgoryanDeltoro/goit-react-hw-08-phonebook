// import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'container/Container.styled';
import ResponsiveAppBar from 'components/appBar/AppBars';

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Suspense fallback={<>Loading page...</>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
