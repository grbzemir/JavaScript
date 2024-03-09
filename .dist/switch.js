
//Switch

// let islem = 6;

// switch(islem)

// {
//     case 1:
//         console.log("işlem 1");
//         break;

//     case 2:
//         console.log("işlem 2");
//         break;

//     case 3:
//         console.log("işlem 3");
//         break;

//         default:
//             console.log("Geçersiz işlem");
//             break;
// }



// let day;

// switch(new Date().getDay()+2)

//  {
//     case 0:
//         day = "Pazar";
//         break;
//     case 1:
//         day = "Pazartesi";
//         break;
//     case 2:
//         day = "Sali";
//         break;
//     case 3:
//         day = "Çarşamba";
//         break;
//     case 4:
//         day = "Perşembe";
//         break;
//     case 5:
//         day = "Cuma";
//         break;
//     case 6:
//         day = "Cumartesi";
//         break;
//  }

//  console.log(`Bugün günlerden ${day}`);


let hour = 16;

switch (true) {

    case hour >= 6 && hour < 12:
        console.log("Günaydin");
        break;

    case hour >= 13 && hour < 17:
        console.log("İyi günler");
        break;

    case hour >= 18 && hour < 24:
        console.log("İyi akşamlar");
        break;

    default:
        console.log("Geçersiz saat");
        break;
}

