import {call, put, takeLatest} from 'redux-saga/effects';
import {urlTasks} from './urlConst';

function* getTasks(action) {
	try {
		const tasksData = (action.url === urlTasks)
			? yield call((url) => fetch(url).then(res => res.json()), action.url)
			: new Error('url passed in action is incorrect');
		yield put({type: 'FETCH_TASKS', payload: tasksData});
	}
	catch(e) {
		yield put({type: 'FETCH_ERROR', payload: e})
	}
}

export function* tasksWatcher() {
	yield takeLatest('GET_TASKS', getTasks)
}
