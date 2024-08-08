let number = 4
let prostoe = true
if (number === 1) {
    console.log("Це число не є простим та складеним");
} else if (number === 2) {
    prostoe = true
} else{
    for (let i = 2; i < number; i++) {
        if(number % 2) {
        prostoe = false
        break;
        }
    }
}
    if (prostoe) {
        console.log(`Число ${number} є простим числом`);  
    } else {
        console.log(`Число ${number} є складеним числом.`);
        
    }
