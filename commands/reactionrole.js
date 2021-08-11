module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(client, message, args, Discord) {

        const channel = '872742655367454770';
        const btcRole = message.guild.roles.cache.find(role => role.name === "BTC");
        const ethRole = message.guild.roles.cache.find(role => role.name === "ETH");
        const solRole = message.guild.roles.cache.find(role => role.name === "SOL");
        const dogeRole = message.guild.roles.cache.find(role => role.name === "DOGE");

        const btcEmoji = '<:bitcoin:806050243484319744>';
        const ethEmoji = '<:ethereum:817882744851923015>';
        const solEmoji = '<:solana:872744194605736006>';
        const dogeEmoji = '<:dogecoin:812449700250124289>';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose your favorite crypto!')
            .setDescription(`${btcEmoji} for Bitcoin\n`
                + `${ethEmoji} for Ethereum\n`
                + `${solEmoji} for Solana\n`
                + `${dogeEmoji} for Dogecoin`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(btcEmoji);
        messageEmbed.react(ethEmoji);
        messageEmbed.react(solEmoji);
        messageEmbed.react(dogeEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === btcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(btcRole);                }
            }   if (reaction.emoji.name === ethEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ethRole);
            }   if (reaction.emoji.name === solEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(solRole);
            }   if (reaction.emoji.name === dogeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dogeRole);
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === btcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(btcRole);                }
            }   if (reaction.emoji.name === ethEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ethRole);
            }   if (reaction.emoji.name === solEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(solRole);
            }   if (reaction.emoji.name === dogeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dogeRole);
            } else {
                return;
            }
        });
    }
}