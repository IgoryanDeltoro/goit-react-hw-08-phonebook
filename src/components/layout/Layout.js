import { AppBar } from 'components/appBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'container/Container.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<>Loading page...</>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
