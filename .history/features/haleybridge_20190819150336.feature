Feature: Searching for Jobs on Haleybridge Website

  I want to find Jobs on Haleybridge Website

  Scenario: Searching for IT Practice Lead on Haleybridge Website

    Given I am on Haleybridge Website
    When I search for "IT Practice Lead"
    Then I should see that first result is IT Practice Lead

  Scenario: Searching for Senior Java Developer in Germany on Haleybridge Website

    Given I am on Haleybridge Website
    When I look for "Senior Java Developer" in "Germany"
    Then I should see the opening for Senior Java Developer in Germany









