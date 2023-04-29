import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import css from '../userMenu/UserMenu.module.css';
import { logOutThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigation = useNavigate();

  const hendleLogout = () => {
    dispatch(logOutThunk());
    navigation('/');
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={hendleLogout}>
        Logout
      </button>
    </div>
  );
};
