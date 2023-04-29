import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectRefreshing,
  selectToken,
  selectUser,
} from 'redux/authorization/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    token,
    user,
  };
};
