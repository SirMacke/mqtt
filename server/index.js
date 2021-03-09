const mosca = require('mosca');
require('./pub');
require('./sub');

let settings = {
  port: 1883,
  http: {
    port: 1884,
    bundle: true,
    static: './'
  }
}

const server = new mosca.Server(settings);

server.on('ready', () => {
  console.log('Server ready!');  
});

server.on('clientConnected', (client) => {
  console.log('Client Connected', client.id)
});

server.on('published', function (packet) {
  //console.log(packet);
  //console.log('Published message' + packet.payload + " on " + packet.topic);
})