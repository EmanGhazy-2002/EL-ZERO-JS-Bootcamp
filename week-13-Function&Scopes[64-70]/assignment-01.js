function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    const [first, second] = zName.split(" ");
    return `${first} ${second[0]}.`;
  }
  function ageWithMessage(zAge) {
    const age = parseInt(zAge);
    return `Your Age Is ${age}`;
  }
  function countryTwoLetters(zCountry) {
    const country = zCountry.slice(0, 2);
    return `You Live In ${country.toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)},${ageWithMessage(
      zAge
    )},${countryTwoLetters(zCountry)}.`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
