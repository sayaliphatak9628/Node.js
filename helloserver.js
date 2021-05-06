var http = require('http'); //attaches http module
//creating a server
http.createServer(function (req,res){
    //writes/updates the header ie localhost
    res.writeHead(200, {'Content-type': 'text/html'});
    //http response adds the text on localhost
    res.write("Hello Sayali Phatak");
    res.end();
}).listen(2010);

//ctrl + c - to stop running server
//ctrl + ~ - to open terminal