

//scope

//Değişkenin nerede var olduğunu gösteriri blok dışında da calısabiliyor mu değişkenler

//Global Scope - Program içerisinde fonksiyonların dışında tanımlanan ve her yerden erişilebilen scope tipidir
//Function Scope
//Bloke Scope



var veri1 = 5; //Global Scope
let veri2 = 10;
const veri3 = 15;

function fonskiyon()
{
    var veri1 = 30;
    let veri2 = 40;
    const veri3 = 50;

    console.log(veri1,veri2,veri3);

}

fonskiyon();

console.log(veri1);
console.log(veri2);
console.log(veri3);


//Blok scope


if(true)
{
    var veri1 = 30;
    let veri2 = 40; //blok dışında görev sürdüremez bu
    const veri3 = 50;

    console.log(veri1 , veri2 , veri3);

}

console.log(veri1 , veri2 , veri3);

// console.log(a);
// console.log(b);  
// console.log(c);

let admin_password = "1212132142";



if(true)
{

    let admin_passwordclear = "2323424";

}

console.log(admin_password);
