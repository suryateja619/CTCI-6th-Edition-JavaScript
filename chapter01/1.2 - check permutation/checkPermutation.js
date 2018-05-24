const checkPermutation = (originalString, givenString) => {
  const originalStringLen = originalString.length;
  const givenStringLen = givenString.length;
  if (originalStringLen === 0 || originalStringLen !== givenStringLen) {
    return false;
  }
  const characters = {};
  for (let i = 0; i < originalString.length; i += 1) {
    const stringPos = originalString.charAt(i);
    characters[stringPos] = characters[stringPos] + 1 || 1;
  }
  for (let j = 0; j < givenString.length; j += 1) {
    const stringPos = givenString.charAt(j);
    characters[stringPos] -= 1;
    if (Number.isNaN(characters[stringPos]) || characters[stringPos] < 0) {
      return false;
    }
  }
  return true;
};

// Test Cases
console.log(checkPermutation('', 'abc')); // False
console.log(checkPermutation('apple', 'apple')); // True
console.log(checkPermutation('at&t', 't-mobile')); // False
console.log(checkPermutation('verrri-$&()!@zzoooon', 'verrri-$&()!@zzoooon')); // True
