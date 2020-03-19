const ping = require('./ping');
const eightBall = require('./8ball');
const role = require('./role');
const whoami = require('./whoami');
const help = require('./help');

// const guildID = process.env.GUILD_ID;
// const channelID = process.env.CHANNEL_ID;

const commands = {
  'ping': {execute: ping, helptext: 'Ping the bot, it responds with Pong when online.\nUsage: !ping'},
  'role': {execute: role, helptext: 'Add a role to yourself. \nUsage: !role [add/remove] [role name]'},
  '8ball': {execute: eightBall, helptext: 'Get a random 8ball response from the bot. \nUsage: !8ball (message to respond to)'},
  'whoami': {execute: whoami, helptext: 'Display some information about yourself or other users. \nUsage: !whoami (name or nickname)'},
  'help': {execute: help, helptext: '!help'}
};

module.exports = async (msg) => {
  const args = msg.content.split(' ');
  if (args.length == 0 || args[0].charAt(0) !== '!') return;
  const command = args.shift().substr(1);
  if (Object.keys(commands).includes(command)) {
    commands[command].execute(msg, { args, functions: commands });
  }
};
