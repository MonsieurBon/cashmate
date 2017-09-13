import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlModule } from '../graphql/graphql.module';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { accountsRouting } from './accounts.routing';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    GraphqlModule,
    accountsRouting
  ],
  declarations: [
    AccountComponent,
    AccountsOverviewComponent
  ]
})
export class AccountsModule { }
