module.exports = {
    name: 'ungulag',
    description: "This unmutes a member",
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            let gulagRole = message.guild.roles.cache.find(role => role.name === 'Gulag');
            let paperHandsRole = message.guild.roles.cache.find(role => role.name === 'Paper Hands');
 
            let memberTarget= message.guild.members.cache.get(target.id);
            
            if (!args[1]) {
            memberTarget.roles.remove(gulagRole.id);
            memberTarget.roles.add(paperHandsRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Welcome back from gulag comrade!`);
            }
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}