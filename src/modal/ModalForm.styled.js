import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';

export const BtnTop = styled(Button)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.between('xs', 'sm')]: {
    display: 'none',
  },
}));

export const ModalBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '25px',
}));

export const Title = styled(Modal.Title)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    marginRight: '50px',
  },
}));

export const BtnDown = styled(Button)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.between('xs', 'sm')]: {
    display: 'block',
    position: 'absolute',
    bottom: '25px',
    right: '25px',
  },
}));
