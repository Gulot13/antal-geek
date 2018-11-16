const Discord = require('discord.js');
const scred = require('./token.json');
const channelAnnonce = "511995337058287626"
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.channel.id == channelAnnonce){
		var idAllChannel = msg.guild.channels.map(c => c.id);
		for (var i = idAllChannel.length - 1; i >= 0; i--) {
			if (msg.guild.channels.get(idAllChannel[i]).type == 'text') {
				if (idAllChannel[i] != channelAnnonce) {
					msg.guild.channels.get(idAllChannel[i]).send("Une annonce a était posté dans <#"+channelAnnonce+"> . Merci d'aller check ça");
					console.log("message envoyer dans le channel: "+idAllChannel[i]);
				}
			}
		}
	}
});

client.login(scred.tokenDiscord);