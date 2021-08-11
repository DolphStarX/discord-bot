const ms = require('ms');
module.exports = {
    name: 'gulag',
    description: "This mutes a member",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first()
        if (target) {
 
            let paperHandsRole = message.guild.roles.cache.find(role => role.name === 'Paper Hands');
            let gulagRole = message.guild.roles.cache.find(role => role.name === 'Gulag');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(paperHandsRole.id);
                memberTarget.roles.add(gulagRole.id);
                message.channel.send({
  files: [{
    attachment: 'D:/CodeProjects/discord-bot/files/Gulag.PNG',
    name: 'Gulag.PNG'
  }]
});
                message.channel.send(`<@${memberTarget.user.id}> has been sent to the gulag!`);
                return
            }
            memberTarget.roles.remove(paperHandsRole.id);
            memberTarget.roles.add(gulagRole.id);
            message.channel.send({
  files: [{
    attachment: 'D:/CodeProjects/discord-bot/files/Gulag.PNG',
    name: 'Gulag.PNG'
  }]
});
            message.channel.send(`<@${memberTarget.user.id}> has been sent to the gulag for ${ms(ms(args[1]))}!`);
 
            setTimeout(function () {
                memberTarget.roles.remove(gulagRole.id);
                memberTarget.roles.add(paperHandsRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}