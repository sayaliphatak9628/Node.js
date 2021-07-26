var url = require('url');
var adr = 'http://localhost:8085/default.htm?year=2021&month=September';
var q = url.parse(adr,true);

console.log(q.host);
console.log(q.portname);
console.log(q.search);

var qdata = q.query;
console.log(qdata);