import { Pages } from "./pages";

export class PagesIterableMixin {
    constructor(protected pages: Pages) {}

    [Symbol.iterator]() {
        let from: number = 0;

        return {
            next: () => {
                return from < this.pages.getLength()
                    ? { value: this.pages.pages[from++], done: false }
                    : { done: true }
            }
        }
    }
}
