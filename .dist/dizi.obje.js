

//dizi ve objelerde kullanım

 let citys= ["istanbul","Ankara","izmir","Eskişehir"]

 let users=[
    {firstName:"Asli", lastName:"Yilmaz"},
    {firstName:"Emir", lastName:"Gürbüz"},
    {firstName:"Rana", lastName:"Sevinç"},
    {firstName:"Berra", lastName:"Demirağ"},
    {firstName:"Dolphine emre", lastName:"Yener"},
    
 ]

// //arrays;

// let i;

// for(i=0;i<citys.length;i++)

// {

//     console.log(citys[i]);

// }

// for in metodu

//  for(let i in citys)

//  {

//     console.log(`index: ${i} value: ${citys[i]}`);

//  }

 citys.forEach(function(item){
    console.log(item);

 })

 let i;

 for(i=0; i<users.length;i++)

 {

    console.log(users[i].firstName);
    // console.log(users[i].lastName);


 }

 for(let i in users)

 {
    console.log(`index: ${i} value: ${users[i].firstName}`)
 }

  
 //Dizilerde map metodunun kullanimi

 let veri = users.map(function(item)
 {

    return item.firstName + "" + item.lastName
 });

 console.log(veri)

 let numbers = [1,2,4,6,7,12];

 let num = numbers.map(function(n)
 {
    return n*n;
 });

 console.log(num);

