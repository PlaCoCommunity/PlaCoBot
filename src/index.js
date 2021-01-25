const tmi = require("tmi.js");
require('dotenv').config();

const env = process.env;

const commands = [
    {
        id: 16,
        CommandName: "highfive",
        Message: [
            "Highfive to @username"
        ],
        Granted: {
            broadcaster: true,
            moderator: false,
            subscriber: false,
        },
        Online: false
    },
    {
        id: 16,
        CommandName: "so",
        Message: [
            "Shoutout to @username"
        ],
        Granted: {
            broadcaster: true,
            moderator: true,
            subscriber: false,
        },
        Online: true
    },
    {
        id: 17,
        CommandName: "lowfive",
        Message: [
            "new ability to @username", "Lowfive to @username"
        ],
        Granted: {
            broadcaster: false,
            moderator: false,
            subscriber: false,
        },
        Online: true
    },
];

const client = new tmi.client({
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
        username: "PlaCoBot",
        password: `oauth:${env.BOT_TOKEN}`
    },
    channels: ['placolive']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) {
        return;
    }

    const twitchMessage = message;
    let twitchCommand = twitchMessage.split(" ").slice(0, 1).toString();
    const beginCharacter = twitchCommand.slice(0, 1);
    let granted = true;

    if (beginCharacter !== "<") {
        return;
    }

    twitchCommand = twitchCommand.replace('<', '');
    twitchCommand = twitchCommand.replace('>', '');

    console.log(twitchCommand);

    commands.map((el, i) => {
        if(twitchCommand === el.CommandName){
            if(el.Online === true){
                if(((el.Granted.moderator && tags.mod !== true) && tags.username !== "placolive") || (el.Granted.subscriber && tags.subscriber !== true) || (el.Granted.broadcaster && tags.username !== 'placolive')){
                    granted = false;
                }

                console.log(((el.Granted.moderator && tags.mod !== true) && tags.username !== "placolive"));
                console.log((el.Granted.subscriber && tags.subscriber !== true));
                console.log((el.Granted.broadcaster && tags.username !== 'placolive'));
                console.log(tags.username === "placolive");

                if(granted){
                    el.Message.forEach(el => {
                        client.say(channel, `${el}`);
                    });
                }
            }
        }
    })
});