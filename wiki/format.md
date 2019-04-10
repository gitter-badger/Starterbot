# Command Format

**All commands must be JavaScript files or `fs` will ignore them**

**Take a look at `command.example` and copy paste it into a new `.js` file to get started on a new command**

**`example.js`**
```js
module.exports = {
    name: 'example',
    usage: 'example <param1> <param2>',
    desc: 'Put your own description here',
    run(bot, msg, args, conf, embed) {
        //code here
    }
};
```

**If done correctly your console will say `✔️ Successfully Loaded example.js`**