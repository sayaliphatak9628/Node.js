var inputfile = require('fs');
var data = inputfile.readFile(
    'myfile.txt',
    'utf-8',
    function(err,data){
        if(err)
        {
            console.log('Error occured: '+err);
        }
        else
        {
            console.log(data);
        }
    }
);
console.log('done!');