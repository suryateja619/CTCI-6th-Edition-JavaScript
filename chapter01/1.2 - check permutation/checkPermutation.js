const checkPermutation = (originalString, givenString) => {
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
console.log(checkPermutation('apple', 'apple'));
console.log(checkPermutation('at&t', 't-mobile'));
console.log(checkPermutation('verrri-$&()!@zzoooon', 'verrri-$&()!@zzoooon'));
