import { Page, Locator, expect } from "@playwright/test";
import { promises } from "node:dns";

export class ShopPage {

    readonly page: Page;
    readonly shop_menu: Locator;
    readonly first_item: Locator;
    readonly filterOption_coffee: Locator;
    readonly roast_type: Locator;
    readonly addToCartBtn: Locator;
    readonly continueShoppingBtn: Locator;
   


    public constructor(page: Page) {
        this.page = page;
        this.shop_menu = page.locator("//li[@data-label='Shop']");
        this.first_item = page.locator("//div[@class='product-image-container']").nth(1);
        this.filterOption_coffee = page.locator("//*[@id='categories-section']/div/div/commerce-link-list/ul/li[2]/p/a");
        this.roast_type = page.locator("//h3[text()='Roast Type']");
        this.addToCartBtn = page.locator("//button[@data-label='AddtoCart']")
        this.continueShoppingBtn = page.locator("//button[@aria-label='Cancel and close']");
       
    }


    public async addFirstItemToCart(): Promise<void> {
       
        const products = [
            "Kenya Thirikwa Gakuyuini",
           // "Superior",
            "Guatemala La Nueva"
        ];

        for (const product of products) {
            
            await this.shop_menu.click();
            await this.filterOption_coffee.click();
            await this.roast_type.click();
            const productCard = this.page.locator('.tile__product-name', { hasText: product });
            await expect(productCard).toBeVisible();
            await productCard.click();
            await this.addToCartBtn.click();
            await this.continueShoppingBtn.waitFor({ state: "visible" });
            console.log("continue btn to be clicked");
            await this.continueShoppingBtn.click();
            console.log("clicked");
            await this.page.goto("https://www.camposcoffee.com/");

        }

  }

        


}