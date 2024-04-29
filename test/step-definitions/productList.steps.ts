import { Then } from "@wdio/cucumber-framework";

// Verify that once an item link is clicked, the same item is displayed on the new page
Then(/^I select click on the item link I expect to see the correct item name displayed on new page/,
  async function () {
    const link = await $("=Sauce Labs Backpack");
    await expect(link).toHaveText("Sauce Labs Backpack");
    await expect(link).toHaveAttribute("href", "#");
    await link.click();
    browser.pause(3000);
    const itemName = await $("//div[contains(text(), 'Sauce Labs Backpack')]");
    await expect(itemName).toBePresent();
  }
);

