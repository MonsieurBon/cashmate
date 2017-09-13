import { IError } from './root.model';
import { AnyAction } from 'redux';
import { ACCOUNTS_REJECTED } from '../accounts/accounts.actions';

export function errorReducer(state: IError = {}, action: AnyAction): IError {
  switch (action.type) {
    case ACCOUNTS_REJECTED:
      if (action.error) {
        const error: Error = action.payload;
        const split: string[] = error.message.split(/[\s():]+/, 4);
        const status: number = parseInt(split[3], 10);
        const message = 'Failed to load accounts';
        state = {...state, status: status, message: message};
      }
  }
  return state;
}
