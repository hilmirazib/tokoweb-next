import axios from 'axios';
import callAPI from '../config/api';
import { LoginTypes } from './data-type';

const ROOT_API = process.env.NEXT_PUBLIC_API;
export async function setSignIn(data: LoginTypes) {
  const url = `${ROOT_API}/api/login`;
  return callAPI({
    url,
    method: 'post',
    data,
  });
}
