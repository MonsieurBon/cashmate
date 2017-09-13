import { Injectable } from '@angular/core';
import { ThunkAction } from 'redux-thunk';
import { ACCOUNTS } from './accounts.actions';
import { GraphqlService } from '../graphql/graphql.service';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class AccountsService {

  constructor(private graphqlService: GraphqlService) { }

  @dispatch()
  fetchAccounts(): ThunkAction<void, {}, {}> {
    return dispatch => {
      dispatch({
        type: ACCOUNTS,
        payload: this.graphqlService.getAccounts()
      });
    };
  }

}
