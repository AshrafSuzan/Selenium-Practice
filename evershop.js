const {Builder, By, Key} = require ('selenium-webdriver');
async function testEvershop(){
    let driver = await new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts( {
    implicit: 18000,
});

await driver.manage().window().maximize();
await driver.get("https://demo.evershop.io/");
await driver.findElement(By.className('search-icon')).click();
await driver.findElement(By.xpath("//input[@placeholder = 'Search']")).sendKeys('Nike react phantom run flyknit 2');
await driver.findElement(By.xpath("//input[@placeholder = 'Search']")).sendKeys(Key.RETURN);

//close the browser
//awit driver.quit();
}

testEvershop();