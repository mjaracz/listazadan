import {call, put, takeLatest} from 'redux-saga/effects';
import {urlComments} from './urlConst';

function* getComments(action) {
	try {
		const commentsData = (action.url === urlComments)
			? yield call((url) => fetch(url).then(res => res.json()), action.url)
			: new Error('url passed in actions was incorrect');
		yield put({type: 'FETCH_COMMENTS', payload: commentsData})
	}
	catch(e) {
		yield put({type: 'FETCH_ERROR', payload: e})
	}
}

export function* commentsWatcher() {
	yield takeLatest('GET_COMMENTS', getComments)
}
