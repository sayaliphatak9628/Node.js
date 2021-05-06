var mymodule = require('./mymodule-book');
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('The current date and time is: '+mymodule.myDate());
    res.end;
}).listen(8080,'127.0.0.1');