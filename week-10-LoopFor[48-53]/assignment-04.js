let index = 10;
let jump = 2;

for (;;) {
  if (index < jump * jump) break;
  console.log(index);
  index -= jump;
}
