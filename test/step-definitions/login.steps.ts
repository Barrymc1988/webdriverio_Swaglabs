import { Given, When, Then } from "@wdio/cucumber-framework";

// Open BASEURL address set in wdio.conf.ts
Given(/^I navigate to baseURL$/, function () {
  browser.url("");
});

// Enter valid login details from example table
When(/^I enter (.*) and (.*)$/, async function (valid_user, password) {
  //console.log(`logging in as ${username}`);
  let usernameField = await $("[name=user-name]");
  let passwordField = await $("[name=password]");

  await usernameField.setValue(valid_user);
  await passwordField.setValue(password);
  console.log("this user is" + valid_user);
});

//Enter invalid login details from the examples table
When(/^I am entering (.*) and (.*)$/, async function (invalid_user, password) {
  let usernameField = await $("[name=user-name]");
  let passwordField = await $("[name=password]");

  await usernameField.setValue(invalid_user);
  browser.pause(3000);
  await passwordField.setValue(password);
  browser.pause(3000);
  console.log(`this user is ${invalid_user}`);
});

// CLick login and verify correct url is displayed on the new page
Then(/^I click Login, I login successfully/, async function () {
  let loginBtn = await $("[name=login-button]");
  await loginBtn.click();
  await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  let menu = await $('button[id="react-burger-menu-btn"]');
  await menu.click();
  const reset = await $("=Reset App State");
  await expect(reset).toHaveText("Reset App State");
  await expect(reset).toHaveAttribute("href", "#");
  await reset.click();
});

// click Logim and verify error messsage from Examples table is displayed to the user.
Then(/^I click Login, I should see this error message (.*)/, async function (message) {
    let loginBtn = await $("[name=login-button]");
    await loginBtn.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    let errorMsg = await $("[data-test=error]");
    await expect(errorMsg).toHaveText(message);
  }
);
