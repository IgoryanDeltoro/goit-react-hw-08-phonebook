import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Form from './form/Form';
import { selectContacts } from 'redux/contacts/selectors';
import { createContactThunk } from 'redux/contacts/operations';
import { ModalForm } from 'modal/ModalForm';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const handleSubmit = event => {
    event.preventDefault();
    const index = contacts.findIndex(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (index === -1) {
      dispatch(createContactThunk({ name, number }));
      reset();
      return;
    }
    handleCoincidence(name);
    reset();
  };

  const handleCoincidence = name => {
    alert(`${name} is already in contacts`);
  };

  const reset = () => {
    setName('');
    setNumber('');
    setShow(false);
  };

  return (
    <ModalForm handleClose={handleClose} handleShow={handleShow} show={show}>
      <Form
        submit={handleSubmit}
        change={handleChange}
        name={name}
        number={number}
      />
    </ModalForm>
  );
};

export default ContactForm;
