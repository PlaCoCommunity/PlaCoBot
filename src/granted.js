const granted = (channel, tags, message, command) => {
    let granted = true
    const channelName = channel.replace("#", "");

    if(command.granted.subscriber) {
        tags.subscriber !== true ? granted = false : null;
    }

    if(command.granted.moderator) {
        tags.mod !== true ? granted = false : granted = true; 

        if(command.granted.subscriber) {
            tags.subscriber === true ? granted = true : null;
        }
    }

    if(command.granted.broadcaster) {
        tags.username !== channelName ? granted = false : granted = true;

        if(command.granted.subscriber) {
            tags.subscriber === true ? granted = true : null;
        }

        if(command.granted.moderator) {
            tags.mod === true ? granted = true : null;
        }
    }

    return granted;
}

export default granted;