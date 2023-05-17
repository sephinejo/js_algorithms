// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  /**
   * My Solution
   */
  let reversed = str.split('').reduce((reversed, char) => char + reversed, '');
  if (str === reversed) return true;
  /**
   * Instructor's Solution #1
   *
  const reversed = str.split('').reverse().join('');

  return str === reversed;
  */
  /**
   * Instructor's Solution #2
   *
  return str.split('').every((char, index) => {
    return char === str[str.length - 1 - index];
  });
  */
}
