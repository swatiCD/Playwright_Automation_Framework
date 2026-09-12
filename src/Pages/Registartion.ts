
import { expect, Locator, Page } from "@playwright/test";
import {commonUtils} from "../utility/commonUtils";

export class RegistrationPage {


   readonly page: Page;
   readonly util : commonUtils;
   readonly createAccountLink : Locator;
   readonly firstNameInput: Locator;
   readonly lastNameInput: Locator;
   readonly emailInput: Locator;
   readonly passwordInput: Locator
   readonly confirmPasswordInput: Locator;

   
    public constructor(page: Page) {
        this.page = page;
        this.util = new  commonUtils(page);
        this.createAccountLink = page.locator(".register-text");
        this.firstNameInput = page.locator("//input[@data-id='firstName']");
        this.lastNameInput = page.locator("//input[@data-id='lastName']");
        this.emailInput = page.locator("//input[@data-id='email']");
        this.passwordInput = page.locator("//input[@data-id='password']");
        this.confirmPasswordInput = page.locator("//input[@dataid='confirmPassword']");

    }


    public async fillRegistrationForm(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Promise<void> {

        await this.util.enterText(this.firstNameInput,firstName);
        await this.util.enterText(this.lastNameInput,lastName);
        await this.util.enterText(this.passwordInput,email);
        await this.util.enterText(this.confirmPasswordInput,confirmPassword);
        
    

    }


}