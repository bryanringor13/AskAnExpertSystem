// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
      MENU_COLLAPSED,
      MENU_COLLAPSED_REQUEST
  } from '../actions/componentActions'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* menuCollapsed() {
    yield put({ type: MENU_COLLAPSED})
  }

  // Export the saga (loginSaga)
  export function* componentSaga() {
    yield takeLatest(MENU_COLLAPSED_REQUEST, menuCollapsed)
  }