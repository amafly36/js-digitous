/* Exo-01 */

let cat = {
    name: "Grafield",
    age: "10",
    isCute: "true",
}
console.log(cat);
console.log(cat["age"]);

if(isCute = "true"){
    console.log("So cute !");
}

/* Exo-02 */

let cat2 = {
    name: "Amadou",
    age: "3",
    isCute: "false",
}
let cats = [cat, cat2]
console.log(cats);
console.log(cats[0].age);
console.log(cats[1].isCute);

/* Exo-03 */

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    }else console.log("Odd");
}
checkIfEven(13);

/* Exo-4 */

function compare(num1, num2) {
    if (num1 > num2) {
        console.log("is bigger");
    }else if (num2 > num1) {
        console.log("is bigger");
    }else {
        console.log("both are the same");
    }
    
}
compare(10, 5);
compare(5, 2);
compare(5, 5);

// Exo-5

function addUp(num) {
    var total = 0;
    for (i = 1; i <= num; i++) {
        total = total + i
    } return total;
}

console.log(addUp(12));

/* Exo-6 */

function format(num) {
    console.log(Math.floor(num / 3600));
    console.log(num % 3600);
    console.log(Math.floor(num % 3600 / 60));

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floors(restHours / 60);
    var secondes = restHours % 60;
    console.log('$(hours) : $(minutes) : $(secondes)');
}














 
















