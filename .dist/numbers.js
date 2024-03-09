
// numbers 

let veri;

// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.5");
// veri = parseInt("5c");
// veri = parseInt("c5");
// veri = isNaN("c5");

//Soldan itibaren 4 basamak ver
var sayi = 14.424242;
veri = sayi.toPrecision(4);
//virgülden sonra 2 tane basamak verir
veri = sayi.toFixed(2);

veri = Math.PI;
//Aşagı yakınsa aşaggıya yukarıya yakınsa yukarıya yuvarlanır
veri = Math.round(2.4);
veri = Math.round(3.2);
veri = Math.ceil(5.4); //Yukarı yuvarlar
veri = Math.floor(28.4); //Aşağı yuvarlar
veri = Math.sqrt(16); //Karekök
veri = Math.pow(2,4); //2 üzeri 4
veri = Math.abs(-100); //Mutlak değer
veri = Math.min(1,2,3,4,5,6,7,8,9);
veri = Math.max(1,2,3,4,5,6,7,8,9);
veri = Math.floor(Math.random()*10); //0 ile 1 arasında rastgele sayı üretir

console.log(veri);
console.log(typeof veri);