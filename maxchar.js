/** My solution **/
function maxChar(str) {
  let counter = {};
  for (let char of str) {
    if (!counter[char]) counter[char] = 1;
    counter[char]++;
  }

  let max = 0;
  let result;
  for (let char in counter) {
    if (counter[char] > max) {
      max = counter[char];
      result = char;
    } else max = max;
  }
  return result;
}

/** Instructor's solution **/
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
  }
}

maxChar('abccccccd');
maxChar('apple 12311111');
