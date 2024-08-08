let height = prompt("Введіть висоту ялинки");
height = Number(height)
let tree = ""
for (let i = 1; i <= height; i++) {
    for (let n = 0; n < height - i; n++) {
        tree += " ";
    }
    for (let k = 0; k < (2 * i - 1); k++) {
        tree += "*";
    }
        tree += " ";
}
console.log(tree);