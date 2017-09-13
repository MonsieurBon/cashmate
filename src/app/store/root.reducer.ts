import { combineReducers } from 'redux';
import { IAppState } from './root.model';
import { routerReducer } from '@angular-redux/router';
import { accountsReducer } from '../accounts/accounts.reducer';
import { errorReducer } from './error.reducer';

export const rootReducer = combineReducers<IAppState>({
  accounts: accountsReducer,
  error: errorReducer,
  routes: routerReducer
});
