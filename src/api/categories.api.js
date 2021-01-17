// import { endpoints } from './endpoints';
// import axios from 'axios';

// Due to error 403 when performing https request,
// I'm mocks
const endpoints = {
  shop_all: require('./mocks/shop_all.json'),
  bracelets: require ('./mocks/bracelets.json'),
  earrings: require('./mocks/earrings.json'),
  pendants: require('./mocks/pendants.json'),
  rings: require('./mocks/rings.json'),
  items: 'https://dto508s2j2p46.cloudfront.net',
};

const getCategoryByKey = (key) => {
  // return axios.get(endpoints[key]);
  const getSource = Promise.resolve({ data: endpoints[key]});
  return getSource;
};

export const CategoriesAPI = {
  getCategoryByKey,
};