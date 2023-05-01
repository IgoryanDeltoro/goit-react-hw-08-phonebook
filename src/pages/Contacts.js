import ContactList from 'components/contactList/ContactList';
import ContactForm from 'components/form/ContactForm';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { token } = useAuth();

  useEffect(() => {
    token && dispatch(getContactsThunk());
  }, [dispatch, token]);

  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
};
