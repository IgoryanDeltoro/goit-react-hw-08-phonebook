import { setValueFilter } from 'redux/contacts/contactsSplice';
import { useDispatch } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleOnchange = event => {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setValueFilter(value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleOnchange}
      />
    </Search>
  );
};

export default Filter;
