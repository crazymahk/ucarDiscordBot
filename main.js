const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const badWords = ['hanifi', 'kaç', 'kes'];
function getQuote() {
	return fetch('https://zenquotes.io/api/random')
		.then(res => {
			return res.json();
		})
		.then(data => {
			return data[0]['q'] + '-' + data[0]['a'];
		});
}

client.on('ready', () => {
	console.log('Bot aktif agam');
});

client.on('message', msg => {
	if (msg.content == '$ping') {
		msg.reply('pong');
	}

	if (msg.author.bot) return;

	if (msg.content == '$inspire') {
		getQuote.then(quote => msg.channel.send(quote));
	}

	if (badWords.some(word => msg.content.includes(word))) {
		msg.reply('Deneme Başarılı');
	}
});

client.login('ODUzNTk4NzQyOTU1Njg3OTc2.YMXtxw.Hat3p3iq4hCSPIy74LXV1O00X2M');
