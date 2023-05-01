// import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
// import css from '../userMenu/UserMenu.module.css';
import { logOutThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

export const UserMenu = ({ close, open, anchorElUser }) => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(logOutThunk());
    navigation('/');
  };

  return (
    <Box
      sx={{ flexGrow: 0, display: 'flex', textAlign: 'center', marginLeft: 10 }}
    >
      <Tooltip title="Open settings">
        <IconButton onClick={open} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={close}
      >
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
