import axios from "axios";

const baseURL = "http://localhost:8080d";
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
