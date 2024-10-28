import * as net from 'net';

const server = net.createServer((socket) => {
    const responseBody = "Hello, this is the response body!";
    const response = `HTTP/1.1 200 OK\r\nContent-Length: ${responseBody.length}\r\n\r\n${responseBody}`;

    socket.write(response);
    socket.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});