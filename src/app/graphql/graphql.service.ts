import { Injectable } from '@angular/core';
import { IAccount } from 'app/accounts/accounts.model';
import request from 'graphql-request';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class GraphqlService {

  private url: string;

  private query = `{
    Account {
      name
    }
  }`;

  constructor(private router: Router) {
    this.url = environment.graphQL.endpoint;
  }

  getAccounts(): Promise<IAccount[]> {
    return Promise.resolve([{name: 'Haushalt'}]);
    // return request<IAccount[]>(this.url, this.query);
  }
}
