

//Object.create


let personProto = {

    calculateAge: function()
    {
        return 2024 - this.yearOfBirth;
    }
}

let kaan = Object.create(personProto);

kaan.name = "kaan";
kaan.yearOfBirth = 1991;
kaan.job = "teacher";

let aylin = Object.create(personProto ,
{

    name : {value: "aylin"},
    yearOfBirth : {value: 2003},
    job : {value: "Software Engineer"},

});

console.log(kaan);
console.log(kaan.calculateAge());

console.log(aylin);
console.log(aylin.calculateAge());
