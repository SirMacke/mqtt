const mqtt = require('mqtt');
let client = mqtt.connect('mqtt:/192.168.10.206', { clientId: 'Lyssnarlasse', clean: false });

client.on('connect', () => {
  client.subscribe({
    'mess': 0,
    'json': 0,
    'offline': 2 
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