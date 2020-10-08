function myForm(){ 
var birthday = document.getElementById("inputdate").value;
var FemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var gender = document.querySelector('input[name = "Gender"]: checked').value;
var dayOfWeek = birthday.getDay();
if(radMale.checked === True){document.getElementById("display").innerHTML = "Hello! You were born on" + days[dayOfWeek] + "and your Akan Name is" + MaleNames[dayOfWeek];}
else {document.getElementById("display").innerHTML = "Hello! You were born on" + days[dayOfWeek] + "and your Akan Name is" + FemaleNames[dayOfWeek];}
}
