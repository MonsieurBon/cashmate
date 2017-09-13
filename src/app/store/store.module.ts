import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './root.model';
import { rootReducer } from './root.reducer';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

@NgModule({
  imports: [
    NgReduxModule,
    NgReduxRouterModule
  ]
})
export class StoreModule {
  constructor(public store: NgRedux<IAppState>,
              ngReduxRouter: NgReduxRouter) {
    store.configureStore(
      rootReducer,
      {},
      [ promise(), thunk, createLogger() ]
    );

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
