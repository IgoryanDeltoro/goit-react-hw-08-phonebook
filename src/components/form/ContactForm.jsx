import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Form from './form/Form';
import { selectContacts } from 'redux/contacts/selectors';
import { createContactThunk } from 'redux/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
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
      dispatch(createContactThunk({ name, number }));
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
    setNumber('');
  };

  return (
    <Form
      submit={hendleSubmit}
      change={handleChange}
      name={name}
      number={number}
    />
  );
};

export default ContactForm;
