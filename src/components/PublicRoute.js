import { useAuth } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    children
  ) : (
    <Navigate to="/contacts" state={location} />
  );
};
