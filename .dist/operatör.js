

let veri;
const a=20;
const b=10;
const c=5;
let d = 10;


// 1.Arithmetic Operators

veri = a+b;
veri = a-b;
veri = a*b;
veri = a/b;
//veri = a++;  //Sabitlerin değeri değişmez
veri = d++;
veri = ++d;
veri = --d;
veri = a%b;

//2.Atama operatörleri

veri = a;
veri +=a;
veri -=a;
veri *=a;
veri /=a;
veri %=a;

//3.Karşılaştırma operatörleri

veri = a==b; // birbirine eşit mi ?
veri = b===c; // birbirine eşit mi ve türleri de eşit mi ?
veri = b==c;
veri = 5==="5"; // false
veri = 5=="5"; // true
veri = a!=b; // birbirine eşit değil mi ? true
veri = a!==b; // birbirine eşit değil mi ve türleri de eşit değil mi ? true
veri = a>b;
veri = b<c;
veri = 5 >= 5; //true
veri = b <= c; // false


//4.Mantıksal operatörler

// && (And) operatörü

veri = (a>b) && (a>c); // true
veri = (b>a) || (a>c); // true ikisinden biri doğru oldugu için true

// ! (Not) operatörü

veri = !(a>b); // false
veri = !(a<c); // true


console.log(veri);
console.log(typeof veri);


