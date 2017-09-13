import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBodyClasses() {
    return element(by.tagName('body')).getAttribute('class');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
