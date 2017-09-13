import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AccountsService } from './accounts/accounts.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  public title = 'app works!';

  public constructor(
    private accountsService: AccountsService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.accountsService.fetchAccounts();
  }
}
