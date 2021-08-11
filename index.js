const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

/* const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('GibBot is online!');
});

/* client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Paper Hands');

    guildMember.roles.add(welcomeRole); */
/* }); */

/* client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'command'){
        client.commands.get('command').execute(message, args, Discord);
    }

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'twitter') {
        client.commands.get('twitter').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === ('kick')) {
        client.commands.get('kick').execute(message, args);
    } else if (command === ('gulag')) {
        client.commands.get('gulag').execute(message, args);
    } else if (command === ('ungulag')) {
        client.commands.get('ungulag').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});  */




client.login(process.env.DISCORD_TOKEN);