module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord, profileData){
        message.channel.send('pong!');
    }
}