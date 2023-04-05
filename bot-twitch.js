
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'your-nickname',
		password: 'oauth:tokenpassworld'
	},
	channels: [ 'CaioDancarino' ]
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!comandos') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, !ovelha, !elo, pprt e mainsamira, os dois ultimos comandos não precisa do !`);
	}
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === 'mainsamira') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, samira é um putinho`);
	}
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === 'pprt') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, oii vc ta solteiro`);
	}
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === 'k') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, isso mesmo ri mesmo safadinho piranho`);
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!elo') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, Sosa Ama lala Grandmaster 830lp`);
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === '!ovelha') {
	
		client.say(channel, `@${tags.username}, almoço, café da tarde e janta é bosta, ja bateu uma punheta pra porta, já pegou gonorreia com um transexual carioca`);
    
	}
  
  
});
