
 
// Date Object

let zaman = new Date();
let birthday = new Date(2003,1,6);


//Set methods

zaman.setDate(15);
zaman.setMonth(3);
//zaman.setFullYear(2024);
zaman.setHours(12);
zaman.setMinutes(15);
zaman.setSeconds(30);

//Get methods
console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getDay());
console.log(zaman.getFullYear());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());


console.log(zaman.getFullYear() - birthday.getFullYear());

console.log(zaman);
console.log(typeof zaman);