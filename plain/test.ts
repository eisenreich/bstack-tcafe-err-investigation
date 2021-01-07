import { Selector } from 'testcafe';

fixture('Investigate error fixture');

test('Google success', async (t) => {
    await t.navigateTo('https://google.com')
        .typeText(Selector('input').filterVisible(), 'Hello World')
        .pressKey('enter')
        .wait(7);
});

test('Google fail', async (t) => {
    await t.navigateTo('https://google.com')
        .typeText(Selector('inputttt').filterVisible(), 'Hello World')
        .pressKey('enter')
        .wait(7);
});

test('Tunnel fail', async (t) => {
    await t.navigateTo('http://172.30.128.1')
    await t.typeText(Selector('inputttt').filterVisible(), 'Hello World')
        .pressKey('enter')
        .wait(7);
});