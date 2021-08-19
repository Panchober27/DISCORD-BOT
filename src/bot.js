require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});


const messageController = require("./controller/messages");

const live = () => {
  console.log("💖");
};
client.on("ready", live);

const gotMessage = (msg) => {
  if (msg.content === "bot estas?") {
    console.log(msg.content);
    msg.reply("hola beep boop");
  }
};
client.on("message", messageController.entryMessage);

client.login(process.env.CLIENT_TOKEN);
