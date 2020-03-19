module.exports = async (msg, args) => {
  if (args.length < 2) {
    await msg.channel.send(`Sorry ${msg.author}, I require a command and a role name.`);
    return;
  };
  if (args[0] === 'add' && args[1] === 'ima') {
    await msg.member.addRole('690032740615061565');
    await msg.channel.send(`${msg.author} The role ima has been added.`);
  } else if (args[0] === 'remove' && args[1] === 'ima') {
    await msg.member.removeRole('690032740615061565');
    await msg.channel.send(`${msg.author} The role ima has been removed.`);
  } else {
    await msg.channel.send(`Sorry ${msg.author}, I don't know that command or role. Also I need some better error messages.`);
  }
};