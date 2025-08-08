@smoke @login
Feature: SauceDemo Login and Cart Flow

  @smoke @login
  Scenario: Successful login
    Given I open the login page
    When I log in as "standard_user" with "secret_sauce"
    Then I should see the inventory page

  @smoke @cart
  Scenario: Add item to cart
    Given I am logged in as "standard_user" with "secret_sauce"
    When I add the first product to the cart
    Then the cart icon should show "1"

  @smoke @logout
  Scenario: Logout from application
    Given I am logged in as "standard_user" with "secret_sauce"
    When I open the menu
    And I click logout
    Then I should see the login page again