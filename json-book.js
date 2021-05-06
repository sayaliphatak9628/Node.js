var http = require('http');
var server = http.createServer((req,res)=>{
    var empJSON = {
        name : 'newton',
        job : 'scientist',
        age : 152
    }
    res.writeHead(200,{'content-type': 'application/json'});
    res.write(JSON.stringify(empJSON));
    res.end();
});
server.listen(5050);