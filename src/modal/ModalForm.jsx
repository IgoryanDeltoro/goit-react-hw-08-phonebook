import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from 'components/filter/Filter';
import { BtnTop, BtnDown, ModalBox, Title } from './ModalForm.styled';
import AddIcon from '@mui/icons-material/Add';

export const ModalForm = ({ show, handleShow, handleClose, children }) => {
  return (
    <>
      <ModalBox>
        <Title>Contacts</Title>
        <Filter />
        <BtnTop
          sx={{ borderRadius: 20 }}
          variant="contained"
          onClick={handleShow}
        >
          Add contact
        </BtnTop>
        <BtnDown aria-label="upload picture" size="large" onClick={handleShow}>
          <AddIcon sx={{ width: 50, height: 50, color: 'white' }} />
        </BtnDown>
      </ModalBox>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};
