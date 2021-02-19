// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';
import { accessGroupSaga } from './accessGroupSaga';
import { componentSaga } from './componentSaga';
import { hubSaga } from './hubSaga';
import { loginSaga } from './loginSaga';
import { topicSaga } from './topicSaga';
import { userSaga } from './userSaga';

// Imports: Redux Sagas

// Redux Saga: Root Saga
export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(userSaga),
        fork(componentSaga),
        fork(topicSaga),
        fork(hubSaga),
        fork(accessGroupSaga),
    ]);
};