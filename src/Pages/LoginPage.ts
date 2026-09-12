import { Locator, Page } from "@playwright/test";
import { waitForDebugger } from "node:inspector";

export class LoginPage {


    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;


    public constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator("input[data-id='inputUsername']");
        this.passwordInput = page.locator("input[data-id='inputPassword']");
        this.loginBtn = page.locator("button[type='submit']");

    }

    public async Login(inputUsername :string, inputPassword : string){

        await this.emailInput.fill(inputUsername);
         
        await this.passwordInput.fill(inputPassword);
      
        await this.loginBtn.click();
        await this.page.waitForURL("https://www.camposcoffee.com/");
      
        
    }

    
}