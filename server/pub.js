let mqtt = require('mqtt');
let client = mqtt.connect('mqtt:/192.168.10.206', {
  clientId: 'Lamplennert',
  clean: false,
  will: {
    topic: 'offline',
    payload: 'Lamplennert',
    qos: 2
  }
});

client.on('connect', () => {
  let messtimer = setInterval(() => {
    client.publish('mess', 'Message', { qos: 0, retain: false });
  }, 1000);

  let count = 0;

  let jsontimer = setInterval(() => {
    let dataObject = { name: `Max ${count}`, direction: 'left' };
    client.publish('json', JSON.stringify(dataObject), { qos: 0, retain: false });
    count++;
    if (count == 3) end([jsontimer, messtimer]);
  }, 1000);
  
});

client.on('error', (error) => {
  console.log('Error connecting: ', error);
  process.exit(1);
});

const end = (timers) => {
  timers.forEach(timer => {
    clearInterval(timer);
  });
  client.end();
}