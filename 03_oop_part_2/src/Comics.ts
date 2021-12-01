import { Item } from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
    constructor(private _title: string, private _author: string, private _artist: string, pages: Pages) {
        super(pages);
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get author(): string {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    get artist(): string {
        return this._artist;
    }

    set artist(artist: string) {
        this._artist = artist;
    }

    toString(): string {
        return `Comics: ${this._title} by ${this._author}, the artist is ${this._artist}, number of pages: ${this.pages.getLength()}`;
    }
}
