Feature: Successful logout

Scenario Outline:Logout and verify homepage is displayed
    Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully
        Then I click logout and verify im on the login page

         Examples:
            | valid_user              | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |