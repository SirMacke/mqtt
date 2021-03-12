let mqtt = require('mqtt');
let client = mqtt.connect('mqtt:/213.112.94.40', {
  clientId: 'Lamplennert',
  clean: false,
  will: {
    topic: 'offline',
    payload: 'Lamplennert',
    qos: 2
  }
});

client.on('connect', () => {
  let count = 0;
  let pingTimer = setInterval(() => {
    client.publish('ping', 'count: ' + count, { qos: 0, retain: false });
    count++;
  }, 1000);
});

client.on('error', (error) => {
  console.log('Error connecting: ', error);
  process.exit(1);
});

/*const end = (timers) => {
  timers.forEach(timer => {
    clearInterval(timer);
  });
  client.end();
}*/