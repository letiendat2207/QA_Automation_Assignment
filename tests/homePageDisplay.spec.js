const {test, expect} = require('@playwright/test')

test('launch home page', async({page}) => {

    //navigate to the homepage of the website
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.locator('xpath=/html/body/div[2]/header/div[2]/a/img').click();
    
})