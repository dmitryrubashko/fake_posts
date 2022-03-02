import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const config = {
  baseURL,
};

const Api = axios.create(config);

export default Api;