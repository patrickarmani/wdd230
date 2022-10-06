// day names array
const daynames = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
 ];
 
 // Long month names array
 const months = [
     "January",
     "February",
     "March",
     "Abril",
     "May",
     "June",
     "july",
     "August",
     "September",
     "October",
     "November",
     "December",
 ];
 const todaysdate = new Date();
 const dayName = daynames[todaysdate.getDay()];
 const monthName = months[todaysdate.getMonth()];
 const year = todaysdate.getFullYear();
 
 document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US');