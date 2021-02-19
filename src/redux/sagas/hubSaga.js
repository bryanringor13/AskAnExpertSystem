// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
import { ALL_HUBS_RETRIEVED, GET_ALL_HUBS, HUB_LOADING } from '../actions/hubActions'
import { getAllHub } from '../api/hubApi'
  
  // Import all actions and api's
  
  // Import all api's
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* requestAllhub() {
    try{
        yield put({ type: HUB_LOADING })
        const hubs = yield call(getAllHub)
        yield put({ type: ALL_HUBS_RETRIEVED, payload: hubs })
    }catch(error){
        console.log(error)
    }
  }

  // Export the saga (loginSaga)
  export function* hubSaga() {
    yield takeLatest(GET_ALL_HUBS, requestAllhub)
  }