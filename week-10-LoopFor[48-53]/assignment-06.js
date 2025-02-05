let start = 0;
let swappedName = "elZerO";
let swappedString = [];

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    swappedString.push(swappedName[i].toLowerCase());
  } else {
    swappedString.push(swappedName[i].toUpperCase());
  }
}
console.log(swappedString.join(""));
