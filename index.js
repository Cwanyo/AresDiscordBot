const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
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