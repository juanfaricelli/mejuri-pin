import { endpoints } from './endpoints';
import axios from 'axios';

const getCategoryByKey = (key) => {
  return axios.get(endpoints[key]);
};

export const CategoriesAPI = {
  getCategoryByKey,
};