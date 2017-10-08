const isUniqueDs = (unique) => {
  const uniqueLen = unique.length;
  for (let i = 0; i < uniqueLen; i += 1) {
    for (let j = i + 1; j < uniqueLen; j += 1) {
      if (unique.charAt(i) === unique.charAt(j)) {
        return false;
      }
    }
  }
  return true;
};

// Test Cases
console.log(isUniqueDs('abcdefghi')); // True
console.log(isUniqueDs('repeated')); // False
