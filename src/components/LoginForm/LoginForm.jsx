import { useDispatch } from 'react-redux';

import css from '../LoginForm/LoginForm.module.css';
import { logInThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form.elements;
    dispatch(logInThunk({ email: email.value, password: password.value }));
    form.reset();
    navigation('/contacts');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
