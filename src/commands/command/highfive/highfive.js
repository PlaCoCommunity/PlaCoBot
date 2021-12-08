const highfive = (client, information, channel, tags, message, twitchCommand) => {
    return {
        ...information,
        message: [
            "Highfive to @username",
            "Whooho!!"
        ],
    }
}

export default highfive