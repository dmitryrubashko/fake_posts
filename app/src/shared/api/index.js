import axios from "axios";

// const baseURL = "https://jsonplaceholder.typicode.com";
const baseURL = "http://localhost:5000";
const Api = axios.create({ baseURL });

const GetData = {
  dataUsers() {
    return Api.get(`/users`);
  },
  dataPosts() {
    return Api.get(`/posts`);
  },
  dataComments() {
    return Api.get(`/comments`);
  },
};
export default GetData;
