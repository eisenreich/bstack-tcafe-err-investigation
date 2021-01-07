Feature: Test Feature

    Feature Description

    Scenario: Search in Google successful
        Given I am on google
        When I enter random text into search input
        Then I wait for 5 seconds and no error happended

    Scenario: Search in Google fail
        Given I am on google
        When I enter random text into search input that will fail
        Then I wait for 5 seconds and no error happended

    Scenario: Search in local tunnel fail
        Given I am on local tunnel
        When I enter random text into search input that will fail
        Then I wait for 5 seconds and no error happended