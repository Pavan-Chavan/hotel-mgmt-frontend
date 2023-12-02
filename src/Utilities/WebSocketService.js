// WebSocketService.js

export const connectWebSocket = (onMessageCallback,stompClient) => {
	stompClient.connect({}, () => {
		console.log("connected");
		stompClient.subscribe('/topic/greetings', (message) => {
			onMessageCallback(JSON.parse(message.body));
		});
	});
};

export const sendMessage = (name,stompClient) => {
	stompClient.send('/app/hello', {}, JSON.stringify(name));
};
