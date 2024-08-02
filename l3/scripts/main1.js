let year = 2000;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Рік високосний");
} else {
    console.log("Рік не є високосним");
}