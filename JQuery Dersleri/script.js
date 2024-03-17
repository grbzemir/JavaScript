// Bundan dolayı yapıcı (Constructor) metotlar, nesne oluşturma sırasında
// sınıfımızın içerisindeki değişkenlerimize değer atamak için kullanılır.


// let Kaan = {

//   name: 'Kaan',
//   yearOfBirth: 1991,
//   job: 'teacher',

// }

// val = Kaan;
// console.log(val);
// console.log(typeof val);

function Student(name, yearOfBirth, job)
{

  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function()
  {
    return 2024 - this.yearOfBirth;
  }

  console.log(this);

  }

  let Student = Function(name, yearOfBirth, job)
  {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //Console.log(this);
    this.calculateAge = function()
    
    {
      
        return 2024 - this.yearOfBirth;
    
    }


  }

  let Kaan = new Student('Kaan', 1991, 'teacher');
  let aylin = new Student('Aylin', 1993, 'Star');

    console.log(Kaan.name);
    console.log(Kaan.job);
    console.log(Kaan.yearOfBirth);
    console.log(Kaan.calculateAge());
    
    console.log("-------------------");
    console.log(aylin.name);
    console.log(aylin.job)
    console.log(aylin.yearOfBirth);
    console.log(aylin.calculateAge());