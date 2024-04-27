Feature: Product page tests
    @demo
    Scenario Outline: Verify an item is visible in the basket after being selected and added

        Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully
        When I select a product and add to basket
        Then I view the basket
        Then I expect to see the item listed
        Examples:
            | valid_user    | password     |
            | standard_user | secret_sauce |
            | problem_user  | secret_sauce |