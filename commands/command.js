module.exports = {
    name: 'command',
    description: "Embeds!",
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES", "CONNECT"],
    execute(message, args, cmd, client, Discord, profileData) {
        const  newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules:')
        .setURL('https://twitter.com/DolphStarX')
        .addFields(
            {name: '1', value: 'Be respectful, don`t be a kid.'},
            {name: '2', value: 'Don`t be a jackass (friendly banter is fine) and do not act like a jackass to another member simply because their opinion is different from yours.'},
            {name: '3', value: 'No obscene/gore pictures are allowed to be posted in any channel.'},
            {name: '4', value: 'No racism will be tolerated. '}
        )
        .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de96a427-aecc-41f3-8e1b-3a425360d246/ddrljg4-f3ca48c2-c984-49e8-9534-225de085df40.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlOTZhNDI3LWFlY2MtNDFmMy04ZTFiLTNhNDI1MzYwZDI0NlwvZGRybGpnNC1mM2NhNDhjMi1jOTg0LTQ5ZTgtOTUzNC0yMjVkZTA4NWRmNDAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.56B3GQgTspI-5ypzFJZis3_e6AJTOqX-u5SSOWy5Db8')
        .setFooter('Don`t hesitate to DM one of the admins/mods if you have any ideas that would help the community.');

        message.channel.send(newEmbed);
    }
}