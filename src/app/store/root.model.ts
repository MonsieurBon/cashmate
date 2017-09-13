import { IAccountsState } from '../accounts/accounts.model';

export interface IError {
  status?: number;
  message?: string;
}

export interface IAppState {
  accounts?: IAccountsState;
  error?: IError;
  routes?: any;
}
