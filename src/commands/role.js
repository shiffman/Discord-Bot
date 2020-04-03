const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'commands', 'roles.json');
const data = fs.readFileSync(jsonPath, 'utf8');
const roles = JSON.parse(data);
console.log(roles);

module.exports = async (msg, {
  args
}) => {

  const action = args.shift();
  const role = args.join(' ').toLowerCase();

  console.log(action, role);

  if (action === 'add' && role in roles) {
    await msg.member.roles.add(roles[role]);
    await msg.channel.send(`${msg.author} The role ${role} has been added.`);
  } else if (action === 'remove' && role in roles) {
    await msg.member.roles.remove(roles[role]);
    await msg.channel.send(`${msg.author} The role ${role} has been removed.`);
  } else if (action === 'list') {
    let roleList = Object.keys(roles).join('\n');
    await msg.channel.send(`Available roles:\n\`\`\`${roleList}\`\`\``);
  } else if (action === 'has' && role in roles) {
    // TODO: not yet working
    // const hasRole = msg.author._roles.includes(role);
    // await msg.channel.send(`${msg.author} you ${hasRole ? 'do' : 'do not'} have the role ${role}`);
  } else {
    await msg.channel.send(`Sorry ${msg.author}, I don't know that command or role. Also I need some better error messages.`);
  }
};