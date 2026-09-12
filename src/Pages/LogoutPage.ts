import { Page, Locator, expect } from "@playwright/test";
import { promises } from "node:dns";

export class LogoutPage {

     readonly page: Page;
     readonly profileIcon : Locator;
     readonly logoutLink : Locator


     public constructor(page : Page){

        this.page =page;
        this.profileIcon = page.locator("//img[@alt='user avatar']");
        this.logoutLink = page.getByText("Log Out");
        
     }

     public async Logout(): Promise<void> {
        
           await this.profileIcon.click();
           await this.logoutLink.click();

     }
}