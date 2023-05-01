import { useAuth } from 'hooks';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Link } from 'components/authNav/AuthNav.styled';

export const Navigation = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Link to="/">Home</Link>
          </MenuItem>
          {isLoggedIn && (
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/contacts">Contacts</Link>
            </MenuItem>
          )}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </Button>
      </Box>
    </>
  );
};
