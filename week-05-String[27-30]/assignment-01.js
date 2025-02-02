let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.slice(0,1).toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.substring(0,1).toLocaleLowerCase()); // e
console.log(userName.slice(-6, -5).toLocaleLowerCase()); // e
console.log(userName.split("l")[0].toLocaleLowerCase().repeat(3));//eee