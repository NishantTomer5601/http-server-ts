import * as net from 'net';

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const request = data.toString();
        const headers = request.split('\r\n').slice(1);  // Extract headers
        console.log('Headers:', headers);

        const response = `HTTP/1.1 200 OK\r\n\r\nHeaders received`;
        socket.write(response);
        socket.end();
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});