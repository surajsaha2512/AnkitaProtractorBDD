Feature: Login page functionality
  Scenario: Successful Login of web page
    Given user is on Login Page
    Then user fills all details
    Then user clicks on submit button
    Then user checks form is submitted successfully

  Scenario: Functions of Shop page by product name
    Given user is on Login Page
    Given user is on shop page
    Then user selects products
    | productName    |Model|
      | iphone X       |pro|
      | Samsung Note 8 |plus max|


