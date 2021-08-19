const controller = {};
const replies = ["hello beep boop", "Im a discrod bot", "Vegeta"];

controller.entryMessage = (msg) => {
  if (msg.content === "hello beep") {
    msg.reply(replies[0]);
  } else if (msg.content === "beep what are you?") {
    msg.reply(replies[1]);
  } else if (msg.content === "goku or vegeta?") {
    msg.reply(replies[2]);
  }
};

module.exports = controller;
