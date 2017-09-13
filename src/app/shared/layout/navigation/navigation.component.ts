import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from '../../user/login-info/login-info.component';
import { select, WithSubStore } from '@angular-redux/store';
import { accountsReducer } from '../../../accounts/accounts.reducer';
import { Observable } from 'rxjs/Observable';
import { IAccount } from '../../../accounts/accounts.model';

@WithSubStore({
  basePathMethodName: 'getAccountsPath',
  localReducer: accountsReducer
})
@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  @select() readonly accounts$: Observable<IAccount[]>;

  constructor() {
  }

  getAccountsPath = () => ['accounts'];

  ngOnInit() {
  }

}
