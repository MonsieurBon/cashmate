import { TestBed, inject } from '@angular/core/testing';

import { AccountsService } from './accounts.service';
import { GraphqlService } from '../graphql/graphql.service';

describe('AccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountsService, GraphqlService]
    });
  });

  it('should be created', inject([AccountsService], (service: AccountsService) => {
    expect(service).toBeTruthy();
  }));
});
