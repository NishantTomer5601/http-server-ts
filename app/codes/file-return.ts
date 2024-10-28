import * as net from 'net';
import * as fs from 'fs';

const server = net.createServer((socket) => {
    fs.readFile('example.txt', (err, data) => {
        if (err) {
            const response = `HTTP/1.1 500 Internal Server Error\r\n\r\nError reading file`;
            socket.write(response);
        } else {
            const response = `HTTP/1.1 200 OK\r\nContent-Length: ${data.length}\r\n\r\n${data}`;
            socket.write(response);
        }
        socket.end();
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});