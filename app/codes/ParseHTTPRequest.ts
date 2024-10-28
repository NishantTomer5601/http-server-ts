import * as net from "net";


const server = net.createServer((socket) => {
    socket.on('data',(data)=>{
        const reqData=data.toString();
        const requestLines=reqData.split('\r\n');
        const requestLine = requestLines[0];
        const [method, path, httpVersion] = requestLine.split(' ');
        path === '/' ? 'HTTP/1.1 200 OK\r\n\r\n' : 'HTTP/1.1 404 Not Found\r\n\r\n';
        socket.write(path);
        socket.end();
    })
    
});

server.listen(4221, "localhost");
