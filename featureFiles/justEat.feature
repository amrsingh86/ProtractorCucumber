Feature: Use the website to find restaurants

Scenario: Search for restaurants in my area

Given I want food in "AR51 1AA"
When I search for restaurants
Then I should see information restautrants in "AR51 1AA, Area51"

Scenario: Search empty postal code

Given User redirected to home page
When Enter empty postal code " "
Then I should see error message for empty post code "Please enter a postcode"

Scenario: Search invalid postal code

Given I am on home page "https://www.just-eat.co.uk/"
When Enter wrong postal code "ABCD1234"
Then I should see error message to enter valid code "Please enter a full, valid postcode"


