import { act } from 'react-dom/test-utils'
import { 
    ALL_USER_RETRIEVED,
    USER_LOADING,
  } from '../actions/userActions'
  
  // Define your state here
  const initialState = {
    users: [],
    loading: false,
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case USER_LOADING:
        return {
          ...state,
            loading: true
        }
      // Set Users when retrieval success
      case ALL_USER_RETRIEVED:
        console.log('ALL_USER_RETRIEVED: ', payload)
        return {
          ...state,
          users: payload,
          loading: false
        }
      default:
        return state
    }
  }