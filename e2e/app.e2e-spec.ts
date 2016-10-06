import { MaterializeNg2Page } from './app.po';

describe('materialize-ng-2 App', function() {
  let page: MaterializeNg2Page;

  beforeEach(() => {
    page = new MaterializeNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
