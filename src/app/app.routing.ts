import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/app-layouts/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home', loadChildren: 'app/+home/home.module#HomeModule', data: {pageTitle: 'Home'}},
      {path: 'accounts', loadChildren: 'app/accounts/accounts.module#AccountsModule', data: {pageTitle: 'Accounts'}},
    ]
  },
  {path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},
  {path: '**', redirectTo: 'home'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
