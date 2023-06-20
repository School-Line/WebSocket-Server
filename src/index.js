const WebSocket = require("ws")

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', (ws) => {
  ws.on('message', () => {
    console.log("更新を受け取りました");

    // 全ての接続先に送信
    wss.clients.forEach((client) => {
      client.send('Updated');
    })
  });

  ws.send('Updated');
  console.log('更新されたことを送信しました')
});

console.log('ws://localhost:8082')