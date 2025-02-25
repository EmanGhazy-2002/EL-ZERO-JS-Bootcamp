function checkStatus(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? "Available" : "Not Available"
    } For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
