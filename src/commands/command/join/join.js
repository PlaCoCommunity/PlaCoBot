import prefix from '../../../prefixes/prefix.js';

const join = (client, information, channel, tags, message, twitchCommand) => {
    const channelName = message.split(" ").slice(1, 2).toString();

    if(channelName !== tags.username && tags.username !== 'placobot') {
        return {
            ...information,
            message: [
                `@username you can't connect the bot to #${channelName} chat.`
            ]
        };
    }

    client.say(channel, `connecting to #${channelName} chat...`);

    client.join(channelName)
        .then((data) => {
            client.say(channel, `Connect succesfully`);
            client.say(channel, prefix(channel, tags, `@username have fun with your livestream!`));
            client.say(channel, `‏‏‎⠀`);
            client.say(channelName, `‏‏‎⠀`);
            // client.say(channelName, `Ping!`);
            // client.ping()
            //     .then((data) => {
            //         client.say(channelName, `Pong! Latency: ${data}sec`);
            //     }).catch((err) => {
            //         client.say(channelName, `Ping error: ${err}`);
            //     });
        }).catch((err) => {
            client.say(channel, prefix(channel, tags, `@username something went wrong. Error message: ${err}`));
        });

        return {
            ...information,
            message: [
                ""
            ]
        };
}

export default join