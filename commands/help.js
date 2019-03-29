module.exports = {
    name: 'help',
    usage: 'help <command name>',
    desc: 'Shows a list of commands',
    run(bot, msg, args, conf, embed) {
        const commands = bot.commands;
        if (!args.length) {
            embed
            .setColor('#0080FF')
            .setTitle(`Commands:`)
            .setDescription(commands.map(command => command.name).join(', '))
            .setFooter(`${conf.prefix}help <command name>`)
            msg.channel.send(embed);
        } else {
            const name = args[0];
		    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		    if (!command) {
			    return msg.channel.send('That\'s not a valid command!');
            };
            embed
            .setColor('#0080FF')
            .setTitle(`Command: ${name}`)
            .setDescription(`**Description:** ${command.desc}\n**Usage:** ${conf.prefix}${command.usage}`)
            msg.channel.send(embed);
        }
    }
}