import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './layout/Layout';
// import { lazy } from 'react';
import { Home } from '../pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { getCurrentUserThunk } from 'redux/authorization/operations';

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
