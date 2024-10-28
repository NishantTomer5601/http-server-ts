import * as WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

let clients: WebSocket[] = [];

wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');
    clients.push(ws);

    ws.on('message', (message: string) => {
        console.log('Received:', message);

        clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(`Client says: ${message}`);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clients = clients.filter(client => client !== ws);
    });

    ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server is listening on ws://localhost:8080');