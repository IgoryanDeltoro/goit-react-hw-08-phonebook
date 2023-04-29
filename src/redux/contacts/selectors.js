export const selectContacts = state => state.phone.contacts.items;
export const selectIsLoading = state => state.phone.contacts.isLoading;
export const selectError = state => state.phone.contacts.error;
export const selectValueFilter = state => state.phone.filter;
