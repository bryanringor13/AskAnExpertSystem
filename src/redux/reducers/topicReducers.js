import { act } from 'react-dom/test-utils'
import { ALL_TOPICS_RETRIEVED, TOPIC_LOADING } from '../actions/topicActions'
  
  // Define your state here
  const initialState = {
    topics: [],
    loading: false,
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case TOPIC_LOADING:
        return {
          ...state,
            loading: true
        }
      // Set Users when retrieval success
      case ALL_TOPICS_RETRIEVED:
        console.log('ALL_TOPICS_RETRIEVED: ', payload)
        return {
          ...state,
          topics: payload,
          loading: false
        }
      default:
        return state
    }
  }