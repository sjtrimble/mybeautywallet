import { MybeautywalletPage } from './app.po';

describe('mybeautywallet App', () => {
  let page: MybeautywalletPage;

  beforeEach(() => {
    page = new MybeautywalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
