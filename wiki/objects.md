# Execution Objects

```js
run(bot, msg, args, conf, embed) {   });
```

## bot

**https://discord.js.org/#/docs/main/stable/class/Client**

**The `bot` object refers to the Client constructor**

**Though others use `client`, we use `bot` to keep it simple.** 

**All the extended methods and properties are still the same in the [Discord.js Docs](https://discord.js.org/#/docs/main/stable/general/welcome)**

```js
//Properties
console.log(bot.user.tag) // 'Testerbot#1542'
console.log(bot.uptime) // 1239123
console.log(bot.ping) // 34
console.log(bot.guilds.size) // 3

//Methods
bot.login('token goes here') // Logs in

//Events
bot.on('guildMemberAdd', member => {
    member.send(`Welcome to the server!`); //Emitted when a user joins the server
});
```

## msg

**https://discord.js.org/#/docs/main/stable/class/Message**

**The `msg` object refers to parameter we passed in the `message` event in `bot.js`**

```js
//Properties
console.log(msg.content) // 'Message content appears here'
console.log(msg.author.username) // 'andrejarrell'
console.log(msg.author.id) // '123456789012345678'

//Methods
msg.channel.send('Hello there!')
msg.delete() // Deletes message
msg.react('😃') // Reacts with emoji
```

## args

**Arguments is a popular way to take parameters in a message and to do what we please with them**

**`$commandname these are my arguments` turns into `["these","are","my","arguments"]`**

```js
console.log(args.join(' ')) // 'these are my arguments'

//Since array's index starts at zero
console.log(args[0]) // 'these'
console.log(args[1]) // 'are'
console.log(args[2]) // 'my'
console.log(args[3]) // 'arguments'

//To check if the user supplied arguments
if (!args) return console.log('User supplied no arguments')

//To get specific arguments
if (args[0] !== somevariable) return console.log('User supplied invalid arguments')

//Some commands like: 
//$ban @user reason 
//require you to use this to get the full reason
let reason = args.slice(1).join(' ')
console.log(reason) // Returns the rest of the args
```

## conf

**`conf` refers to the `config.json` file in the root directory**

```json
{
  "prefix": "$",
  "ownerid": "123456789012345678",
  "token": "NTYxMDM3MDM1Mzc3MjYyNTkz.D385Ig.FfFodONLqmHVZKIGh7SokUq26oM"
}
```

```js
console.log(conf.prefix) // '$'
console.log(conf.ownerid) // '123456789012345678'
console.log(conf.prefix) // 'NTYxMDM3MDM1Mzc3MjYyNTkz.D385Ig.FfFodONLqmHVZKIGh7SokUq26oM'
```

## embed
**https://discord.js.org/#/docs/main/stable/class/RichEmbed**

**`embed` refers to the RichEmbed contructor**

```js
embed
.setColor('#0080FF')
.setTitle('Embed')
.setDescription('This is a simple embed')
msg.channel.send(embed)
```