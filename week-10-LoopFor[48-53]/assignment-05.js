let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let arr = [];

for (let i = +false; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter)) continue;
  arr.push(friends[i]);
}

for (let i = +false; i < arr.length; i++) {
  console.log(`${i + 1} => ${arr[i]}`);
}
// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
