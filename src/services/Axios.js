import axios from "axios";

const Axios = axios.create({
  // baseURL: 'https://ma7ali-f4ce3-default-rtdb.firebaseio.com',
  baseURL: "https://yesdelivery-default-rtdb.firebaseio.com",
  // baseURL: 'http://localhost:3200/',
});

const Get = ({ url }) => {
  return Axios.get(url + ".json");
};

const Post = ({ url, data }) => {
  return Axios.post(url + ".json", data);
};

const Put = ({ url, data }) => {
  return Axios.put(url + ".json", data);
};

export { Get, Post, Put };
