import { errorReducer } from './error.reducer';
import { ACCOUNTS_REJECTED } from '../accounts/accounts.actions';

const INITIAL_STATE = {};

describe('ErrorReducer', () => {
  it('should return input state', () => {
    const newState = errorReducer(INITIAL_STATE, { type: 'FOO' });
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('should return accounts', () => {
    const action = {
      type: ACCOUNTS_REJECTED,
      error: true,
      payload: { message: 'GraphQL Error (Code: 404) blablabla' }
    };
    const newState = errorReducer(INITIAL_STATE, action);
    expect(newState).not.toEqual(INITIAL_STATE);
    expect(newState.status).toEqual(404);
    expect(newState.message).toEqual('Failed to load accounts');
  });
});
