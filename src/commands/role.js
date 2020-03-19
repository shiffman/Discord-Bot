const fs = require('fs');
const path = require('path')

const jsonPath = path.join(__dirname, '..', 'commands', 'roles.json');
const data = fs.readFileSync(jsonPath, 'utf8');
const roles = JSON.parse(data)
console.log(roles)

module.exports = async (msg, {args}) => {
  if (args.length < 2) {
    await msg.channel.send(`Sorry ${msg.author}, I require a command and a role name.`);
    return;
  }

  const action = args.shift()
  const role = args.join(' ').toLowerCase()

  if (action === 'add' && role in roles) {
    await msg.member.addRole(roles[role]);
    await msg.channel.send(`${msg.author} The role ${role} has been added.`);
  } else if (action === 'remove' && role in roles) {
    await msg.member.removeRole(roles[role]);
    await msg.channel.send(`${msg.author} The role ${role} has been removed.`);
  } else {
    await msg.channel.send(`Sorry ${msg.author}, I don't know that command or role. Also I need some better error messages.`);
  }
};