

//Object literals 

//birden fazla işlemi her biri içi ayrı ayrı yapmak yerine object literals ile yaparız

// let firstName = "Emir";
// let lastName = "Gürbüz";

// let firstName2 = "Emir";
// let lastName2= "Gürbüz";


// let levent = ["Levent","Ertunalilar",37,];
// let esra = ["Esra","Ertunalilar",37,];

let veri;

let user =  {
    userName: "leventert",
    firstName: "Levent",
    lastName: "Ertunalilar",
    age: 37,
    hobbies: ["spor","müzik","sinema"],
    address: 
    {
        city: "İstanbul",
        country: "Türkiye",
        phone: "34234254235",

    }
}

veri = user;

veri = user.userName;
veri = user.firstName;
veri = user.lastName;
veri = user.age;
veri = user.hobbies.length;
veri = user.address.city;
veri = user.address.phone;

console.log(veri);
console.log(typeof user);