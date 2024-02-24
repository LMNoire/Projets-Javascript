/*Init const date, day, month and year by getting id elements from HTML*/
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

/*Init today const with new date*/
const today = new Date();

/*Init weekDays and allMonths const*/
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*Call time functions and display them into HTML*/
date.innerHTML =  (today.getDate() < 10 ?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

