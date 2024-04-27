import { When, Then } from "@wdio/cucumber-framework";

When(/^I select a product and add to basket/, async function () {
  //let item = await $(".shopping_cart_container");
  let item = await $('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await item.click();
  console.log();
});

Then(/^I expect to see the item listed/, async function () {
    const link = await $("=Sauce Labs Backpack");
    await expect(link).toHaveText("Sauce Labs Backpack");
    await expect(link).toHaveAttribute("href", "#");
    await expect(link).toBeDisplayedInViewport;
    let menu = await $('button[id="react-burger-menu-btn"]');
    await menu.click();
    const reset = await $("=Reset App State");
    await expect(reset).toHaveText("Reset App State");
    await expect(reset).toHaveAttribute("href", "#");
    await reset.click();
  });

  Then(/^I select the first item on the page/, async function () {
    const item = $("//button[contains(text(), 'cart')]");
    await item.click();
  });

  Then(/^I successfully remove the item/, async function () {
    const basketIcon = await $("//span[contains(text(), '1')]");
    const removeBtn = await $('button=Remove')
    //await expect(basketIcon).toBeDisplayed
    await removeBtn.click()
    browser.pause(2000)
    await expect(basketIcon).not.toBeDisplayed()
    

  })