import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const TOKEN = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// users request
export const signUpQuery = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  TOKEN.set(data.token);
  return data;
};

export const logInQuery = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  TOKEN.set(data.token);
  return data;
};
export const logOutQuery = async credentials => {
  TOKEN.set(credentials);
  const { data } = await axios.post('/users/logout');
  TOKEN.unSet();
  return data;
};
export const getCurrentUserQuery = async token => {
  TOKEN.set(token);
  const { data } = await axios.get('/users/current');
  return data;
};

// contacts query
export const getContactsQuery = async token => {
  TOKEN.set(token);
  const { data } = await axios.get('/contacts');
  return data;
};

export const createContactsQuery = async credentials => {
  const { data } = await axios.post('/contacts', { ...credentials });
  return data;
};

export const deleteContactsQuery = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
