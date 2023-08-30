const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
    console.log('A new client connected');

    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

const port = 8080; 
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
