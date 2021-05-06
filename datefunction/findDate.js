var datemodule = require('./datemodule');
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Current Date: '+datemodule.currDate());
    res.end();
}).listen(2021);