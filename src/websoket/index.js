// نیازمندی‌ها
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }
});


const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {
  console.log('A user connected to WebSocket.');
  ws.on('message', (message) => {
    console.log('Received message:', message);
    ws.send(`You said: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed.');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
