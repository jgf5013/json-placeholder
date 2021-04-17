import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(url?: string): Promise<unknown> {
    return browser.get(url || browser.baseUrl);
  }

  async getToolbarText(): Promise<string> {
    return element(by.css('app-root mat-toolbar')).getText();
  }

  async getPath(): Promise<string> {
    return browser.getCurrentUrl();
  }

  async resize(width: number, height: number): Promise<void> {
    return browser.manage().window().setSize(width, height);
  }

  async getSideNavVisibility(): Promise<string> {
    return element(by.tagName('mat-sidenav')).getCssValue('visibility');
  }
}
