# 4 Steps

## Step 1 - Setup Workplace

**It is important that you have both [Git](https://git-scm.com/downloads) and [Nodejs](https://nodejs.org/en/download/) installed!**

**Also I highly recommend using [Visual Studio Code](https://code.visualstudio.com/) as your editor. (It comes git control features and powershell terminal)**

## Step 2 - Clone Repository

**Running this command will create a folder where you are currently.**

**`git clone -b master https://github.com/andrejarrell/Starterbot.git`**

## Step 3 - Setup Bot

**Enter the bot's folder: `cd Starterbot`**

**Install dependencies: `npm install`**

**Run setup script: `node setup.js`**

**You can create a bot application [here](https://discordapp.com/developers/applications/)**

**Your `config.json` file should be updated**

```json
{
  "prefix": "$",
  "ownerid": "123456789012345678",
  "token": "NTYxMDM3MDM1Mzc3MjYyNTkz.D385Ig.FfFodONLqmHVZKIGh7SokUq26oM"
}
```

**You can run `node bot.js` to start your bot**

## Step 4 - Start Coding

**Create a new js file in the `commands` folder**

```js
module.exports = {
    name: 'example',
    usage: 'commandname <param1> <param2>',
    desc: 'Put your own description here',
    run(bot, msg, args, conf, embed) {
        //code here
    }
};
```
