import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsOverviewComponent } from './accounts-overview.component';

describe('AccountsOverviewComponent', () => {
  let component: AccountsOverviewComponent;
  let fixture: ComponentFixture<AccountsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});