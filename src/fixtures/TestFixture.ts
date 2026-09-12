import { test as base, expect } from "../fixtures/BaseFixture"


//import base from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { ShopPage } from '../Pages/ShopPage';
import { CartPage } from "../Pages/CartPage";
import { RegistrationPage } from "../Pages/Registartion";
import { LogoutPage } from "../Pages/LogoutPage";


type TestFixture = {
    homePage: HomePage;
    loginPage: LoginPage;
    shopPage: ShopPage;
    cartPage: CartPage;
    registrationPage: RegistrationPage;
    logoutPage : LogoutPage;


};

export const test = base.extend<TestFixture>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    shopPage: async ({ page }, use) => {
        await use(new ShopPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
    },

    logoutPage : async ({page}, use)=>{
        await use( new LogoutPage(page));
    }
});
