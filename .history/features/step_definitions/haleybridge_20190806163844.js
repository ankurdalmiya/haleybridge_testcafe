const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const haleyPage = require('../support/pages/haley-page');

Given(/^I open the Haleybridge Website$/, async function() {
    await testController.navigateTo(githubPage.github.url());
});

When(/^I am typing my search request "IT Practice Lead" on Haleybridge Website$/, async function(text) {
    await testController.typeText(githubPage.github.searchButton(), text);
});

Then(/^I am clicking on "Search" button$/, async function(text) {
    await testController.pressKey(text);
});

Then(/^I should see the list of jobs based on my search$/, async function(text) {
    await testController.expect(githubPage.github.firstSearchResult().innerText).contains(text);
});

const gitHubRoleForExample = Role(githubPage.github.url() + 'login', async function(t) {
    await t
        .click(githubPage.github.loginButton())
        .expect(githubPage.github.loginErrorMessage().innerText).contains('Incorrect username or password.');
});

Then(/^I am trying to use (.*)$/, async function(text) {
    await testController.useRole(gitHubRoleForExample);
});
