---
runme:
  id: 01HWJWD31GM0QBTM7EDR3W7HC0
  version: v3
---

Functional testing of Swag labs website

The application under test is an online ecommerce store selling multiple products. 

QA are requried to verify the functionally throughout the whole website both granular tests and e2e journeys where login, item selection, checkout and logout are included.

The coding language being used for this webdriverio project is Typescript along with a cucumber test runner using the Gherkin syntax 


Tools required: WebdriverIO, Cucumber, Allure reporter

* To install webdriverIO into a new project simply enter the following line, containing the correct path you want your new project to be located 'npm init wdio@latest ./path/to/new/project'
This will begin installing and you will need to answer a few questions about the setup you need.
Please ensure to answer the following as noted.

    Which Framework do you wish to use? (https://cucumber.io/)
    Do you want to use a compiler? Typrescript (https://www.typescript.org/)
    Which reporter do you want to use? spec + allure
    Do you want me to run npm install? Y.

Cucumber setup

An adapter package is required to add cucumber to webdriverio, to add this enter the following command into your terminal 'npm install @wdio/cucumber-framework --save-dev'
Once above step is completed, navigate to wdio.conf.ts and find the framework field. Ensure this is set to cucumber,rather than mocha like so.... framework: 'cucumber'

Verify that the correct path to the feature files is displayed in wdio.conf.ts 

specs: [
        './test/features/**/*.feature'
    ],

Verify that the correct path to the step-definitions is displayed in wdio.conf.ts   

cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./test/step-definitions/*.steps.ts'], 

Allure setup

To add allure to the webdriverio project enter the following command into your terminal 'npm install @wdio/allure-reporter --save-dev'

Verify wdio.conf.ts contains allure in the reporters section 'reporters:

 ['spec',['allure', {
        outputDir: 'allure-results',

Creating feature files

a features folder will be within the test folder on your project.

To create a new feature file, select the features folder and click add new file.
For a file to be recognised as a feature file it will need to end with .feature
Each test which contains an examples table will require an outline scenario, any test that does not include an examples table will require a scenario only.



Creating step-definitions

Locate the step-definitions folder already created on setup.
Enter the steps.ts file and import 'Given, When, Then'
import {Given, When, Then } from "@wdio/cucumber-framework";

Each step will require the following syntax with the description matching the step in the corresponding feature file

Given/When/Then(/^Your step description/, async function() {

})

Running tests
To run all tests created, enter $npm run wdio into the terminal command line

Within wdio.conf.ts I have added a tag @complete, this means only tests with this tag will run when the above command is entered.

After each test run has completed, we can run $ npx allure serve allure-results to view the allure report, this will give a breakdown of what feature files have passed or failed and a breakdown of what tests within the feature has passed or failed.