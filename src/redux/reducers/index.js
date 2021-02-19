import { combineReducers } from 'redux'

// Reducers
import auth from './authReducers'
import user from './userReducers'
import component from './componentReducers'
import topic from './topicReducers'
import hub from './hubReducers'
import accessGroup from './accessGroupReducers'

export default combineReducers({
    auth,
    user,
    component,
    topic,
    hub,
    accessGroup,
  // Here you can registering another reducers.
})