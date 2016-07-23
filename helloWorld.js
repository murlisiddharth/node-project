var http = require("http");
var myServer = http.createServer(function(request,response){
  response.writeHead(200,{"content-type" : "text/html"});
  response.write("<b>Hello World</b>");
  response.end();
});

myServer.listen(3000);
console.log("Type http://localhost:3000 into your browser");