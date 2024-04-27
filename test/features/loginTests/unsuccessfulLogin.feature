# Feature: Unsuccessful login tests

    
#     Scenario Outline:Verify an invalid user cannot login to view the homepage
#         Given I navigate to baseURL
#         When I am entering <invalid_user> and <password>
#         Then I click Login, I should see this error message <message>

#         Examples:
#             | invalid_user    | password     | message                                             |
#             | locked_out_user | secret_sauce | Epic sdvadface: Sorry, this user has been locked out. |