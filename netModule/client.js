const net = require('net');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'

});

const client = net.connect({port:3000}, () => {
    console.log('Client connected');
    client.write('Hello from the client.\n');
}
);

client.on('data', (data) => {
    console.log('Data received from server: ', data.toString());
}
);

rl.prompt();
rl.on('line', (line) => {
    client.write(line.trim());
    rl.prompt();
}
);