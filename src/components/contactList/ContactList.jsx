/* eslint-disable array-callback-return */

import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectValueFilter,
} from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import ContactItems from './contactItems/ContactItems';
import css from '../contactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectValueFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <h2 className={css.loadingText}>Loading...</h2>}
      {error && <h2 className={css.errorText}>{error}</h2>}
      <table className={css.table}>
        <tbody>
          {contacts.map(({ id, name, number }) => {
            const lowerCase = name.toLowerCase();
            if (lowerCase.includes(filter)) {
              return (
                <ContactItems key={id} id={id} name={name} number={number} />
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
