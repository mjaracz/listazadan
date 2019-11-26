import {Store} from '../types';

const initialState = {
  loading: false,
  tasks: [],
  comments: [],
  error: {}
};

const fetchReducer = (state: Store = initialState, action) => {
  switch (action.type) {
    case 'GET_TASKS': {
      return({
        ...state,
        loading: true
      })
    }
    case 'GET_COMMENTS': {
      return({
        ...state,
        loading: true
      })
    }
    case 'FETCH_TASKS': {
      return({
        ...state,
        loading: false,
        tasks: action.payload
      })
    }
    case 'FETCH_COMMENTS': {
      return({
        ...state,
        loading: false,
        comments: action.payload
      })
    }
    case 'FETCH_ERROR': {
      return({
        ...state,
        tasks: [],
        comments: [],
        loading: false,
        error: action.payload
      })
    }
    case 'CLEAR_TASKS': {
      return({
        ...state,
        tasks: []
      })
    }
    case 'CLEAR_COMMENTS': {
      return({
        ...state,
        comments: []
      })
    }
    default: {
      return state
    }
  }
};

export default fetchReducer;
