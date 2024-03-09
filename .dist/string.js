//Strings

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
let hobbies = 'music, formula 1, sports';

let veri;
veri = firstName + " " + lastName;
veri = "Emir";
veri +="Gürbüz";

veri = "Benim adim " + firstName + " ve yaşim " + age + " dir";

veri = firstName.concat(" ",lastName);

//Küçük Harf
veri = firstName.toLowerCase();

//Büyük Harf
veri = firstName.toUpperCase();

//Harfler üzerinden sıralı olanları alma
// veri = veri.substring(3,7);

//1. indexten 8. indexe kadar olanları alma
// veri = veri.slice(1,8);

//index - karakter arama işlemleri
// veri = veri.indexOf("G");

//Değiştime işlemleri
veri = veri.replace('Levent ' , 'Emir ');

//uzunluk

veri = veri.length;

//Virgüller ile kullandığım için öyle ayırdım kullanmasaydım gerek yoktu
veri = hobbies.split(',');




console.log(veri);
console.log(typeof veri);
