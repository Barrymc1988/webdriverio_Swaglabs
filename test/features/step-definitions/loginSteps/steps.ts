import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^I navigate to baseURL$/, function () {
  browser.url("");
});

When(/^I enter (.*) and (.*)$/, async function (valid_user, password) {
  //console.log(`logging in as ${username}`);
  let usernameField = await $("[name=user-name]");
  let passwordField = await $("[name=password]");

  await usernameField.setValue(valid_user);
  browser.pause(3000);
  await passwordField.setValue(password);
  browser.pause(3000);
  console.log('this user is' + valid_user);
});

When(/^I am entering (.*) and (.*)$/, async function (invalid_user, password) {
    //console.log(`logging in as ${username}`);
    let usernameField = await $("[name=user-name]");
    let passwordField = await $("[name=password]");
  
    await usernameField.setValue(invalid_user);
    browser.pause(3000);
    await passwordField.setValue(password);
    browser.pause(3000);
    console.log(`this user is ${invalid_user}`);
  });

Then(/^I click Login, I login successfully/, async function () {
  let loginBtn = await $("[name=login-button]");
  loginBtn.click();
  await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
});

Then(/^I click Login, I should see this error message (.*)/, async function (message) {
  let loginBtn = await $("[name=login-button]");
  loginBtn.click();
  await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  let errorMsg = await $("[data-test=error]")
await expect(errorMsg).toHaveText(message)
});
