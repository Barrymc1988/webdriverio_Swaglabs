import { Then } from "@wdio/cucumber-framework";


Then(/^I want to checkout successfully/, async function () {
    const checkoutBtn = await $('button[data-test="checkout"]');
    await checkoutBtn.click();
    const firstName = await $("[data-test=firstName]");
    await firstName.setValue("testUser");
    const lastName = await $("[data-test=lastName]");
    await lastName.setValue("tester");
    const postcode = await $("[data-test=postalCode]");
    await postcode.setValue("bt54e4");
    const continueBtn = await $("[data-test=continue]");
    await continueBtn.scrollIntoView();
    await continueBtn.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    const finishBtn = await $('button[name="finish"]');
    await finishBtn.click();
    await expect (browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
  });
  
  Then(/^I view the basket/, async function () {
    let cart = await $(".shopping_cart_container");
    await cart.click();
  });