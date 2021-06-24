// Exo-1

function sortLetters(str){
    return str.split('').sort().join('');
}
// console.log(sortLetters("konexio"));

// Exo-2

// let temp = "Welcome to W3Docs";
// let count = (temp.match(/to/g) || []).length;
// console.log(count);

let temp = "xxxooox";
let count = temp.match(/is/g);
console.log(count);