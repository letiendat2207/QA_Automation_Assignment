const {test, expect} = require('@playwright/test')

const {email, password} = require('./signUp.spec');

test('sign in', async({page}) => {

    //navigate to the homepage of the website
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.locator('xpath=/html/body/div[2]/header/div[2]/a/img').click();

    //click to sign in
    await page.locator('xpath=/html/body/div[2]/header/div[1]/div/ul/li[2]/a').click();

    //fill the email and the password
    await page.locator('xpath=//*[@id="email"]').fill(email);
    await page.locator('xpath=//*[@id="pass"]').fill(password);

    //click to sign in
    await page.locator('xpath=//*[@id="send2"]/span').click();

})