var fs = require('fs');
fs.rename('mynewfile2.txt','myfile.txt',function(err){
    if (err) throw err;
    console.log('Renamed!');
});