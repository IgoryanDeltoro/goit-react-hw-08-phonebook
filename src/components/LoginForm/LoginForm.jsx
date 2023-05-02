import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/authorization/operations';
import { FormBox } from 'container/formBox.styled';
import { RegisterText, SignUpLink, SubmitBox } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form.elements;
    dispatch(logInThunk({ email: email.value, password: password.value }));
    form.reset();
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
        <SubmitBox>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <RegisterText>
            If you haven't got an account, please
            <SignUpLink to="/register"> Sign up </SignUpLink>
          </RegisterText>
        </SubmitBox>
      </form>
    </FormBox>
  );
};
