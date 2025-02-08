// function itsMe() {
//   return `Iam A Normal Function`;
// }
const itsMe = () => `Iam A Normal Function`; // Iam A Normal Function

console.log(itsMe());

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
const urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate("https", "elzero", "org"));
