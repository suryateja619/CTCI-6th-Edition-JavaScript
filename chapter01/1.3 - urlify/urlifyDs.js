const urilfy = (string, length) => {
  let modifedString = '';
  for (let i = 0; i < length; i += 1) {
    const stringChar = string.charAt(i);
    if (stringChar === ' ') {
      modifedString += '%20';
    } else {
      modifedString += stringChar;
    }
  }
  return modifedString;
};

// Test Cases
console.log(urilfy('A p p l e', 10)); // A%20p%20p%20l%20e
console.log(urilfy('Verizo n', 8)); // Verizo%20n
