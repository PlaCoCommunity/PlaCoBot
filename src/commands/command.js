import * as commands from './commands.js';
import granted from '../granted.js';
import prefix from '../prefixes/prefix.js';

const command = (client, channel, tags, message, twitchCommand) => {
    let c = '';

    commands.commands.map(command => {
        if(twitchCommand !== command.name) {
            return;
        }

        c = commands[twitchCommand]();

        c.channel = `#${c.channel}`;

        if (channel !== c.channel && c.channel !== "#all") {
            return;
        }

        if(c.online !== true){
            return;
        }

        if(!granted(channel, tags, message, c)) {
            return;
        }

        c = commands[`${twitchCommand}CommandExecute`](client, c, channel, tags, message, twitchCommand);

        c.message.forEach(message => {
            message = prefix(channel, tags, message);

            client.say(channel, `${message}`);
        })
    });
}

export default command;