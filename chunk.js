/** My solution **/

function chunk(array, size) {
  let result = [];
  let chunked;
  while (array.length > 0) {
    chunked = array.splice(0, size);
    result.push(chunked);
  }
  return result;
}

/** Instructor's solution 1 **/
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

/** Instructor's solution 2 **/
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
