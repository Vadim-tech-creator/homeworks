let number = 1; 
let years
if (number % 10 === 1 && number % 100 !== 11) {
    years = "рік"
} else if ((number % 10 >= 2 && number % 10 <= 4) && (number % 100 < 10 || number % 100 >= 20)) {
   years = "роки"
} else {
    years = "років"
}
console.log(`Вам ${number} ${years}`);
