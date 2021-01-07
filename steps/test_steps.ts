import { Selector, t } from 'testcafe';
import { Given, Then, When } from 'cucumber';
import 'gherkin-testcafe';

Given('I am on google', async () => {
  await t.navigateTo('https://google.com')
})

Given('I am on local tunnel', async () => {
  await t.navigateTo('http://172.30.128.1')
})

When('I enter random text into search input', async () => {
  await t.typeText(Selector('input').filterVisible(), 'Hello World')
})

When('I enter random text into search input that will fail', async () => {
  await t.typeText(Selector('inputttttt').filterVisible(), 'Hello World')
})

Then('I wait for 5 seconds and no error happended', async () => {
  await t.wait(5)
});
