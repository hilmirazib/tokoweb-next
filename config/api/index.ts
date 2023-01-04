import React from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface callAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}
export default async function callAPI({ url, method, data, token, serverToken }: callAPIProps) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = JSON.parse(atob(tokenCookies));
      headers = {
        Authorization: `Bearer ${jwtToken.token}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  const res = {
    error: false,
    message: 'success',
    data: response.data
  };

  return res;
}
