const isUnique = (unique) => {
  const count = [];
  for (let i = 0; i < unique.length; i += 1) {
    if (count.includes(unique[i])) {
      return false;
    }
    count.push(unique[i]);
  }
  return true;
};

// Test Cases
console.log(isUnique('abcdefghi')); // True
console.log(isUnique('repeated')); // False
