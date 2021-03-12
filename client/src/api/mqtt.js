let mqtt = require('mqtt');
let client = {};

export default {
  launch(id, callback) {
    client = mqtt('mqtt:/213.112.94.40', {
      port: 3005,
      clientId: id,
      clean: false
    });
    client.on('message', (topic, message) => {
      callback(topic, message);
    })
  },
  end() {
    client.end();
  },
  subscribe(topic) {
    client.subscribe(topic);
    console.log('subscribe:', topic);
  },
  publish(topic, message) {
    client.publish(topic, JSON.stringify(message), {qos: 1});
  }
}