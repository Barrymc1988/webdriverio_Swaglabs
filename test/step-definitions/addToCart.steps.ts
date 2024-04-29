import { When, Then } from "@wdio/cucumber-framework";


// select an item from the products page and click the Add to cart button
When(/^I select a product and add to basket/, async function () {
  //let item = await $(".shopping_cart_container");
  let item = await $('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await item.click();
  console.log();
});

// Click the shopping cart button to view the basket
Then(/^I view the basket/, async function () {
  let cart = await $(".shopping_cart_container");
  await cart.click();
});

// Verify the item selected has been successfully added and displayed in the shopping basket
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

  // select the first button displayed on the page containing the word cart
  Then(/^I select the first item on the page/, async function () {
    const item = $("//button[contains(text(), 'cart')]");
    await item.click();
  });

  // Click the Remove button on the product page for an item that has been previously added to basket
  Then(/^I successfully remove the item/, async function () {
    const basketIcon = await $("//span[contains(text(), '1')]");
    const removeBtn = await $('button=Remove')
    //await expect(basketIcon).toBeDisplayed
    await removeBtn.click()
    browser.pause(2000)
    await expect(basketIcon).not.toBeDisplayed()
    

  })