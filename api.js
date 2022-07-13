const axios = require('axios');
const puppeteer = require('puppeteer-core');
// const ids = ["i1regwt", "", "", ""]
const id = "i1regwt"

async function startBrowser() {
    console.log("start")
    new Promise(axios.get(`http://local.adspower.net:50325/api/v1/browser/start?user_id=${id}`)).then(async (res) => {
        // console.log(res.data);
        if(res.data.code === 0 && res.data.data.ws && res.data.data.ws.puppeteer) {
            try{
                const browser = await puppeteer.connect(
                    {browserWSEndpoint: res.data.data.ws.puppeteer, defaultViewport:null});
                const page = await browser.newPage();
                await page.goto('https://myaccount.google.com/security?hl=en&nlr=1');
                console.log(page)
                return page
            } catch(err){
                console.log(err.message);
            }
        }
    }).catch((err) => {
        console.log(err)
    })
}

async function changePassword(page) {
    try { //Попытка выполнения кода несмотря на возможные ошибки
        console.log("Мы зашли")
        const passwordButtonXpath = '//*[@id="i21"]/div/div[1]/div/h3'
        console.log(page)
        await page.waitForXPath(passwordButtonXpath)
        const passwordButton = await page.$x(passwordButtonXpath)
        // Обращаемся к 0 элементу, потому что page.$x находит все элементы и записывает их в массив, даже если будет найден всего 1 элемент, он будет в массиве
        await passwordButton[0].click()

        const passwordInputXpath = '//*[@id="password"]/div[1]/div/div[1]/input'
        await page.waitForXPath(passwordInputXpath)
        const passwordInput = await page.$x(passwordInputXpath)
        await passwordInput[0].click()
        await page.type('input[name=password]', '5260336Arsen', {delay: 20})
        const nextButtonXpath = '//*[@id="passwordNext"]/div/button'
        const nextButton = await (await page.$x(nextButtonXpath))[0]
        await nextButton.click()
        const newPasswordInputXpath = (await ('//*[@id="i6"]'))
        await page.waitForXPath(newPasswordInputXpath)
        const newPasswordInput = await page.$x(newPasswordInputXpath)
        await newPasswordInput[0].click()
        await page.type('input[name=password]', '5260336Arsen1', {delay: 20})

        const newPasswordInputXpath2 = (await ('//*[@id="i10"]'))
        await page.waitForXPath(newPasswordInputXpath2)
        const newPasswordInput2 = await page.$x(newPasswordInputXpath2)
        await newPasswordInput2[0].click()
        await page.type('input[name=confirmation_password]', '5260336Arsen1', {delay: 20})
    }

            // const changePasswordButtonXpath = '//*[@id="yDmH0d"]/c-wiz/div/div[2]/div[2]/c-wiz/div/div[4]/form/div/div[2]/div/div/button/span'
            // await page.waitForXPath(changePasswordButtonXpath)
            // const changePasswordButton = await (await page.$x(changePasswordButtonXpath))[0]
            // await changePasswordButton.click()
// не нужно менять пароль, потом обратно не поменяем!

    catch(err){
            console.log(err.message);  //вывод ошибки при обнаружении
        }
}
(async() => {
    const page = await startBrowser()
    await changePassword(page)
})()

// startBrowser().then(async (page) => {
//     await changePassword(page)
// })





// startBrowser()
// changePassword()
// deleteDevice()
