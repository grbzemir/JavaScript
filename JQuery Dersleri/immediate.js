
//İmmediate Functions - tek seferlik calısan!

// function welcome() {

//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var today = new Date();
//     var msg = 'Welcome to our site! Happy ' + days[today.getDay()] + '!';
//     return msg;

// }


console.log(welcome());

(function(){

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();
    var msg = 'Welcome to our site! Happy ' + days[today.getDay()] + '!';
    console.log(msg);


}());