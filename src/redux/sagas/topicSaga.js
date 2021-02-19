// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
import { ALL_TOPICS_RETRIEVED, GET_ALL_TOPICS, TOPIC_LOADING } from '../actions/topicActions'
import { getAllTopics } from '../api/topicApi'
  
  // Import all api's
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Todos
  function* requestAllTopic() {
    try{
        yield put({ type: TOPIC_LOADING })
        const topics = yield call(getAllTopics)
        yield put({ type: ALL_TOPICS_RETRIEVED, payload: topics })
    }catch(error){
        console.log(error)
    }
  }

  // Export the saga (loginSaga)
  export function* topicSaga() {
    yield takeLatest(GET_ALL_TOPICS, requestAllTopic)
  }