// Challenge 1
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();
console.log('Today is: '+ weekday[today.getUTCDay()]);
console.log('Current time is: '+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());