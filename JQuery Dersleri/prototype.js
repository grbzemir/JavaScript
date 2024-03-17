
//prototype

let Person = function(name,yearOfBirth,job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}


 let aylin = new Person("aylin" , 2003 , "Software Engineer");
 let kaan = new Person("kaan" , 1991 , "teacher");

 Person.prototype.calculateAge = function()
 {
    this.calculateAge = function()

    {
        
        return 2024 - this.yearOfBirth;

    }

 }

 Person.prototype.getName = function()
 {
    return this.name;
 }

 console.log(aylin.calculateAge());
 console.log(aylin);
 console.log(aylin.getName());

 console.log("--------------------");
 
 console.log(kaan.calculateAge());
 console.log(kaan);
 console.log(kaan.getName());