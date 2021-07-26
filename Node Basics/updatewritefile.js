var fs = require('fs');
fs.writeFile('mynewfile2.txt','This is new paragraph',function(err){
    if (err) throw err;
    console.log('Updated!');
});