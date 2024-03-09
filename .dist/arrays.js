
//Arrays

let names = ["Emir", "Eren", "Furkan Yalçin"];
let years = [1998, 1999, 2000];
let mix = ["Emir", "Eren", 1998, 1999, null, undefined, ["programlama", "futbol"]];

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);


//Get array item 

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


//Set array item

names[2] = "Yetkin";
console.log(names);
names[names.length]="mehmet"
console.log(names);

//Add item - Sonuna ekleme

names.push("Doğukan");
console.log(names);

//Add item to the beginning - Başına ekleme

names.unshift("Levent");
console.log(names);

// remove item

//son elemanı siler
years.pop();
console.log(years);

// ilk elemanı silen

years.shift();
console.log(years);

// indexof

let index = names.indexOf("Eren");
console.log("index:" + index);

//Ters çevirme
names.reverse();
console.log(names);

years.sort();
console.log(years);

names.sort();
console.log(names);

//Concat

let veri = names.concat(years);
console.log(veri);

//2. diziden başla hiçbir şey silme ve furkanı ekle
names.splice(2,0,"Belinay");
console.log(names);

//2. diziden başla 1 tane sil ve furkanı ekle
names.splice(2,1,"Selin");
console.log(names);

//Array sıralama
years.sort(function(a,b){return a-b});
console.log(years);






