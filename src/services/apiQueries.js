import axios from 'axios';

axios.defaults.baseURL = 'https://64418cc7fadc69b8e086e6d7.mockapi.io';

export const getContactsQuery = async () => {
  const response = await axios.get('/phone');
  return response.data;
};

export const createContactsQuery = async data => {
  const response = await axios.post('/phone', { ...data });
  return response.data;
};

export const deleteContactsQuery = async id => {
  const response = await axios.delete(`/phone/${id}`);
  return response.data;
};
