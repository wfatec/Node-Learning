const net = require('net');

const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log('client data is: ', data.toString());
        socket.write("hello");
    });

    socket.on('end', () => {
        console.log('disconnected...');
    });

    socket.write('welcome! \n');
})

server.listen(8090, () => {
    console.log('port is 8090!');
})