// Importing the Required Modules
const axios = require('axios');
const puppeteer = require('puppeteer-core');
// const ids = ["i1regwt", "", "", ""]
const id = "i1regwt"

const fs = require('fs');
const readline = require('readline');

// Creating a readable stream from file
// readline module reads line by line 
// but from a readable stream only.
const file = readline.createInterface({
    input: fs.createReadStream('gmail2.txt'),
    output: process.stdout,
    terminal: false
});



// Printing the content of file line by
//  line to console by listening on the
// line event which will triggered
// whenever a new line is read from
// the stream
file.on('line', (line) => {
    const mail = line.split(';')[0]
    const password = line.split(';')[1]
    const recoveryMail = line.split(';')[2]
    const id = 'j2yogvq'
    axios.get(`http://local.adspower.net:50325/api/v1/browser/start?user_id=${id}`).then(async (res) => {
        // console.log(res.data);
        if(res.data.code === 0 && res.data.data.ws && res.data.data.ws.puppeteer) {
            try {
                const browser = await puppeteer.connect(
                    {browserWSEndpoint: res.data.data.ws.puppeteer, defaultViewport: null});
                const page = await browser.newPage();
                await page.goto('https://accounts.google.com/signin');
                const emailInputXpath = '//*[@id="identifierId"]'
                console.log(page.frames().length)
                await page.waitForXPath(emailInputXpath, {timeout: 15000})
                const frame = await page.frames()[1]
                await frame.waitForXPath(emailInputXpath, {timeout: 3000})
                const emailInput = await await frame.$x(emailInputXpath)[0]
                await emailInput.click()
                await frame.type('input[name=identifierId]', mail,{delay: 20})
            } catch(err){
                console.log(err.message);
            }
        }
    }).catch((err) => {
        console.log(err)
    })
})
