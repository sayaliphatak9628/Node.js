var url = require('url');
var adr = 'http://localhost:8083/default.htm?year=2017&month=June';
var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.query);

var qdata = q.query;
console.log(qdata);