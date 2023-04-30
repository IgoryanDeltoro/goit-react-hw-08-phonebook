import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../modal/ModalForm.module.css';

export const ModalForm = ({ show, handleShow, handleClose, children }) => {
  return (
    <>
      <div className={css.modalBox}>
        <Modal.Title>Contacts</Modal.Title>
        <Button variant="primary" onClick={handleShow}>
          + Add contact
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
