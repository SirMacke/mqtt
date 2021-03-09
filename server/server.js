let http = require('http');
httpServer = http.createServer();
mosca = require('mosca');

let settings = {
  port: 3003,
  persistence:{
    factory: mosca.persistence.Mongo,
    url: "mongodb://localhost:27017/mosca"
  }
};

let server = new mosca.Server(settings);
server.attachHttpServer(httpServer);

server.on('published', function(packet, client) {
  console.log('Published', packet.payload.toString());
});

let port = 3003
httpServer.listen(port);

server.on('ready', function(){
  console.log('Server is running at port' + port);  
});