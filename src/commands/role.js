module.exports = async (msg, args) => {
  if (args.length < 2) return;
  console.log(args);
  if (args[0] == 'add') {
    await msg.member.addRole('690032740615061565');
    await msg.channel.send(`${msg.author} The role ima has been added.`);
  } else if (args[0] === 'remove') {
    await msg.member.removeRole('690032740615061565');
    await msg.channel.send(`${msg.author} The role ima has been removed.`);
  }
};