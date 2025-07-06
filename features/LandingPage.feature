Feature: Home Page functionality
  @fixed
  Scenario: Successful launch of web page
    Given user is on ford parts homepage
    Then user wait for the promotion popup to be visible
    Then user close the promotion popup
    # Then user verifies the landing page has loaded

# Scenario: User selects the year
#     Given user is on the Landing page
#     When User selects a year
#     Then A year is selected
    

