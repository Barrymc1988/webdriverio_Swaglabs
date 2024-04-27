import { Then } from "@wdio/cucumber-framework";


Then(/^I click logout and verify im on the login page/, async function () {
    const logout = await $("=Logout");
    const menu = await $('button[id="react-burger-menu-btn"]');
    await menu.click();
    await expect(logout).toHaveText("Logout");
    await expect(logout).toHaveAttribute("href", "#");
    logout.click()
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  });