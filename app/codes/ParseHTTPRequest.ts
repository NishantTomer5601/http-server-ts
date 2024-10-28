import * as net from "net";


const server = net.createServer((socket) => {
    socket.on('data',(data)=>{
        const reqData=data.toString();
        const requestLines=reqData.split('\r\n');
        const requestLine = requestLines[0];
        const [method, path, httpVersion] = requestLine.split(' ');
        socket.write(path);
        socket.end();
    })
    
});

server.listen(4221, "localhost");
