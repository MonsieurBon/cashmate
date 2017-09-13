import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import { AccountComponent } from './account/account.component';

const accountsRoutes: Routes = [
  {
    path: '',
    component: AccountsOverviewComponent,
  },
  {
    path: ':name',
    component: AccountComponent
  }
];

export const accountsRouting: ModuleWithProviders = RouterModule.forChild(accountsRoutes);
