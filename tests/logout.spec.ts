import { expect } from "@playwright/test";
import { test } from "../src/fixtures/TestFixture"

import loginData from "../test-data/user.json"
import { CartPage } from "../src/Pages/CartPage";
import { LoginPage } from "../src/pages/loginPage";
import { ShopPage } from "../src/Pages/ShopPage";
import { LogoutPage } from "../src/Pages/LogoutPage";



test(`verify user logout @logout ${loginData["valid user"].email}` , async({loginPage, homePage, logoutPage})=>{

    await homePage.landToLogin();
    await loginPage.Login(loginData["valid user"].email , loginData["valid user"].password);
    await expect(homePage.Shoplink).toHaveText("Coffee");
    await logoutPage.Logout();
}
);