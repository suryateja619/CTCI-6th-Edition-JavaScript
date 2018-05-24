const urlify = string => string.replace(/ /g, '%20');

// Test Cases
console.log(urlify('A p p l e')); // A%20p%20p%20l%20e
console.log(urlify('Verizo n')); // Verizo%20n
