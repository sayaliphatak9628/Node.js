var http = require('http');
var str = '';
http.get('http://jsonplaceholder.typicode.com/posts',(res)=>{ //jsonplaceholder has fake text details
    res.on('data',(posts)=>{
        str+=posts;
    });
});
    var server = http.createServer((req,res)=>{
        res.writeHead(200,{'Content-type':'application/json'});
        res.write(str);
        res.end();
});
server.listen(8081);