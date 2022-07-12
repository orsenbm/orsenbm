const puppeteer = require('puppeteer'); // импорт пупитера

// async function startPupik() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     await page.screenshot({path: 'example.png'});
// }
// const options = {
//     headless: false,
    // headless: false,
    // headless: false,
    // headless: false,
    // headless: false,
    // headless: false,
// }

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    // await browser.close();
})();

// (() => {
//     const browser = puppeteer.launch();
//     const page = browser.newPage();
//     page.goto('https://example.com');
//     page.screenshot({path: 'example.png'});

    // await browser.close();
// })();
