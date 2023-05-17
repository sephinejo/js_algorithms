// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* My Solution */
  let result = '';

  while (str.length !== 0) {
    let lastWord = str[str.length - 1];
    str = str.slice(0, -1);
    result += lastWord;
  }

  return result;

  /* Instructor's Solution #1
  return str
    .split('')
    .reverse()
    .join('');
  */
  /* Instructor's Solution #2
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
  */
  /* Instructor's Solution #3
  debugger;
  return str.split('').reduce((reversed, character) => character + reversed, '');
  */
}
reverse('asdf');
