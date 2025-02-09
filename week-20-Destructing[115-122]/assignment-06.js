let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

switch (chosen) {
  case 1:
    [
      {
        title,
        age,
        available,
        skills: [, s],
      },
    ] = myFriends;
    break;
  case 2:
    [
      ,
      {
        title,
        age,
        available,
        skills: [, s],
      },
    ] = myFriends;
    break;
  case 3:
    [
      ,
      ,
      {
        title,
        age,
        available,
        skills: [, s],
      },
    ] = myFriends;
    break;
}

console.log(
  `${title}\n${age}\n${available ? "Available" : "Not Available"}\n${s}`
);
