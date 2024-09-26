// Searching for the word "I" can cause problems because there might be
// some errors and misinterpresentations for words like 'I'm', which could be marked
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
// checks if any string includes 'hello'
function hasWord(lyrics: string[], word: string): boolean {
  return lyrics.some(line => line.toLowerCase().includes(word.toLowerCase()));
}
// count number of strings in array
function numWord(lyrics:string[], word: string): number {
  return lyrics.filter(line => line.toLowerCase().includes(word.toLowerCase())).length;
}
// tests
console.log(hasWord(helloLoveLyrics, 'hello')); // print true
console.log(hasWord(helloLoveLyrics.slice(0, 4), 'hello')); // print false
console.log(numWord(helloLoveLyrics, 'hello')); // print 5
console.log(numWord(helloLoveLyrics.slice(4, 6), 'hello')); // print 0
