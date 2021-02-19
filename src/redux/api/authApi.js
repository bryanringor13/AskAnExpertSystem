import defaultAxios from 'axios'
import { API, BASE_URL } from '../../config/constant';

const axios = defaultAxios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

// Request Login
export const loginRequest = async (request) => {
  try {
    const login = await axios.post(API.login, request)
    return login.data
  } catch(err) {
    return console.error(err)
  }
}

