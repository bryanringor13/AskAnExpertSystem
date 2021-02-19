// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
      AUTH_LOADING,
      LOGIN_REQUEST,
      LOGIN_SUCCESS
  } from '../actions/authActions'
  
  // Import all api's
  import {
    loginRequest
  } from '../api/authApi'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* requestLogin(payload) {
    yield put({ type: AUTH_LOADING })
  
    const login = yield call(loginRequest, payload)
  
    yield put({ type: LOGIN_SUCCESS, payload: login })
  }

  // Export the saga (loginSaga)
  export function* loginSaga() {
    yield takeLatest(LOGIN_REQUEST, requestLogin)
  }