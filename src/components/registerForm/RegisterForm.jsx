import { useDispatch } from 'react-redux';
import css from '../registerForm/RegisterForm.module.css';
import { signUpThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, name, password } = form.elements;

    dispatch(
      signUpThunk({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    form.reset();
    navigation('/contacts');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
