import { setValueFilter } from 'redux/contacts/contactsSplice';
import css from '../filter/Filter.module.css';
import { useDispatch } from 'react-redux';

const shortid = require('shortid');

const Filter = () => {
  const dispatch = useDispatch();
  const filterID = shortid.generate();

  const hendleOnchange = event => {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setValueFilter(value));
  };

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.container}>
        <label className={css.label} htmlFor={filterID}>
          Find contacts by name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          id={filterID}
          onChange={hendleOnchange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </>
  );
};

export default Filter;
