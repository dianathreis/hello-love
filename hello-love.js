"use strict";
// Searching for the word "I" can cause problems because there might be
// some errors and misrepresentations for words like 'I'm', which could be marked
// as a positive for 'I', which isn't correct since it isn't a standalone 'I'
const helloLoveLyrics = [
    'I don\'t know where you were, I don\'t know what became of us',
    'And I don\'t know what went wrong, time had turned its back on us',
    'It\'s not that I gave up, I just stopped trying',
    'I have my mind made up on no-more-crying',
    'I thought tonight would be just me, myself and I\'ing',
    'I guess I\'m not the one that\'s deciding',
    'Hello, love, all dressed up',
    'Whatchu doin\' round here? I didn\'t expect to see ya',
    'Hello, love, I got both hands up',
    'Yeah, you got me, you got me, you got me',
    'And it feels so good to see ya',
    'Hello, love',
    'Hello, love',
    'Hello, hello, love',
];
function hasWord(lyrics, word) {
    return lyrics.some(line => line.toLowerCase().includes(word.toLowerCase()));
}
function numWord(lyrics, word) {
    return lyrics.filter(line => line.toLowerCase().includes(word.toLowerCase())).length;
}
console.log(hasWord(helloLoveLyrics, 'hello'));
console.log(hasWord(helloLoveLyrics.slice(0, 4), 'hello'));
console.log(numWord(helloLoveLyrics, 'hello'));
console.log(numWord(helloLoveLyrics.slice(4, 6), 'hello'));
