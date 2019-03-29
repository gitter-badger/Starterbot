module.exports = {
    name: 'stats',
    usage: 'stats',
    desc: 'Shows the bot\'s stats',
    run(bot, msg, args, conf, embed) {
        embed
        .setColor('#0080FF')
        .setTitle(`STATS`)
        .setDescription(`
        📗 **Library:** Discord.js v${require('discord.js').version}\n🖥 **OS:** ${require('platform').os}\n🛠 **Node.js:** ${process.version}\n💾 **Memory:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n⏰ **Uptime:** ${require('ms-to-time')(bot.uptime)}`)
        .setFooter(`${require('../package.json').name} v${require('../package.json').version}`);
        msg.channel.send(embed);
    }
};