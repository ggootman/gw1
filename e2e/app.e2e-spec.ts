import { Gw1Page } from './app.po';

describe('gw1 App', () => {
  let page: Gw1Page;

  beforeEach(() => {
    page = new Gw1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
