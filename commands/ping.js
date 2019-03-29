module.exports = {
    name: 'ping',
    usage: 'ping',
    desc: 'Shows the bot\'s latency',
    run(bot, msg, args, conf, embed) {
        msg.channel.send(`🏓 ${Math.round(bot.ping)}ms`);
    }
};