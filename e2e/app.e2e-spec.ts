import { MaterialTestPage } from './app.po';

describe('material-test App', () => {
  let page: MaterialTestPage;

  beforeEach(() => {
    page = new MaterialTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
