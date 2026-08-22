
import { test as base , expect }  from "@playwright/test";   //You’re importing Playwright’s test and expect. 
 //test as base renames the default test to base so you can extend it.
import { config}  from "../../config/env.config";

export const test = base.extend({    //base.extend > creates a custom test fixture.
    page : async  ({page}, use)=>   {  //"use" is a special function provided by Playwright fixtures. It tells Playwright when your custom setup is done and hands the fixture back to the test.
        await page.goto(config.baseURL);
        await use(page);   //hands the page back to the test so you can interact with it normally.
    },
});

export {expect};    //Re-exports expect so you can use it alongside your custom test.