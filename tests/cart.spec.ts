import { expect } from "@playwright/test";
import { test } from "../src/fixtures/TestFixture"

import loginData from "../test-data/user.json"
import { CartPage } from "../src/Pages/CartPage";
import { LoginPage } from "../src/pages/loginPage";
import { ShopPage } from "../src/Pages/ShopPage";


test(`verify user is able to click on cart icon and check whetehr cart is empty or not cart @cart`, async ({ loginPage, homePage, shopPage, cartPage }) => {
    // in this test case we are just checking cart & if element present then delete 
    await homePage.landToLogin();
    await loginPage.Login(loginData["valid user"].email, loginData["valid user"].password);
     await cartPage.clickOnCartBtn();
    await cartPage.checkCartStatus();
});   

test(`verify user is able to click on cart icon and delete all items from cart @cart`, async ({ loginPage, homePage, shopPage, cartPage }) => {
    //here in this test case we are first adding element then deleteing those
    await homePage.landToLogin();
    await loginPage.Login(loginData["valid user"].email, loginData["valid user"].password);
    await shopPage.addFirstItemToCart();
     await cartPage.clickOnCartBtn();
    await cartPage.removeAllItemsFromCart();
}); 
  

