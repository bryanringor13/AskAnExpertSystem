import { act } from 'react-dom/test-utils'
import { ACCESS_GROUP_LOADING, ALL_ACCESS_GROUPS_RETRIEVED } from '../actions/accessGroupActions'
  
  // Define your state here
  const initialState = {
    access_groups: [],
    loading: false,
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case ACCESS_GROUP_LOADING:
        return {
          ...state,
            loading: true
        }
      // Set Users when retrieval success
      case ALL_ACCESS_GROUPS_RETRIEVED:
        console.log('ALL_ACCESS_GROUPS_RETRIEVED: ', payload)
        return {
          ...state,
          access_groups: payload,
          loading: false
        }
      default:
        return state
    }
  }