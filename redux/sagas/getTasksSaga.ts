import {call, put, takeLatest, cancelled} from 'redux-saga/effects';
import {getTasks} from './apiCall';
import {AbortController} from 'abort-controller/dist/abort-controller';

function* getTasksSaga() {
	const abortController = new AbortController();
	try {
		const tasksData = yield call(getTasks, abortController.signal);
		yield put({type: 'FETCH_TASKS', payload: tasksData});
	}
	catch(e) {
		if(yield(cancelled())) abortController.abort();
		yield put({type: 'FETCH_ERROR', payload: e})
	}
}

export function* tasksWatcher() {
	yield takeLatest('GET_TASKS', getTasksSaga)
}
