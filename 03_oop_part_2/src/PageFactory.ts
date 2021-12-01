import { Page } from "./Page";

export enum PageTypes {
    WITH_TEXT = 'with text',
    WITH_ARTICLE = 'with article',
    WITH_IMAGES = 'with images',
}

export enum PageMaterial {
    SIMPLE_PAPER = 'simple paper',
    GLOSSY_PAPER = 'glossy paper',
}

export enum PageRelation {
    BOOK,
    MAGAZINE,
    COMICS,
}

export class PageFactory {
    static createPage(pageNumber: number, relation: PageRelation): Page {
        switch (relation) {
            case PageRelation.BOOK:
                return new Page(pageNumber, PageTypes.WITH_TEXT, PageMaterial.SIMPLE_PAPER);
            case PageRelation.MAGAZINE:
                return new Page(pageNumber, PageTypes.WITH_ARTICLE, PageMaterial.GLOSSY_PAPER);
            case PageRelation.COMICS:
                return new Page(pageNumber, PageTypes.WITH_IMAGES, PageMaterial.GLOSSY_PAPER);
        }
    }
}
