const logger = require('./index')

console.log('---- Object ----');

logger({name: 'David', lastname: 'Sttivend'})

console.log('---- String ----');

logger('Hello World')

console.log('---- Array ----');

logger([1, 2, 3, 4, 5])