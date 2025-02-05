let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (friends.length >= index) {
  if (typeof friends[index] !== "string" || friends[index].startsWith("A")) {
    index++;
    continue;
  }
  counter++;
  console.log(`${counter} => ${friends[index]}`);
  index++;
}

// Output
("1 => Sayed");
("2 => Mahmoud");
