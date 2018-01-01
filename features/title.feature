    
Feature: Title check
  I should be able to go to a website
  and check its title

Scenario: Get the title of webpage
    Given You go to the website "http://www.google.com"
    Then I expect the title of the page is "Google"
    
# Scenario: Get the title of webpage
#     Given You go to the website "http://tmap.net"
#     Then I expect the title of the page is "Testing with the TMap Suite | TMap"   
# 
# Scenario Outline: Get the title of websites
#     Given You go to the website <site>
#     Then I expect the title of the page is <title>
#     
#     Examples:
#     | site                      | title                                 |
#     | "http://www.google.com"   | "Google"                              |
#     | "http://tmap.net"         | "Testing with the TMap Suite \| TMap" |
