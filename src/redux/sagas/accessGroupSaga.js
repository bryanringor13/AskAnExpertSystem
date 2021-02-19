// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
import { ACCESS_GROUP_LOADING, ALL_ACCESS_GROUPS_RETRIEVED, GET_ALL_ACCESS_GROUPS } from '../actions/accessGroupActions'
import { getAllAccessGroups } from '../api/accessGroupApi'
  
  // Import all actions and api's
  
  // Import all api's
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* requestAllAccessGroup() {
    try{
        yield put({ type: ACCESS_GROUP_LOADING })
        const access_groups = yield call(getAllAccessGroups)
        yield put({ type: ALL_ACCESS_GROUPS_RETRIEVED, payload: access_groups })
    }catch(error){
        console.log(error)
    }
  }

  // Export the saga (loginSaga)
  export function* accessGroupSaga() {
    yield takeLatest(GET_ALL_ACCESS_GROUPS, requestAllAccessGroup)
  }