Feature: Login tests

    @demo
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

