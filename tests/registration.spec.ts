import { expect } from "@playwright/test";
import { test } from "../src/fixtures/TestFixture"

import loginData from "../test-data/user.json"
import { CartPage } from "../src/Pages/CartPage";
import { LoginPage } from "../src/pages/loginPage";
import { ShopPage } from "../src/Pages/ShopPage";


test(`verify user is able to register`, async ({ registrationPage }) => {

    
    await registrationPage.fillRegistrationForm("yash", "Netke","yash123@abc.com","yash@123","yash@123");    
})