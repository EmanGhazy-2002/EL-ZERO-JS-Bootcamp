function createSelectBox(startYear, endYear) {
  // Your Code Here
  let result = "<select>";
  for (let i = startYear; i <= endYear; i++) {
    result += `<option value="${i}">${i}</option>`;
  }
  result += "</select>";
  document.body.innerHTML = result;

  console.log(result);
}
createSelectBox(2000, 2021);
