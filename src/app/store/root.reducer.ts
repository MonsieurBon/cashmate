import { combineReducers, Reducer } from 'redux';
// import { counterReducer } from '../counter/counter.reducer';
import { IAppState } from './root.model';
import { routerReducer } from '@angular-redux/router';

export const rootReducer = combineReducers<IAppState>({
  // counter: counterReducer,
  routes: routerReducer
});
