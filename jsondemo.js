var http = require ('http');
var server = http.createServer((req,res)=>{
    var sampleJSON = {
        name : 'Sayali',
        addr : 'Charkop',
        qualification : 'MBA'
    }
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify(sampleJSON)); //stringify converts javascript values into json string
    res.end();
});
server.listen(8085);