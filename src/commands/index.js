const ping = require('./ping');
const eightBall = require('./8ball');
const role = require('./role');
const whoami = require('./whoami');

const guildID = process.env.GUILD_ID;
// const channelID = process.env.CHANNEL_ID;

const commands = {
  'ping': {execute: ping, helptext: ''},
  'role': {execute: role, helptext: ''},
  '8ball': {execute: eightBall, helptext: ''},
  'whoami': {execute: whoami, helptext: ''}
};

module.exports = async (msg) => {
  if (msg.guild.id === guildID) {
    const args = msg.content.split(' ');
    if (args.length == 0 || args[0].charAt(0) !== '!') return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, { args, commands });
    }
  }
};