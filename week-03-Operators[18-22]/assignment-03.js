let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num * num.length); // 20

// Solution Three
console.log(num * 0x02); // 20

// Solution Four
console.log(++num + --num - true); // 20