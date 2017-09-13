import { accountsReducer } from './accounts.reducer';
import { ACCOUNTS_FULFILLED } from './accounts.actions';

const INITIAL_STATE = {accounts: []};

describe('AccountsReducer', () => {
  it('should return input state', () => {
    const newState = accountsReducer(INITIAL_STATE, { type: 'FOO' });
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('should return accounts', () => {
    const newState = accountsReducer(INITIAL_STATE, { type: ACCOUNTS_FULFILLED, payload: [{name: 'Haushalt'}] });
    expect(newState).not.toEqual(INITIAL_STATE);
    expect(newState.accounts).toBeTruthy();
    expect(newState.accounts.length).toEqual(1);
    expect(newState.accounts[0].name).toBe('Haushalt');
  });
});
