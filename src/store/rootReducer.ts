import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux-loop';
import { State } from './types';


function createRootReducer(history: History) {
  return combineReducers<State, any>({
    router: connectRouter(history)
  });
}


export default createRootReducer;
