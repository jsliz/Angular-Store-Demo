import { AngularStoreDemoPage } from './app.po';

describe('angular-store-demo App', () => {
  let page: AngularStoreDemoPage;

  beforeEach(() => {
    page = new AngularStoreDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
