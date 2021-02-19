// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
      USER_LOADING,
      GET_ALL_USER,
      ALL_USER_RETRIEVED
  } from '../actions/userActions'
  
  // Import all api's
  import {
    getAllUsers
  } from '../api/userApi'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* requestAllUser() {
    try{
        yield put({ type: USER_LOADING })
        const users = yield call(getAllUsers)
        yield put({ type: ALL_USER_RETRIEVED, payload: users })
    }catch(error){
        console.log(error)
    }
  }

  // Export the saga (loginSaga)
  export function* userSaga() {
    yield takeLatest(GET_ALL_USER, requestAllUser)
  }