const Discord = require('discord.js');
const conf = require('./config.json');
const fs = require('fs');
const bot = new Discord.Client();
const embed = new Discord.RichEmbed();
bot.commands = new Discord.Collection();

const files = fs.readdirSync('./commands')
.filter(file => file.endsWith('.js'));

for (const file of files) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
    console.log(`✔️ Successfully Loaded ${file}`);
};

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(conf.prefix)) return;
    const args = msg.content.slice(conf.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName);
    if (!command) return;
    try {
        if (command.owneronly && msg.author.id !== conf.ownerid) return;
        command.run(bot, msg, args, conf, embed);
    } catch(err) {
        console.log(err);
    };
});

bot.login(conf.token);