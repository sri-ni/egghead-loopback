import { EggClientPage } from './app.po';

describe('egg-client App', () => {
  let page: EggClientPage;

  beforeEach(() => {
    page = new EggClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
