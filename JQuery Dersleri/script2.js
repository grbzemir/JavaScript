
//Prototype Tabanlı miras alma

let Person = function(name,yearOfBirth,job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}


Person.prototype.calculateAge = function()

{

    return 2024 - this.yearOfBirth;


}

let Teacher = function(name,yearOfBirth,job,subject)
{
    //Burda miras almış olmuyorsun!
    // this.name = name;
    // this.yearOfBirth = yearOfBirth;
    // this.job = job;
    Person.call(this,name,yearOfBirth,job); //Bu şekilde miras alıyoruz.
    this.subject = subject;

}

//Inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);


console.log(Teacher.prototype.constructor); //Person

// Set Teacher constructor

Teacher.prototype.constructor = Teacher;



let aylin = new Teacher("aylin" , 2003 , "Software Engineer","Math");

console.log(aylin);
console.log(aylin.calculateAge());
console.log(aylin.name);
console.log(aylin.subject);
console.log(aylin.job);
console.log(aylin.yearOfBirth);
