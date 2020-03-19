const { stripIndents } = require('common-tags');

module.exports = async (msg, { args, functions }) => {
  if (args.length === 0) {
    let commands = stripIndents`The Available commands are:
        ${'`' + Object.keys(functions).join('`, `') + '`'}
        
        tip: type ${'`!help <command>`'} for help that command`;
    msg.channel.send(commands);
  } else {
    const helptext = functions[args[0]];
    if (helptext) {
      msg.channel.send(helptext.helptext);
    }
    else {
      msg.channel.send('command not found');
    }
  }
};