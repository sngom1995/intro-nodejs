console.log('This is the first line.');

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
}
);

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
}
);
