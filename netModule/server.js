const net = require('net');
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

const server = net.createServer();
const port = 3000;

server.on('connection', (socket) => {
    console.log('Client connected from: ' ,socket.remoteAddress, socket.remotePort);
    socket.write('Hello from the server.\n');
    socket.on('data', (data) => {
        console.log('Data received from client: ', data.toString());
    });
    rl.prompt();
    rl.on('line', (line) => {
        socket.write(line.trim());
        rl.prompt();
    });
    socket.on('close', (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log('Client disconnected');
    });
}
);

server.on('listening', () => {
    console.log(`Server is listening on port ${port}`);
});

server.listen(port);