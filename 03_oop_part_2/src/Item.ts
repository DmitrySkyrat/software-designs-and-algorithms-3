import { Pages } from "./pages";
import { PagesIterableMixin } from "./PagesIterableMixin";

export abstract class Item extends PagesIterableMixin {
    constructor(pages: Pages) {
        super(pages);
    }

    abstract toString(): string;
}
