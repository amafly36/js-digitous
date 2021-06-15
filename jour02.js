/* Exo-1 */
var integer = 102;
var float = 13.9;

console.log(integer);
console.log(float);

/* Exo-2 */

var basic = 34;
console.log(basic);
console.log(basic.length);

basic = basic.toString();
console.log(basic.length);

/* Exo-3 */
var num = 1.5;
var rounded = num
console.log(Math.round(num));

/* Exo-4 */
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);


/* Exo-5 */
var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test == bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);

/* Exo-6 */
var limit = 50;
var score = 64;

if (score >= limit ) {
    console.log("Ok good")
} else {
    console.log("Oh nooo...")
}

/* Exo-7 */
var password = "azer";
if (password.length > 5) {
    console.log("The password is secure")
} 

/* Exo-8 */

var limit = 50;
var score = 4;

if (score >= limit && password.length > 5 ) {
    console.log("Everything is good")
}else if (score >= limit || password.length > 5) {
    console.log("Something is good") 
}else {
    console.log("Nothing is good")
}

/* Bonus-1 */
var random = Math.random() * 6 
if (random = 6) {
    console.log("Yes I win !")
}else {
    console.log("So close...")
}

var random = Math.random() * 6 
if (random === 6) {
    console.log("Yes I win !")
}else {
    console.log("So close...")
}

/* Bonus-2 */

var month = "mars";
if (month = "January"){
    console.log("Winter")
}else if (month = "mars"){
    console.log("Spring")
}



