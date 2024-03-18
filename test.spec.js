module.exports = {

    // ...
    reporters: ['dot', 'spec',

    ['junit', {
        outputDir: './',
        errorOptions: {
            error: 'message',
            failure: 'message',
            stacktrace: 'stack'
        }
    }]
],
    // ...

};


describe("Test suite", ()=> {



it("First test", async () => {
    await browser.url("https://sergoswald.github.io/MY-CV/") ;
    const pageTitle = await browser.getTitle();
    //console.log(pageTitle);
    expect(pageTitle).toEqual("Serg Kobrusev CV");
    //await browser.getTitle().should.be.equal("Serg Kobrusev CV")

});



/*

it("Second test", async () => {
    await browser.url("https://sergoswald.github.io/MY-CV/");
    const header$ = await $('.header')
    console.log(await header$.$('.nav1').$$("li")[1].$("a").getText()) 
});
//не работает не выдает в консоль

*/

/*
it("Second test", async () => {
    await browser.url("https://sergoswald.github.io/MY-CV/");
    const header$ = await $('.header') // or `browser.$('#menu')`
    await header$.$('.nav1').$$("li")[1].$("a").click()
});

*/




// it("$ command", async () => {
//     const baseElement = await ${".jjj"};
//     const childrenElement = await baseElement.$("#kkkk");
//     childrenElement.click();
//     const element = await $(".jjj").$("#kkk");
//     console.log(element);
// });



// it("getWindowSize example ", function() {
//     browser.url("https://sergoswald.github.io/MY-CV/");
//     console.log(browser.getWindowSize());
// });


// describe("Browser Commands ", function() {

//        it("Pause example ", function() {

//                browser.url("https://sergoswald.github.io/MY-CV/");

//                browser.pause(5000);

//                $("=Automation").click();

//        });

// });



})


