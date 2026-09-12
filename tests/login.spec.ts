import { expect } from "@playwright/test";
import { test } from "../src/fixtures/TestFixture"

import loginData from "../test-data/user.json"
import { CartPage } from "../src/Pages/CartPage";
import { LoginPage } from "../src/pages/loginPage";
import { ShopPage } from "../src/Pages/ShopPage";


test(`verify user login with valid credentials @login ${loginData["valid user"].email}` , async({loginPage, homePage})=>{

    await homePage.landToLogin();
    await loginPage.Login(loginData["valid user"].email , loginData["valid user"].password);
    await expect(homePage.Shoplink).toHaveText("Coffee");
}
);

test(`verify user add item to cart @login ${loginData["valid user"].email}`, async ({ loginPage, homePage, shopPage }) => {

    await homePage.landToLogin();
    await loginPage.Login(loginData["valid user"].email, loginData["valid user"].password);
    await shopPage.addFirstItemToCart();
     
});

