import * as React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import css from '../contactItems/ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import { nameCuter } from 'general/nameCuter';
import { randomHsl } from 'general/colorGenerator';

const ContactItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <tr className={css.tableRow}>
      <td className={css.tableText}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: randomHsl() }}>{nameCuter(name)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} />
      </td>
      <td>
        <ListItemText primary={number} />
      </td>
      <td className={css.buttonBox}>
        <IconButton
          onClick={() => dispatch(deleteContactThunk(id))}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItems;
