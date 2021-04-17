import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a nice simple heading toolbar', async () => {
    await page.navigateTo();
    expect(await page.getToolbarText()).toMatch('JSON$');
  });

  it('should load posts route if invalid route is given', async () => {
    await page.navigateTo('not-a-real-path');
    expect(await page.getPath()).toMatch('\/posts$')
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
