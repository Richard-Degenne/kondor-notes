import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.title')).getText() as Promise<string>;
  }

  getMainContent(): WebElementPromise {
    return element(by.css('router-outlet + *')).getWebElement();
  }
}
