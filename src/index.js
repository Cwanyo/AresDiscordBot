const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ares is Boot Up!');
});

client.on('message', message => {
    //ignore message from bot
    if (message.author.bot) {
        return;
    }

    if (isNaN(message.content) ? !1 : (x = parseFloat(value), (0 | x) === x)) {

        message.reply(parseInt(message.content) + 1);
    }

    if (message.content === 'ping') {
        message.reply('pong');
    }

    if (message.content === 'ไง') {
        message.reply('โย้วววววว');
    }

    if (message.content === 'นอนๆ') {
        message.reply('ฝันดี');
    }
});

client.login(process.env.TOKEN);