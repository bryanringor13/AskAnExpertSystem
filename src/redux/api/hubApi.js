import defaultAxios from 'axios'
import { API, BASE_URL } from '../../config/constant';
// Bring the redux store too
import store from '../store';

// Request Login
export const getAllHub = async () => {
  // try {
    // grab current state
    const state = store.getState();
    const authToken = state.auth.token;
    
    const axios = defaultAxios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${authToken}`,
      },
    });

    const hubs = await axios.get(API.get_all_hubs)

    return hubs.data
  // } catch(err) {
  //   return console.error(err)
  // }
}