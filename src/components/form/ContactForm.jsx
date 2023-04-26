import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Form from './form/Form';
import { selectContacts } from 'redux/selectors';
import { createContactThunk } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const index = contacts.findIndex(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (index === -1) {
      dispatch(createContactThunk({ name, phone }));
      reset();
      return;
    }
    hendleCoincidence(name);
    reset();
  };

  const hendleCoincidence = name => {
    alert(`${name} is already in contacts`);
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form
      submit={hendleSubmit}
      change={handleChange}
      name={name}
      phone={phone}
    ></Form>
  );
};

export default ContactForm;
