import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';
import { FormBox } from 'css/formBox.styled';

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
    <FormBox>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </FormBox>
  );
};
