

//Koşullu durumlar ( if else)

const firstName = "Çağla";
const userName = "caglayilmaz";
const age = 25;
const isStudent = true;
const school = "YTU";


if(userName == "caglayilmaz")
 
{
    console.log("Kullanici adi doğru");
}


else 

{
    console.log("Kullanici adi yanliş");
}

//  if(age === 25)
//  {
//      console.log("Yaş doğru");
//  }


 if(isStudent === false)

 {
        console.log("Hangi Bölümde Okuyorsun");

 }

 else 
 {
        console.log("Hangi Mesleği Yapiyorsun");
 }

  
  if(school === "YTU")
  {
      console.log("Okulunuz doğru");
  }


  if(age >= 18)
  {
    if(school === "YTU")
    {
        console.log("Ehliyet alabilirsiniz");
      
   }

   else 

   {

  console.log("Ehliyet aalamazsiniz");

    }

  }

  let id = 1232424242;

  if(typeof id !== "undefined")
  {
      console.log("ID var");
  }

  else 

    {
        console.log("ID yok");
    }