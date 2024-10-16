const {Builder, By, Key} = require('selenium-webdriver');
async function testDemoWebsite(){
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.theknowledgeacademy.com/blog/demo-website-for-automation-testing/');

  let title = await driver.getTitle();
  console.log('Page title:',title);

  let searchInput = await driver.findElement(By.id('search-input'));
  await searchInput.sendKeys('selenium');
  await searchInput.sendKeys(Key.RETURN);

  let searchResults = await driver.findElement(By.className('search-result'));
  console.log('Number of search results:',searchResults.length);

  await driver.quit();
}

testDemoWebsite();