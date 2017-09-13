import { Injectable } from '@angular/core';
import { IAccount } from 'app/accounts/accounts.model';

@Injectable()
export class GraphqlService {

  private query = `{
    Account {
      name
    }
  }`;

  constructor() { }

  getAccounts(): Promise<IAccount[]> {
    return Promise.resolve([{name: 'Haushalt'}]);
    // return request<IAccount[]>('https://som.end.poi.nt', this.query);
  }

}
