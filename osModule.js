const os = require('os');

console.log('OS CPU architecture: ' + os.arch());
console.log('Free memory of the system: ' + os.freemem());
console.log('Total memory of the system: ' + os.totalmem());
console.log('OS Platform: ' + os.platform());
console.log('Information about the current user: ' + os.userInfo().username);
console.log('OS Type: ' + os.type());
console.log('OS Release: ' + os.release());
console.log('OS Temporary folder: ' + os.tmpdir());
console.log('Host Name: ' + os.hostname());