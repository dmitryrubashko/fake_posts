import axios from "axios";

const baseURL = "http://localhost:8080";
const Api = axios.create({ baseURL });

const GetData = {
  dataUsers() {
    return Api.get(`/users`, { withCredentials: true });
  },
  dataPosts() {
    return Api.get(`/posts`, { withCredentials: true });
  },
  dataComments() {
    return Api.get(`/comments`, { withCredentials: true });
  },
};

export default GetData;
