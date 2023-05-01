import { Box, MenuItem } from '@mui/material';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  const registration = ['Register', 'Login'];
  return (
    <Box sx={{ display: 'flex', borderRadius: 5 }}>
      {registration.map(element => (
        <MenuItem key={element}>
          <Link to={'/' + element}>{element}</Link>
        </MenuItem>
      ))}
    </Box>
  );
};
