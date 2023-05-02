import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
// import css from '../userMenu/UserMenu.module.css';
import { logOutThunk } from 'redux/authorization/operations';
import { useNavigate } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';
import { nameCuter } from 'general/nameCuter';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'components/authNav/AuthNav.styled';

export const UserMenu = ({ close, open, anchorElUser }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
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
          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            {nameCuter(user.name)}
          </Avatar>
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
        <MenuItem
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={handleLogout}
        >
          <Typography variant="text">{user.name}</Typography>
          <Typography variant="text">{user.email}</Typography>
          <Link>Logout</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};
