const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const haleyPage = require('../support/pages/haley-page');

Given(/^I am on Haleybridge Website$/, async function() {
    await testController.navigateTo(haleyPage.haleywebsite.url());
});

When(/^I search for "([^"]*)"$/, async function(text) {
    await testController.typeText(haleyPage.haleywebsite.searchTextBox(), text);
    await testController.click(haleyPage.haleywebsite.searchButton());

});

Then(/^I should see that first result is (.*)$/, async function(text) {
    await testController.expect(haleyPage.haleywebsite.firstSearchResult().innerText).contains(text);
});

// Then(/^I am clicking on (.*) button$/, async function(text) {
//      await testController.pressKey(text);
//  });



When(/^I look for "([^"]*)" in "([^"]*)"$/, async function(text1) {
    await testController.typeText(haleyPage.haleywebsite.searchTextBox2(), text);
    await testController.typeText(haleyPage.haleywebsite.searchLocation(), text);

    await testController.click(haleyPage.haleywebsite.searchButton());



// Then(/^Putting Location as "([^"]*)"$/, async function(text) {
    // await testController.typeText(haleyPage.haleywebsite.searchLocation(), text);
// });

Then(/^I am clicking on Search button on page$/, async function() {
    await testController.click(haleyPage.haleywebsite.searchButton());
});

Then(/^I should see the opening for (.*) in (.*)$/, async function(text1, text2) {
    await testController.expect(haleyPage.haleywebsite.keyword().innerText).contains(text1);
    await testController.expect(haleyPage.haleywebsite.location().innerText).contains(text2);
});

// const gitHubRoleForExample = Role(githubPage.github.url() + 'login', async function(t) {
//     await t
//         .click(githubPage.github.loginButton())
//         .expect(githubPage.github.loginErrorMessage().innerText).contains('Incorrect username or password.');
// });

// Then(/^I am trying to use (.*)$/, async function(text) {
//     await testController.useRole(gitHubRoleForExample);
// });
