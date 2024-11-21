import axios from 'axios';
// import store from './store';
// import { toast } from "react-toastify";

axios.defaults.headers.common.lang = localStorage.getItem('lang') || 'en';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["X-Tenant"] = window.location.host.split('.')[0];
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}` || '';


axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch();
    } else if (error.response.status === 403) {
      toast.warning(error.response?.data?.errorMessage || 'You do not have permission to perform this action.');
    }
    return Promise.reject(error);
  },
);

export default axios;
