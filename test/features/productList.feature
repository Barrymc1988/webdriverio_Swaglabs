@complete
Feature: Feature name

Scenario Outline: Verify item selected is correct item on click through
        Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully
        When I select click on the item link I expect to see the correct item name displayed on new page

        Examples:
            | valid_user              | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |