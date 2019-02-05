import { combineReducers } from 'redux';
import teaFilter from './reducers/teaFilter';
import notification from './reducers/notification';

export default function getReducer() {
  return combineReducers({
    page,
    teaFilter,
    notification,
  });
}

const initPageState = {
  language: 'rus',
};

function page(state = initPageState) {
  return state;
}
