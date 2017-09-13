import { async, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { MockComponent } from '../../../mocks/mock.component';
import { MockPipe } from '../../../mocks/mock.pipe';
import { By } from '@angular/platform-browser';
import { MockNgRedux, NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import 'rxjs/add/operator/toArray';

describe('NavigationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        MockComponent({selector: 'sa-login-info'}),
        MockComponent({selector: 'sa-minify-menu'}),
        MockPipe({name: 'i18n'})
      ],
      imports: [
        NgReduxTestingModule
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    }).compileComponents();

    MockNgRedux.reset();
  }));

  it('should create the navigation', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const navigation = fixture.debugElement.componentInstance;
    expect(navigation).toBeTruthy();
  }));

  it('should have an accounts menu link', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);

    const accountList = fixture.debugElement.query(By.css('#account-list'));
    expect(accountList).toBeTruthy();

    const accountLink = fixture.debugElement.query(By.css('#account-list a'));
    expect(accountLink.attributes['routerLink']).toBe('/accounts');
    expect(accountLink.attributes['title']).toBe('Accounts');

    const accountIcon = accountLink.query(By.css('i'));
    expect(accountIcon.attributes['class']).toBe('fa fa-lg fa-fw fa-bank');

    const accountLinkText = accountLink.query(By.css('span'));
    expect(accountLinkText.attributes['class']).toBe('menu-item-parent');
    expect(accountLinkText.nativeElement.innerHTML).toBe('Accounts');
  }));

  it('should get the accounts from the store', async(done => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const navigationComponent = fixture.debugElement.componentInstance;
    const mockAccountsSequence = [
      { },
      {
        account1: { name: 'Account 1'},
        account2: { name: 'Account 2'}
      }
    ];

    const expectedSequence = [
      [],
      [
        { name: 'Account 1' },
        { name: 'Account 2' }
      ]
    ];

    const accountsSelectorStub = MockNgRedux.getSelectorStub(['accounts']);
    mockAccountsSequence.forEach(value => accountsSelectorStub.next(value));
    accountsSelectorStub.complete();

    navigationComponent.accounts$
      .toArray()
      .subscribe(
        actualSequence => expect(actualSequence).toEqual(expectedSequence),
        null,
        done
      );

    fixture.detectChanges();
  }));

  it('should have a submenu entry for every account', async(() => {
    const fixture = TestBed.createComponent(NavigationComponent);
    const mockAccounts = [
      { name: 'Account 1'},
      { name: 'Account 2'}
    ];

    const accountsSelectorStub = MockNgRedux.getSelectorStub(['accounts']);
    accountsSelectorStub.next(mockAccounts);
    accountsSelectorStub.complete();

    fixture.detectChanges();

    const accountListItemsList = fixture.debugElement.query(By.css('#account-list ul'));
    expect(accountListItemsList).toBeTruthy();
    // expect(accountListItemsList.children.length).toBe(2);
  }));
});
