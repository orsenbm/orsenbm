// Importing the Required Modules
const axios = require('axios');
const puppeteer = require('puppeteer-core');
const ids = ["j2yogvq", "j2yogvp"]
let i = 0


const fs = require('fs');
const readline = require('readline');


const file = readline.createInterface({
    input: fs.createReadStream('gmail2.txt'),
    output: process.stdout,
    terminal: false
});


let lines = []

// console.log(lines)
//lines.push()
// console.log(lines)
// lines.push(2)

// file.on('line', async (line) => {
//     lines.push(line)
// })


const fileStream = fs.createReadStream('gmail2.txt');

const rl = readline.createInterface({
    input: fileStream
});

for await (const line of rl) {
    console.log(line)
}

// setTimeout(()=> {
//     console.log("Ждем")
// }, 3000)
// console.log(lines)

// if (line != '')
// {
//     setTimeout( () => {
//         console.log('ждем')
//     }, 2000)
//
//
//
//     const mail = line.split(';')[0]
//     const password = line.split(';')[1]
//     const recoveryMail = line.split(';')[2]
//     const id = ids[i]
//     await axios.get(`http://local.adspower.net:50325/api/v1/browser/start?user_id=${id}`).then(async (res) => {
//         // console.log(res.data);
//         if(res.data.code === 0 && res.data.data.ws && res.data.data.ws.puppeteer) {
//             try {
//                 const browser = await puppeteer.connect(
//                     {browserWSEndpoint: res.data.data.ws.puppeteer, defaultViewport:null});
//                 const page = await browser.newPage();
//                 await page.goto('https://accounts.google.com/signin');
//                 const inputXpath = '//*[@id="identifierId"]'
//                 await page.waitForXPath(inputXpath)
//                 const input = await page.$x(inputXpath)
//                 console.log(input)
//                 // Обращаемся к 0 элементу, потому что page.$x находит все элементы и записывает их в массив, даже если будет найден всего 1 элемент, он будет в массиве
//                 await input[0].click()
//                 await page.type('input[name=identifier]', mail,{delay: 20})
//                 const nextButtonXpath = '//*[@id="identifierNext"]/div/button/div[3]'
//                 const nextButton = await(await page.$x(nextButtonXpath))[0]
//                 await nextButton.click()
//                 i += 1
//
//
//
//
//             } catch(err){
//                 console.log(err.message);
//             }
//         }
//     }).catch((err) => {
//         console.log(err)
//     })
//
// }
