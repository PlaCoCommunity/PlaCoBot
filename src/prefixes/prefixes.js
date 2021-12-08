import Pusername from './prefix/username.js';

export const prefixes = [
    { name: "username" },
]

export const username = (channel, tags, message) => (
    Pusername(channel, tags, message)
)