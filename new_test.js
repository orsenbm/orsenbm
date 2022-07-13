const fs = require('fs');
const readline = require('readline');


// let lines = []

async function process() {
    return new Promise((resolve, reject) => {
        let stream = fs.createReadStream('gmail2.txt');

        let rl = readline.createInterface({
            input: stream
        });

        rl.on('line', (line) => {
            // console.log(line);
            lines.push(line)
        // }).on('close', () => {
        //     resolve('finished');
        }).on('error', err => {
            reject(err);
        })

    });
}

(async function () {
    try {
        let lines = []
        const result = await process(lines);
        console.log(lines)
    } catch (e) {
        console.error(e);
    }
})()


//код
