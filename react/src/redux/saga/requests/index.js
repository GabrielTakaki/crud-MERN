import axios from 'axios';
import { URL } from '../../../api'


export const requestContracts = () => {
  return axios.request({
    method: 'get',
    url: `${URL}/contract`,
    withCredentials: true, 
  }).catch(error => {
    console.log(error);
    window.location.href = `${URL}/notFound`;
  });
}

export const requestProducts = () => {
  return axios.request({
    method: 'get',
    url: `${URL}/product`,
    withCredentials: true,
  }).catch(error => {
    window.location.href = `${URL}/notFound`;
  });
}

export const requestCountries = () => {
  return axios.request({
    method: 'get',
    url: 'https://restcountries.com/v3.1/all',
  }).catch(error => {
    window.location.href = `${URL}/notFound`;
  });
}
