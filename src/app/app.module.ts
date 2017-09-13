import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { NgReduxModule } from '@angular-redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SmartadminLayoutModule } from './shared/layout/layout.module';
import { StoreModule } from './store/store.module';
import { routing } from './app.routing';
import { GraphqlModule } from './graphql/graphql.module';
import { AccountsModule } from './accounts/accounts.module';
import { Router } from '@angular/router';
import { AccountsService } from './accounts/accounts.service';

// Applicaiton wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    GraphqlModule,
    HttpModule,
    NgReduxModule,
    SmartadminLayoutModule,
    StoreModule,
    routing
  ],
  providers: [
    APP_PROVIDERS,
    AccountsService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }
}
