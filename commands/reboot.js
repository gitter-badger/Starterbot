module.exports = {
    name: 'reboot',
    usage: 'reboot',
    desc: 'Reboots the bot',
    owneronly: true,
    run(bot, msg, args, conf, embed) {
        msg.channel.send(`Rebooting...`);
        setTimeout(() => {
            process.exit();
        }, 1000);
    }
};