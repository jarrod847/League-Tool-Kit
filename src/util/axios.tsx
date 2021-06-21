import axios from "axios";

const BaseUrl = () => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
  });
};

export default BaseUrl;
