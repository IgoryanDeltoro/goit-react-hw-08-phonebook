import PropTypes from 'prop-types';
import css from '../contactItems/ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';

const ContactItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <tr className={css.tableRow}>
      <td className={css.tableText}>
        <p className={css.description}>{name}</p>
      </td>
      <td>
        <span className={css.span}>{number}</span>
      </td>
      <td className={css.buttonBox}>
        <button
          className={css.button}
          onClick={() => dispatch(deleteContactThunk(id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItems;
