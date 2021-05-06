var fs = require('fs');
/* //to create a directory & a file
fs.mkdirSync('hello');
fs.writeFileSync('.\\hello\\myfile.txt','utf8');
fs.readFileSync('.\\hello\\myfile.txt','utf8');
console.log('done');
*/ //to delete a file & its directory
fs.unlinkSync('.\\hello\\myfile.txt');
fs.rmdirSync('hello');
console.log('done');