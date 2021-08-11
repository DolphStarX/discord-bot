module.exports = {
    name: 'twitter',
    description: "sends the twitter link!",
    execute(message, args, cmd, client, Discord, profileData){
        message.channel.send('https://twitter.com/DolphStarX');
    }
}