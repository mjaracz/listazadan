import {takeLatest} from 'redux-saga/effects';
import {AbortController} from 'abort-controller/dist/abort-controller';

const abortController = new AbortController();

function* clearComments() {
	yield abortController;
}

export function* clearCommentsWatcher() {
	yield takeLatest('CLEAR_COMMENTS', clearComments);
}
