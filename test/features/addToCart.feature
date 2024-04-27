Feature: Product page tests
    Scenario Outline: Verify an item is visible in the basket after being selected and added

        Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully
        When I select a product and add to basket
        Then I view the basket
        Then I expect to see the item listed

        Examples:
            | valid_user              | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |

@demo
     Scenario Outline: Verify an item is removed from the basket after being added

Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully
        When I select the first item on the page
        Then I successfully remove the item 

         Examples:
            | valid_user              | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |
    