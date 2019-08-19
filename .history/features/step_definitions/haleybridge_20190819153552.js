const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const haleyPage = require('../support/pages/haley-page');

Given(/^I am on Haleybridge Website$/, async function() {
    await testController.navigateTo(haleyPage.haleywebsite.url());
});

When(/^I search for "([^"]*)"$/, async function(text) {
    await testController.typeText(haleyPage.haleywebsite.searchTextBox(), text);
   set await testController.click(haleyPage.haleywebsite.searchButton());
    

});

Then(/^I should see that first result is (.*)$/, async function(text) {
    await testController.expect(haleyPage.haleywebsite.firstSearchResult().innerText).contains(text);
});

When(/^I look for "([^"]*)" in "([^"]*)"$/, async function(text1, text2) {
    await testController.typeText(haleyPage.haleywebsite.searchTextBox(), text1);
    await testController.typeText(haleyPage.haleywebsite.searchLocation(), text2);
    await testController.click(haleyPage.haleywebsite.searchButton());
});


Then(/^I should see the opening for (.*) in (.*)$/, async function(text1, text2) {
    await testController.expect(haleyPage.haleywebsite.keyword().innerText).contains(text1);
    await testController.expect(haleyPage.haleywebsite.location().innerText).contains(text2);
});