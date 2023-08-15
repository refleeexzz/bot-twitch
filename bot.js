const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'RefletZZZZZ',
		password: 'oauth:9oyvneh1sipugq7yynbakq9d6swj4i'
	},
	channels: [ 'pazpeaceful' ]
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === '!comandos') {
		
		client.say(channel, `@${tags.username}, !ovelha, !elo, pprt e mainsamira, os dois ultimos comandos não precisa do !`);
	}
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === 'negueba') {
		
		client.say(channel, `@${tags.username}, concordo craque`);
	}
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === 'pprt') {
		
		client.say(channel, `@${tags.username}, oii vc ta solteiro`);
	}
});
client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === 'K') {
		
		client.say(channel, `@${tags.username}, isso mesmo ri mesmo safadinho piranho`);
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === '!elo') {
	
		client.say(channel, `@${tags.username}, Mln3rva, Challanger 800lp`);
	}
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	
	if(self) return;

	if(message.toLowerCase() === '!bosta') {
	
		client.say(channel, `@${tags.username}, almoço, café da tarde e janta é bosta, ja bateu uma punheta pra porta, já pegou gonorreia com um transexual carioca`);
    
	}
  
  
});