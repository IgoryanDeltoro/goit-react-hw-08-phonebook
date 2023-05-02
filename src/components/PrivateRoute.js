import { useAuth } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};
