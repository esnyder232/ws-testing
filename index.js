const WebSocket = require('ws');
const express = require('express')
const path = require('path');
const app = express();


const port = 8080;


const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/ws-test.js', (req, res) => {res.sendFile(path.join(__dirname, "/ws-test.js"))});
app.use('/index.html', (req, res) => {res.sendFile(path.join(__dirname, "/index.html"))});
app.use('/', (req, res) => {res.sendFile(path.join(__dirname, "/index.html"))});

const wss = new WebSocket.Server({noServer: true});


wss.on('connection', function connection(ws) {
	console.log('connection now');
	
})

wss.on('message', function incoming(mesasage) {
	console.log('received: %s', message);
});


server.on('upgrade', (req, socket, head) => {
	console.log('upgrade now');
	return wss.handleUpgrade(req, socket, head, socket => {
		console.log('upgrade haneled');
		//wss.removeEventListener('connection', socket, req);
	})
})
