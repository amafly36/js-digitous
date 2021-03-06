// ## 01 - File System
 
var fs = require("fs");
const { cpuUsage } = require("process");
 
fs.readFile("jour7.txt", function (err, data) {
   if (err) {
      console.error(err);
      return;
   }
   // console.log(data.toString());
});
 
 
//  02 - Map Double
 
var array = [1, 2, 3, 4, 5];
 
var double = array.map(function(num){
   return num * 2;
});
 
// console.log(double);
 
 
// 03 - Map Names
 
var longNames = [
   {
       firstName: "Jane",
       lastName: "Doe"
   },
   {
       firstName: "John",
       lastName: "Smith"
   }
];
 var shortNames = longNames.map(function (name) {
   var name =  {
       name: `${name.firstName} ${name.lastName}`,
   };
   return name
});
console.log(shortNames);
 
 
 
 
//   04 - Filter Numbers
 
// var array = [1, "toto", 34, "javascript", 8];
// var numbers = array.filter(item => {
//     return !isNaN(item);
// } )
// console.log(numbers);
 
 
 
// 05 - Filter Even
 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter();
