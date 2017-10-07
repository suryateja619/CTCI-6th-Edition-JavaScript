const isUnique = (unique) => {
  const count = [];
  for (let i = 0; i < unique.length; i += 1) {
    const pos = unique.charAt(i);
    if (count.includes(pos)) {
      return false;
    }
    count.push(pos);
  }
  return true;
};

// Test Cases
console.log(isUnique('abcdefghi')); // True
console.log(isUnique('repeated')); // False
