var fs = require('fs');
fs.writeFile('mynewfile3.txt','Hello World!',function(err){
    if (err) throw err;
    console.log('Saved!');
});