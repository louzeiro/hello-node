/*Salva o endereço da URL*/
/*http://localhost:8080/?ano=2020&mes=janeiro*/
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.ano + " " + q.mes;
  res.end(txt);
}).listen(8080);
