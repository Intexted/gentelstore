import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/',
  // baseURL: 'http://localhost:3200/',
});

const Get = ({ url }) => {
  return Axios.get(url + '.json');
};

const Post = ({ url, data }) => {
  return Axios.post(url + '.json', data);
};

const Put = ({ url, data }) => {
  return Axios.put(url + '.json', data);
};

export { Get, Post, Put };
