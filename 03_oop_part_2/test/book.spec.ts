import { Pages } from "../src/pages";
import { Page } from "../src/page";
import { Book } from '../src/book';
import { PageFactory, PageRelation } from "../src/PageFactory";

describe('Book', () => {

  it('toString should return correct value', () => {
    let counter = 1;

    //   const book = new Book('Harry Potter', 'J. K. Rowling', new Pages([
    //     new Page(1, 'with text', 'simple paper'),
    //     new Page(2, 'with text', 'simple paper'),
    //     new Page(3, 'with text', 'simple paper'),
    //     new Page(4, 'with text', 'simple paper')
    //   ]));

    const book = new Book('Harry Potter', 'J. K. Rowling', new Pages([
      PageFactory.createPage(1, PageRelation.BOOK),
      PageFactory.createPage(2, PageRelation.BOOK),
      PageFactory.createPage(3, PageRelation.BOOK),
      PageFactory.createPage(4, PageRelation.BOOK),
    ]));

    for (const page of book) {
      expect(`${book.toString()}, ${page?.toString()}`).toEqual(`Book: Harry Potter by J. K. Rowling with number of pages: 4, here is page with text #${counter} and it\'s material is simple paper`);
      counter++;
    }
  });
});
