import { 
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from '../actions/authActions'

// Define your state here
const initialState = {
  token: "c8a613a8910dd3aa0a498ae19e41986112141e08",
  loading: false,
  user: null,
  authenticated: false
}

// This export default will control your state for your application
export default(state = initialState, {type, payload}) => {
  switch(type) {
    // Set loading
    case AUTH_LOADING:
      return {
        ...state,
	      loading: true
      }
    // Set User when login success
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        authenticated: true,
        loading: false
      }
    // Set to default when log in failed
    case LOGIN_FAILED:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false
      }
    // Return default state if you didn't match any case
    default:
      return state
  }
}