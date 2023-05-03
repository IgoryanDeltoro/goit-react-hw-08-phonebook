import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/authorization/operations';
import { FormBox } from 'container/formBox.styled';
import { useAuth } from 'hooks';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

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
  };
  return (
    <FormBox>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            required
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
            required
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
            required
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        {error === 'register: 400' && (
          <div
            style={{ color: 'red', marginBottom: '15px' }}
            id="emailHelp"
            className="form-text"
          >
            Your email already exists or the password is less than 7 characters
            long.
          </div>
        )}
      </form>
    </FormBox>
  );
};

export default RegisterForm;
