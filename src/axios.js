import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokpickpok.herokuapp.com/",
});

export default instance;
