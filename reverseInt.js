function reverseInt(n) {
  /**
   * My solution
   */
  if (n < 0) {
    return (
      parseInt(
        n
          .toString()
          .split('')
          .reduce((accum, char) => char + accum, '')
      ) * -1
    );
  }
  return parseInt(
    n
      .toString()
      .split('')
      .reduce((accum, char) => char + accum, '')
  );

  /**
   * Instructor's Solution
   */
  // const reversed = n.toString().split('').reverse().join('');

  // return parseInt(reversed) * Math.sign(n);
}
