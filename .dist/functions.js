
Fonksiyonlar



function merhaba()

{

    console.log("ESELLAMİN ALEYKÜM GARDAŞ")

}


merhaba();
merhaba();
merhaba();


function merhaba(name,age,surname)
{

    console.log(`index: ${name} Yas: ${age} ${surname}`) ;
}

merhaba("Emir","Gürbüz",32);
merhaba("Burak",30,"Götdağ");
merhaba("Ahmet Miran","Baruthane",31);

function yasHesapla(dogumYili)
{
    return 2024 - dogumYili;

}

// console.log(yasHesapla(2003));

 let ageSamet = yasHesapla(1990);
 let ageEmir = yasHesapla(2001);
 let ageCagla = yasHesapla(205);

 console.log(ageSamet);
 console.log(ageMehmet);
 console.log(ageCagla);

  function ehliyetAlabilmeDurumu(dogumYili,isim)

  {
    let yas = yasHesapla(dogumYili);
    let ehliyet= 18 - yas;

  

  if (ehliyet>0)
  {
    console.log(`index: ${isim} ehliyet alabilmenize ${ehliyet} yil kaldi`);

  }

  else
  {

    console.log("Ehliyet alabilirsiniiz:");

  }

}



  ehliyetAlabilmeDurumu(1990,"Esra");
  ehliyetAlabilmeDurumu(2003,"Nehir");






