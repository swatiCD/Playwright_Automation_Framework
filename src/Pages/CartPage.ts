import { expect, Locator, Page } from "@playwright/test";

export class CartPage {


    readonly page: Page;
    readonly cartBtn: Locator;
    // readonly cartItems: Locator;
    readonly deleteBtn: Locator;
    readonly emptyCartMsg: Locator;


    public constructor(page: Page) {
        this.page = page;
        this.cartBtn = page.locator("//li[@class='icon-menu cart-icon']");
        this.deleteBtn = page.locator("button[title^='Delete'], button[aria-label^='Delete']");

        this.emptyCartMsg = page.locator("//*[@id='layout-site-content']/webruntime-router-container/dxp_data_provider-user-data-provider/dxp_data_provider-data-proxy/commerce_data_provider-cart-data-provider/dxp_data_provider-data-proxy/dxp_data_provider-decision-data-provider/dxp_data_provider-data-proxy/community_layout-slds-flexible-layout/div/community_layout-section[3]/div[3]/community_layout-column[1]/div/commerce_builder-b2c-cart-contents/section/commerce_cart-managed-contents/div/section/dxp_base-text-block/h1");
        //For "EmptyCaerMsg" i tried with multiple xptah buut it was not working hence i copy pasted 
        //this.emptyCartMsg =  page.locator("//html/body/webruntime-app[1]/lwr-router-container/webruntime-inner-app/dxp_data_provider-user-data-provider/dxp_data_provider-data-proxy/dxp_data_provider-decision-data-provider/dxp_data_provider-data-proxy/commerce-layout-site/main/webruntime-router-container/dxp_data_provider-user-data-provider/dxp_data_provider-data-proxy/commerce_data_provider-cart-data-provider/dxp_data_provider-data-proxy/dxp_data_provider-decision-data-provider/dxp_data_provider-data-proxy/community_layout-slds-flexible-layout/div/community_layout-section[3]/div[3]/community_layout-column[1]/div/commerce_builder-b2c-cart-contents/section/commerce_cart-managed-contents/div/section/dxp_base-text-block/h1");
        // this.emptyCartMsg = page.locator("//h1[contains(text(),'Your cart is empty')]");
        // this.emptyCartMsg = page.locator("//commerce_cart-managed-contents//h1");
        //this.emptyCartMsg = page.locator("//h1[matches(., 'Your cart is empty', 'i')]");
        //this.emptyCartMsg = page.locator("//h1[contains(text(),'Your cart is empty')]/following-sibling::div");
        // this.emptyCartMsg = page.getByText("Your cart is empty");
        //this.emptyCartMsg = page.locator("//h1").nth(2);
        // this.emptyCartMsg =page.locator("//section[@class='lwc-4b2blbsh91f']//h1").nth(1);

    }

    public async clickOnCartBtn() {

        await this.cartBtn.scrollIntoViewIfNeeded()
        await this.cartBtn.click();
        console.log("Cart button clicked")
    }

    public async checkCartStatus(): Promise<void> {
        // Step 1: Check if empty cart message is visible
        const msg = await this.emptyCartMsg.textContent();

        if (await this.emptyCartMsg.isVisible()) {
            //const msg = await this.emptyCartMsg.textContent();
            // console.log(`Cart status: ${msg}`);
            console.log("Cart is empty. Skipping delete action.");
            return;
        }

        // Step 2: Wait for delete buttons to load
        await this.page.waitForSelector("button[title^='Delete'], button[aria-label^='Delete']", { state: "visible" });

        const itemCount = await this.deleteBtn.count();
        console.log(`Initial item count: ${itemCount}`);

        if (itemCount === 0) {
            console.log("No delete buttons found, nothing to remove.");
            return;
        }

        // Step 3: Loop through and delete items
        for (let i = 0; i < itemCount; i++) {
            await this.deleteBtn.nth(i).click();
            console.log(`Deleted item ${i + 1}`);
        }
    }

    public async removeAllItemsFromCart(): Promise<void> {
        

        await this.page.waitForSelector("button[title^='Delete'], button[aria-label^='Delete']", { state: "visible" });

        const itemCount = await this.deleteBtn.count();
        console.log(`Initial item count: ${itemCount}`);

        if (itemCount === 0) {
            console.log("No delete buttons found, nothing to remove.");
            return;
        }

        // Step 3: Loop through and delete items
        for (let i = 0; i < itemCount; i++) {
            await this.deleteBtn.nth(i).click();
            console.log(`Deleted item ${i + 1}`);
        }
    }

}