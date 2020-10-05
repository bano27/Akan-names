var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var century = parseInt(document.getElementById("century").value);
  var date0fbirth = new Date(year + "/" + month + "/" + day);
  var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  var gender = document.getElementById("gender");

if (document.getElementById("gender").checked) {
    var gender = 'male';
  }
  else {
    var gender = 'female';
  }
  if (day <= 0 || day > 31) {
    alert("invalid date");
  }
  else if (month <= 0 || month > 12) {
    alert("invalid month");
  }
  else if (month == 2 && day > 29) {
    alert("invalid day of month")
  }
  else if (Math.round(result) == 0 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Sunday, your Akan Name is " + maleNames[0]);
  }
  else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Monday, your Akan Name is " + maleNames[1]);
  }
  else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Tuesday, your Akan Name is " + maleNames[2]);
  }
  else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Wednesday, your Akan Name is " + maleNames[3]);
  }
  else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Thursday, your Akan Name is " + maleNames[4]);
  }
  else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Friday, your Akan Name is " + maleNames[5]);
  }
  else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'male') {
    document.getElementById("display"); alert("You were born on Saturday, your Akan Name is " + maleNames[6]);
  }
  else if (Math.round(result) == 0 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Sunday, your Akan name is " + femaleNames[0]);
  }
  else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Monday, your Akan Name is " + femaleNames[1]);
  }
  else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Tuesday, your Akan Name is " + femaleNames[2]);
  }
  else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Wednesday, your Akan Name is " + femaleNames[3]);
  }
  else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Thursday, your Akan Name is " + femaleNames[4]);
  }
  else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Friday, your Akan Name is " + femaleNames[5]);
  }
  else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'female') {
    document.getElementById("display"); alert("You were born on Saturday, your Akan Name is " + femaleNames[6]);
  }
  else {
    alert("please input valid fields");
  }

}
