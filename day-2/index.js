// Challenge 1
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date();
// console.log('Today is: '+ weekday[today.getUTCDay()]);
// console.log('Current time is: '+ today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());

// Challenge 2
function printPage() {
    window.print();
}

// Challenge 3
function getTodaysDate(format = 'mm-dd-yyyy') {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    let output = month + '-' + day + '-' + year;

    if (format === 'mm/dd/yyyy')  {
        output = month + '/' + day + '/' + year;
    }
    
    if (format === 'dd-mm-yyyy') {
        output = day + '-' + month + '-' + year;
    }

    if (format === 'dd/mm/yyyy') {
        output = day + '/' + month + '/' + year;
    }

    return  output;
}

console.log(getTodayDate('dd/mm/yyyy'));