const dgram = require('dgram');

const message = new Buffer('Nodejs learning');
const client = dgram.createSocket('udp4');

client.send(message, 0, message.length, 8090, 'localhost', (err, bytes) => {
    client.close();
});