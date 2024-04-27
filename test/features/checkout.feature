Feature: Add item to shopping cart

    Scenario Outline: Verify an item is visible in the shopping cart after being selected and added

        Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully
        Then I select the first item on the page
        Then I view the basket
        Then I want to checkout successfully

        Examples:
            | valid_user              | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |