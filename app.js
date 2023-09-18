const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let query = 'What is your name?\n ';
rl.question(query, (answer) => {
    console.log(`Your name is ${answer}`);
    rl.close();
});
