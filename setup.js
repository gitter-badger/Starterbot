const inquirer = require('inquirer');
const editJson = require('edit-json-file');
const config = editJson(`${__dirname}/config.json`);

let choices = [
    {
        type: 'input',
        name: 'prefix',
        message: 'What prefix would you like to use for your bot?',
    },
    {
        type: 'input',
        name: 'ownerid',
        message: 'Please input your ID',
    },
    {
        message: 'input',
        name: 'token',
        message: 'Please input your bot\'s token'
    },
];

inquirer.prompt(choices).then(data => {
    config.set('prefix', data.prefix);
    config.set('ownerid', data.ownerid);
    config.set('token', data.token);
    config.save();
});