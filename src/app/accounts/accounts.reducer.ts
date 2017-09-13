import { IAccountsState } from './accounts.model';
import { AnyAction } from 'redux';
import { ACCOUNTS_FULFILLED } from './accounts.actions';

const INITIAL_STATE: IAccountsState = {
  accounts: []
};

export function accountsReducer(state: IAccountsState = INITIAL_STATE, action: AnyAction): IAccountsState {
  switch (action.type) {
    case ACCOUNTS_FULFILLED:
      state = { ...state, accounts: action.payload };
  }
  return state;
}
