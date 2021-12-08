import tmi from 'tmi.js';
import dotenv from 'dotenv';
dotenv.config();

import command from './commands/command.js';

const env = process.env;

const client = new tmi.client({
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
        username: "PlaCoBot",
        password: `oauth:${env.BOT_TOKEN}`
    },
    channels: ['placobot']
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

    command(client, channel, tags, message, twitchCommand);
});