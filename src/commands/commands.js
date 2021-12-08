import joinInformation from './command/join/information.js';
import joinCommand from './command/join/join.js';

import highfiveInformation from './command/highfive/information.js';
import highfiveCommand from './command/highfive/highfive.js';

export const commands = [
    { name: "join" },
    { name: "highfive" },
]

export const join = () => (
    joinInformation()
)

export const joinCommandExecute = (client, information, channel, tags, message, twitchCommand) => (
    joinCommand(client, information, channel, tags, message, twitchCommand)
)

export const highfive = () => (
    highfiveInformation()
)

export const highfiveCommandExecute = (client, information, channel, tags, message, twitchCommand) => (
    highfiveCommand(client, information, channel, tags, message, twitchCommand)
)

// export const lowfive = (client, channel, tags, message, twitchCommand) => ({
//     commandName: "lowfive",
//     message: [
//         "new ability to @username", "Lowfive to @username"
//     ],
//     granted: {
//         broadcaster: false,
//         moderator: false,
//         subscriber: false,
//     },
//     channel: "all",
//     online: true
// })

// const commands = [
//     {
//         id: 16,
//         CommandName: "highfive",
//         Message: [
//             "Highfive to @username from @just_sho"
//         ],
//         Granted: {
//             broadcaster: false,
//             moderator: false,
//             subscriber: false,
//         },
//         Online: true
//     },
//     {
//         id: 18,
//         CommandName: "so",
//         Message: [
//             "Shoutout to @username"
//         ],
//         Granted: {
//             broadcaster: true,
//             moderator: true,
//             subscriber: false,
//         },
//         Online: true
//     },
//     {
//         id: 17,
//         CommandName: "lowfive",
//         Message: [
//             "new ability to @username", "Lowfive to @username"
//         ],
//         Granted: {
//             broadcaster: false,
//             moderator: false,
//             subscriber: false,
//         },
//         Online: true
//     },
//     {
//         id: 17,
//         CommandName: "ping",
//         Message: [
//             "pong!"
//         ],
//         Granted: {
//             broadcaster: false,
//             moderator: false,
//             subscriber: false,
//         },
//         Online: true
//     },
// ];