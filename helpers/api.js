import { map } from "lodash";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5000
});

const apiHelper = {
  getProducts: () => {
    return api.get("/products/getAll").then(response => {
      return response.data.products;
    });
  }
};

module.exports = apiHelper;
