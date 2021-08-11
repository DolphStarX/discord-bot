module.exports = {
    name: 'twitter',
    description: "sends the twitter link!",
    execute(client, message, args, Discord){
        message.channel.send('https://twitter.com/DolphStarX');
    }
}