Feature: Searching for Jobs on Haleybridge Website

  I want to find Jobs on Haleybridge Website

  Scenario: Searching for IT Practice Lead on Haleybridge Website

    Given I open the Haleybridge Website
    When I am typing my search request "IT Practice Lead" in Search Box
    Then I am clicking on enter button
    Then I should see that first result is IT Practice Lead

  Scenario: Searching for Senior Java Developer in Germany on Haleybridge Website

    Given I open the Haleybridge Website
    When I am typing my search request "Senior Java Developer" in Search Box
    Then Putting Location as "Germany"
    Then I am clicking on Search button on page
    Then I should see the opening for Senior Java Developer in Germany









