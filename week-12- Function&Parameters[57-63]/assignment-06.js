function multiply(...obj) {
  let result = 1;
  for (let i = 0; i <= obj.length; i++) {
    if (typeof obj[i] === "number" || typeof obj[i] === "float") {
      result *= parseInt(obj[i]);
    } else {
      continue;
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
