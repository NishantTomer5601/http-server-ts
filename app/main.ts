import * as net from "net";


const server = net.createServer((socket) => {
    const response = `HTTP/1.1 200 OK\r\n\r\n`;
    socket.write(response);
    socket.end();
});

server.listen(4221, "localhost");
