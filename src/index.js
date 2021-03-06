const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

bot.on('ready', async() => {
    console.log('Ares is Boot Up!');

    try {
        let link = await bot.generateInvite(['ADMINISTRATOR']);
        console.log(link);
    } catch (error) {
        console.log(error.stack);
    }

});

bot.on('message', async message => {
    //ignore message from bot
    if (message.author.bot) {
        return;
    }

    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (command.startsWith(prefix)) {
        let randomColor = '#000000'.replace(/0/g, function() { return (~~(Math.random() * 16)).toString(16); });
        //commands that start with 
        //!<command> <arg>

        //!ข้อมูลของฉัน
        if (command === `${prefix}ข้อมูลของฉัน`) {
            let embed = new Discord.RichEmbed()
                .setTitle('||ข้อมูลบัญชี||')
                .setImage(message.author.avatarURL)
                .setColor(randomColor)
                .addField('ชื่อบัญชี', `${message.author.username}#${message.author.discriminator}`)
                .addField('สร้างเมื่อ', message.author.createdAt);
            message.channel.sendEmbed(embed);
            return;
        }

        //!ล้างแชท <number>
        if (command === `${prefix}ล้างแชท`) {
            let messagecount = 100;
            if (args.length > 0) {
                if (isNaN(args[0]) ? !1 : (x = parseFloat(args[0]), ((0 | x) === x) && (x > 1))) {
                    messagecount = parseInt(args[0]);
                }
            }
            message.channel.fetchMessages({ limit: messagecount }).then(messages => message.channel.bulkDelete(messages));
            return;
        }

    } else {
        //nomal commands 
        //<text>

        if (isNaN(message.content) ? !1 : (x = parseFloat(message.content), (0 | x) === x)) {
            let nextNum = parseInt(message.content) + 1;
            message.reply(`..และก็..${nextNum}...`);
            return;
        }

        if (message.content === 'ping') {
            message.reply('pong');
            return;
        }

        if (message.content === 'ไง') {
            message.reply('โย้วววววว');
            return;
        }

        if (message.content === 'นอนๆ') {
            message.reply('ฝันดี');
            return;
        }

    }

});

bot.login(process.env.TOKEN);