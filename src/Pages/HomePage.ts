import { Page , Locator }  from "@playwright/test"; 

export class HomePage {

    readonly page: Page;
    readonly acceptCookie: Locator;
    readonly userLogo: Locator;
    readonly closedAd: Locator;
    readonly Shoplink : Locator;


    public constructor(page: Page) {
        this.page = page;
        this.acceptCookie = page.locator('#onetrust-accept-btn-handler');
        this.closedAd = page.locator("button[class=' animation-finished']");
        this.userLogo = page.locator(".icon-menu").nth(1);
        this.Shoplink = page.locator("//li[@data-label='Shop']//li[text()='Coffee']");
    }

    public async landToLogin(): Promise<void> {
        
        await this.acceptCookie.click();
        
        await this.closedAd.click();
        
        await this.userLogo.click();
    }
    
}