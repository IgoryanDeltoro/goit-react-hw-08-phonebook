import PropTypes from 'prop-types';
import css from '../form/Form.module.css';
const shortid = require('shortid');

const Form = ({ submit, change, name, number }) => {
  const nameID = shortid.generate();
  const numberID = shortid.generate();
  return (
    <form className={css.form} onSubmit={submit}>
      <label className={css.label} htmlFor={nameID}>
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        id={nameID}
        value={name}
        onChange={change}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor={numberID}>
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        id={numberID}
        value={number}
        onChange={change}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Form;
