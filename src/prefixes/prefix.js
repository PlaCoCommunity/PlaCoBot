import * as prefixes from './prefixes.js';

const prefix = (channel, tags, message) => {
    let words = message.split(" ");

    words.map(word => {
        const firstCharacter = word.slice(0, 1);

        if(firstCharacter === "@") {
            const prefix = word.replace("@", "");
            prefixes.prefixes.map(prefixName => {
                if(prefix === prefixName.name) {
                    message = prefixes[prefix](channel, tags, message);
                }
            })
        }
    });

    return message;
};

export default prefix;