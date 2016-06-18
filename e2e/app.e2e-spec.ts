import { MxDyAppPage } from './app.po';

describe('mx-dy-app App', function() {
  let page: MxDyAppPage;

  beforeEach(() => {
    page = new MxDyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
