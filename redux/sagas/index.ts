import {all} from 'redux-saga/effects';
import {tasksWatcher} from './getTasksSaga';
import {commentsWatcher} from './getCommentsSaga';
import {clearTasksWatcher} from './clearTasksSaga';
import {clearCommentsWatcher} from './clearCommentsSaga';

function* rootSaga() {
  yield all([
    tasksWatcher(),
    commentsWatcher(),
    clearTasksWatcher(),
    clearCommentsWatcher()
  ])
}

export default rootSaga;
