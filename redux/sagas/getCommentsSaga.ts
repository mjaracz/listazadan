import {call, put, takeLatest, cancelled} from 'redux-saga/effects';
import {getComments} from './apiCall';
import {AbortController} from 'abort-controller/dist/abort-controller';

function* getCommentsSaga() {
	const abortController = new AbortController();
	try {
		const commentsData = yield call(getComments, abortController.signal);
		yield put({type: 'FETCH_COMMENTS', payload: commentsData});
	}
	catch(e) {
		if(yield(cancelled())) abortController.abort();
		yield put({type: 'FETCH_ERROR', payload: e})
	}
}

export function* commentsWatcher() {
	yield takeLatest('GET_COMMENTS', getCommentsSaga)
}
