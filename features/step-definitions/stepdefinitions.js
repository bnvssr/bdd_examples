// stepdefinitions.js

const defineSupportCode = require('cucumber').defineSupportCode;
const expect = require('chai').expect;

defineSupportCode(function({ Before, After, Given, Then, When }) {
  
  Before(function(scen){
//      console.log('\n', 'Before each scenario');
//      console.group("--- start 'scen' ---");
//      console.log(scen);
//      console.groupEnd();
//      
//      console.group("--- start 'scen.scenario.feature.description' ---");
//      console.log(scen.scenario.feature.description);
//      console.groupEnd();
//      
//      console.group("--- start 'scen.scenario.keyword' ---");
//      console.log(scen.scenario.keyword);
//      console.groupEnd();
//      
//      console.group("--- start 'scen.scenario.feature' ---");
//      console.log(scen.scenario.feature);
//      console.groupEnd();
  });  

  After(function(scen){
//      console.log('\n', 'After each scenario');
//      console.log(scen);
  });  
    
//  Given(/^You go to the website "(.*?)"/, (url) => {
  Given('You go to the website {stringInDoubleQuotes}', (url) => {
    browser.url(url);
  });
    
  Given('You go to the website {int}', (url) => {
    browser.url(url);
  });

  Then(/^I expect the title of the page is "(.*?)"/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
  });
});
