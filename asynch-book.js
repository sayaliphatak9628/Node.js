
var fs = require('fs');
fs.mkdir('hello',function(){
        fs.writeFile('.//hello/write.txt', function(){
            fs.readFile('.//hello//write.txt','utf-8',function(err,data){
                console.log(data);
        })
    })
});
