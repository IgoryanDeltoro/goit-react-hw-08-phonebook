import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectValueFilter,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectValueFilter);

  return {
    contacts,
    isLoading,
    error,
    filter,
  };
};
