import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux-loop';
import { RootState } from '../types';
import filter from './filter';


function createRootReducer(history: History) {
  return combineReducers<RootState, any>({
    filter,
    router: connectRouter(history)
  });
}


export default createRootReducer;
