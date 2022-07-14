const axios = require('axios');
const puppeteer = require('puppeteer-core');

const ids = ['i1regwt', 'j2yogvq', 'j2yogvp'];
const wait = id =>
    new Promise(resolve =>
        setTimeout(() => resolve(id), 3000)
    );
const startall = async () => {
    for (id of ids) {
        axios.get(`http://local.adspower.net:50325/api/v1/browser/start?user_id=${id}`).then(async (res) => {

        });
        const waitInfo = await wait(id);
        console.log(`login to ${waitInfo}`);
    }
    console.log('All emails were sent');
};
startall();
