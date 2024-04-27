import { Given,When,Then } from "@wdio/cucumber-framework";

When(/^I select a product and add to basket/, async function() {
//let item = await $(".shopping_cart_container");
let item = await $('button[data-test="add-to-cart-sauce-labs-backpack"]');
await item.click()
console.log();


})

Then(/^I view the basket/, async function() {
let cart = await $(".shopping_cart_container")
await cart.click()
})

// Then(/^I expect to see the item listed/, async function() {
//    const link = await $("=Sauce Labs Backpack")
// await expect(link).toHaveText('Sauce Labs Backpack')
// await expect(link).toHaveAttribute('href', '#')
// await expect(link).toBeDisplayedInViewport
// let menu = await $('button[id="react-burger-menu-btn"]')
// menu.click()
// const reset = await $("=Reset App State")
// //await expect(reset).toHaveText('Reset App State')
// await expect(reset).toHaveAttribute('href', '#')
// reset.click()
// browser.takeScreenshot
// })