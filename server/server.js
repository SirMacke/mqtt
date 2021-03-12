let http = require('http');
httpServer = http.createServer();
mosca = require('mosca');
require('./pub2');

let settings = {
  http: {
    port: 1884,
    bundle: true,
    static: './'
  }
};

let server = new mosca.Server(settings);
server.attachHttpServer(httpServer);

let port = 3005;
httpServer.listen(port);

server.on('ready', () => {
  console.log('Server is running on port: ' + port);
});

server.on('clientConnected', (client) => {
  console.log("Client connected", client.id);
});

/*server.on('published', (packet, client) => {
  console.log('Published', packet.payload.toString());
});*/