console.log('ws-test get');

var ws = new WebSocket("ws://localhost:8080");
console.log(ws);


ws.onerror = function(e) { 
	console.log('Websocket Error: ');
	console.log(e);
}

ws.onmessage = function(e) { 
	console.log('onmessage: ');
	console.log(e);
}

ws.onopen = function(e) { 
	console.log('onopen: ');
	console.log(e);
}

ws.onclose = function(e) { 
	console.log('onclose: ');
	console.log(e);
}


window.setTimeout(() => {
	console.log('1s');
	ws.send('1s now');
}, 1000);

window.setTimeout(() => {
	console.log('2s');
	ws.close();
}, 2000);

window.setTimeout(() => {
	console.log('3s');
	ws.send('3s now');
}, 3000);




