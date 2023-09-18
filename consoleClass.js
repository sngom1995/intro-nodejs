const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({stdout:output, stderr:errorOutput});
const count = 5;
logger.log('count: %d', count);
const code = 404;
logger.error('count: %d', code);