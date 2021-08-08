require("dotenv").config();

const { Client, WebhookClient } = require('discord.js');
const PREFIX = process.env.PREFIX;
const client = new Client({
  partials: ['MESSAGE', 'REACTION']
});

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName)
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const checkPermissionsRole = (role) => role.permissions.has('ADMINISTRATOR') || role.permissions.has('KICK_MEMBERS') || 
role.permissions.has('BAN_MEMBERS') || role.permissions.has('MANAGE_GUILD') || role.permissions.has('MANAGE_CHANNELS');

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.content === 'imagine') {
        message.channel.send('imagine being Cptn.Canuck :rofl:');
    }
    if (message.content === 'good bot') {
        message.channel.send('good human :heart:');
    }
    else if (isValidCommand(message, "rolldice")) {
      message.reply("rolled a " + rollDice());
    }
    else if(isValidCommand(message, "gulag")) {

    }
  });

client.login(process.env.DISCORDJS_BOT_TOKEN);