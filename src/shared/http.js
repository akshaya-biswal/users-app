import axios from 'axios';

function createHttp() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get(url, params) {
    return createHttp().get(url, { params });
  },

  post(url, data) {
    return createHttp().post(url, data);
  },

  put(url, data) {
    return createHttp().put(url, data);
  },

  delete(url, params) {
    return createHttp().delete(url, { params });
  },
};
