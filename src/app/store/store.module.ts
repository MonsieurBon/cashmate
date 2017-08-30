import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './root.model';
import { rootReducer } from './root.reducer';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createLogger } from 'redux-logger';

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
      [ createLogger() ]
    );

    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
