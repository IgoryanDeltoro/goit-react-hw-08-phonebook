import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';

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

export const BtnDown = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.between('xs', 'sm')]: {
    display: 'flex',
    position: 'absolute',
    bottom: '25px',
    right: '25px',
    zIndex: '50',
    width: '45px',
    height: '45px',
    backgroundColor: '#3e87e4',
  },
}));
