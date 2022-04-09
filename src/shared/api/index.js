import axios from "axios";

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

(GetData.dataUsers() || GetData.dataPosts() || GetData.dataComments()).
then(() => {return null}).catch(() => alert('Ooooops… a server error occurred'));

export default GetData;