import { Page } from './Page';

export class Pages {
  public pages: Page[];

  constructor(pages: Page[]) {
    this.pages = pages;
  }

  getLength() {
      return this.pages.length;
  }
}
