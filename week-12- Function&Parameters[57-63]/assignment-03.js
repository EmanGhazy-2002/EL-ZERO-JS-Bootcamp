function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge} Years`);
    console.log(`${Math.round((theAge * 365) / 7)} weeks`);
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 365} days`);
    console.log(`${theAge * 365 * 24} Hours`);
    console.log(`${theAge * 365 * 24 * 60} minutes`);
    console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
