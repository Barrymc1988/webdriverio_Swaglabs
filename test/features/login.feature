@complete
Feature: Login tests

    Scenario Outline:Verify a valid user can login with correct login details

        Given I navigate to baseURL
        When I enter <valid_user> and <password>
        Then I click Login, I login successfully

 
        Examples:
            | valid_user              | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
            | error_user              | secret_sauce |
            | visual_user             | secret_sauce |

Scenario Outline:Verify an invalid user cannot login to view the homepage
        Given I navigate to baseURL
        When I am entering <invalid_user> and <password>
        Then I click Login, I should see this error message <message>

        Examples:
            | invalid_user    | password     | message                                             |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |