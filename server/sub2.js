const mqtt = require('mqtt');
let client = mqtt.connect('mqtt:/213.112.94.40', { clientId: 'Lyssnarlasse', clean: false });

client.on('connect', () => {
  client.subscribe({
    'ping': 0
  });
});

client.on('message', (topic, message) => {
  let context = message.toString();
  if (topic == 'json') {
    let json = JSON.parse(context);
    console.log(json.name + ' åker ' + json.direction);
  } else if (topic == 'offline') {
    let json = JSON.parse(context);
    console.log(json.name + ' åker ' + json.direction);
  } else {
    console.log(context);
  }
});