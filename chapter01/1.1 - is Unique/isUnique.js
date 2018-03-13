const isUnique = (unique) => {
  const count = {};
  for (let i = 0; i < unique.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(count, unique[i])) {
      return false;
    }
    count[unique[i]] = 'true';
  }
  return true;
};

// Test Cases
console.log(isUnique('abcdefghi')); // True
console.log(isUnique('repeated')); // False
