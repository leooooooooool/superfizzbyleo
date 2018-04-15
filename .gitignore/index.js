const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";


bot.on('ready', function() {
    bot.user.setActivity('Wesh')
    bot.user.setAvatar('ico.png')
    console.log("I'm Ready !");
});





bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");


    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.send("Pong!")
            break;
        case "askfizz":
            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("ta koi ?");
            break;
        case "music":
            break;
        case "clear":
            message.channel.send("\n\n\n\n\n\nChannel cleared!")
            break;
        case "askteemo":
            break;
        default:
            message.channel.send("commence pas a begueyer toi");
    }

});


bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "bienvenue-aurevoir").send(`Bienvenue ${member}`)
    console.log('User' + member.username + ' has joined server')
    var role = member.guild.roles.find('name', 'Mємвяє');
    member.addRole(role)
    
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.find("name", "bienvenue-aurevoir").send(`Aurevoir ${member}`)
});




bot.login(process.env.TOKEN)
