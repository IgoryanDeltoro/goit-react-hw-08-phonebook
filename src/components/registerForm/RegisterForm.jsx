import { useDispatch } from 'react-redux';
// import css from '../registerForm/RegisterForm.module.css';
import { signUpThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';
import { FormBox } from 'css/formBox.styled';

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
    <FormBox>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Email address
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="exampleInputName1"
          />
        </div>
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
          Register
        </button>
      </form>
    </FormBox>
  );
};
