import { act } from 'react-dom/test-utils'
import { ALL_HUBS_RETRIEVED, HUB_LOADING } from '../actions/hubActions'
  
  // Define your state here
  const initialState = {
    hubs: [],
    loading: false,
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case HUB_LOADING:
        return {
          ...state,
            loading: true
        }
      // Set Users when retrieval success
      case ALL_HUBS_RETRIEVED:
        console.log('ALL_HUBS_RETRIEVED: ', payload)
        return {
          ...state,
          hubs: payload,
          loading: false
        }
      default:
        return state
    }
  }