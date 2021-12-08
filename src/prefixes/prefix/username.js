const username = (channel, tags, message) => {
    let newMessage = message.replace("@username" , `@${tags.username}`);
    return newMessage;
}

export default username;