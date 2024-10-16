const {Builder,By,Key} = require ('selenium-webdriver');
//const assert = require ("assert");
var should = require ("chai");

//describe block for mocha
describe("add todo test",function(){
    
//it block for mocha
it("successfully adds todo to application", async function(){

//launch browser
let driver = await new Builder().forBrowser("chrome").build();
//navigate web application
await driver.get("https://lambdatest.github.io/sample-todo-app/");
//add to do list (perform in application)
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);

done();

//close the browser
await driver.quit();
});

});




/*async function example(){

//launch browser
let driver = await new Builder().forBrowser("chrome").build();
//navigate web application
await driver.get("https://lambdatest.github.io/sample-todo-app/");
//add to do list (perform in application)
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);

// assert validate if the new added or not
let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
    return value
});

//node assert
//assert.strictEqual(todoText,"Learn Selenium");

//assert using chai
todoText.should.equal ("Learn Selenium");

//close the browser
await driver.quit();
}
example();*/