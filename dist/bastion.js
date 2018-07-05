"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Eris = require("eris");
const fs = require("fs");
const auth = JSON.parse(fs.readFileSync("auth.json", "utf8"));
const opts = {
    /*disableEvents: { // This breaks the bot, figure it out later
        CHANNEL_CREATE: true,
        CHANNEL_DELETE: true,
        CHANNEL_UPDATE: true,
        GUILD_BAN_ADD: true,
        GUILD_BAN_REMOVE: true,
        GUILD_CREATE: true,
        GUILD_DELETE: true,
        GUILD_MEMBER_ADD: true,
        GUILD_MEMBER_REMOVE: true,
        GUILD_MEMBER_UPDATE: true,
        GUILD_ROLE_CREATE: true,
        GUILD_ROLE_DELETE: true,
        GUILD_ROLE_UPDATE: true,
        GUILD_UPDATE: true,
        MESSAGE_CREATE: false,
        MESSAGE_DELETE: false,
        MESSAGE_DELETE_BULK: false,
        MESSAGE_UPDATE: false,
        PRESENCE_UPDATE: true,
        TYPING_START: true,
        USER_UPDATE: true,
        VOICE_STATE_UPDATE: true
    },*/
    maxShards: "auto"
};
const bot = new Eris.Client(auth.token, opts);
bot.on("ready", () => {
    console.log("Logged in as %s - %s", bot.user.username, bot.user.id);
});
bot.on("messageCreate", msg => {
    console.log(msg.content);
    // When a message is created
    if (msg.content === "ping") {
        // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Pong!");
        // Send a message in the same channel with "Pong!"
    }
    else if (msg.content === "pong") {
        // Otherwise, if the message is "!pong"
        bot.createMessage(msg.channel.id, "Ping!");
        // Respond with "Ping!"
    }
});
bot.connect();
//# sourceMappingURL=bastion.js.map