import axios from 'axios';

const token = "ASDFGHJKL>ZXCVBNMÖ";

export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {'Authorization': `Bearer ${token}`}
});