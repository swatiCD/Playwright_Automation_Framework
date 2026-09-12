import { Locator, Page } from "@playwright/test";


export class commonUtils {

    constructor(page: Page) {

    }

    async clickElement(locator: Locator) {

        await locator.click();
    }

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }
}