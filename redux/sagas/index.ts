import {all} from 'redux-saga/effects';
import {tasksWatcher} from './getTasksSaga';
import {commentsWatcher} from './getCommentsSaga';

function* rootSaga() {
  yield all([
    tasksWatcher(),
    commentsWatcher()
  ])
}

export default rootSaga;
