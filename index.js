const discord = require("discord.js");
const config = require("./config.json");

const PREFIX = "!";

const client = new discord.Client();
client.login(config.BOT_TOKEN);

client.on("message", message => {
  if (message.author.bot) {
    return;
  }
  if (!message.content.startsWith(PREFIX)) {
    return;
  }

  const commandBody = message.content.slice(PREFIX.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  console.log(command);
});
