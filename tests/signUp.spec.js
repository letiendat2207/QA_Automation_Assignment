const {test, expect} = require('@playwright/test')

function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
  

const randomFirstName = createRandomString(5); //random first name
const randomLastName = createRandomString(5);   //random last name
const email = "nguyenvanB@gmail.com"; //random email
const password = "@ABCeft0203156"; //random password
module.exports = {email, password};


test('sign up', async({page}) => {

    //navigate to the homepage of the website
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.locator('xpath=/html/body/div[2]/header/div[2]/a/img').click();

    //click to create a new account
    await page.locator('xpath=/html/body/div[2]/header/div[1]/div/ul/li[3]/a').click();

    //fill the random first name and the random last name
    await page.locator('xpath=//*[@id="firstname"]').fill(randomFirstName);
    await page.locator('xpath=//*[@id="lastname"]').fill(randomLastName);

    //fill the email and the password
    await page.locator('xpath=//*[@id="email_address"]').fill(email);
    await page.locator('xpath=//*[@id="password"]').fill(password);

    //confirm password
    await page.locator('xpath=//*[@id="password-confirmation"]').fill(password);

    //click on create an account
    await page.locator('xpath=//*[@id="form-validate"]/div/div[1]/button').click();

})