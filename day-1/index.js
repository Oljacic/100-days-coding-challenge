// First day: recursion
// Write a JavaScript program to calculate the factorial of a number
const factorial = (value) => {
    if(value === 1) {
        return 1;
    } else {
        return value * factorial(value - 1);
    }
}


const result = (inputNumber) => {
    const result = factorial(inputNumber);
    document.getElementById('result').innerHTML = result; 
} 