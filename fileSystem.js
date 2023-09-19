const fs = require('fs');

var fileName = './file1.txt';

fs.writeFile('./file1.txt', 'This is the first line of the file', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File created successfully');
}
);
fs.stat(fileName, (err, stats) => {
    if(err){
        console.log(err);
        return;
    }
    fs.open(fileName, 'r', (err, fd) => {
        if(err){
            console.log(err);
            return;
        }
        var buffer = new Buffer.alloc(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
            if(err){
                console.log(err);
                return;
            }
            var data = buffer.toString('utf8', 0, buffer.length);
            console.log(data);
            fs.close(fd, () => {
                console.log('File closed successfully');
            });
        });
    }
    );

}
);


console.log('This is the last line of the program');
console.log({...global})