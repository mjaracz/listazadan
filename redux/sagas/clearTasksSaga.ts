import {takeLatest} from 'redux-saga/effects';
import AbortController from 'abort-controller/dist/abort-controller';

const abortController = new AbortController();

function* clearTasksSaga() {
	yield abortController.abort();
}

export function* clearTasksWatcher() {
	takeLatest('CLEAR_TASKS', clearTasksSaga)
}
