let readlineSync = require('readline-sync');
var userName = readlineSync.question('WOAH! Who are you!? ');
console.log('Hi ' + userName + '!' + ' ' + 'My'+ ' ' + 'Name' + ' ' + 'is' + ' ' + 'Steven' + '!' );

console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: Eat a snack, defeat the evil gems, play with friends" );
switch(option) {
  case "Eat a snack":
    console.log( "COOOKIE CAAAAT" );
    break;
  case "defeat the evil gems":
    console.log( " If youre evil, and youre on the rise You can count on the four of us taking you down Cause were good and evil never beats us Well win the fight and then go out for pizzas " );
    break;
  case "play with friends":
    console.log( " Right on! lets find Connie!" );
    break;
  default: 
    console.log( "Gets out of bed and runs downstairs" );
    console.log( "AWH YEAH!");
}

var favShow = readlineSync.question('Whats your favorite TV show? ', {
   
});
console.log('Oh' + ' ' + 'wow!'  + ' ' + userName + ' loves ' + ' ' + favShow + ' ' + 'too?!' + ' ');

console.log ( " Man I'm sleepy! Lets go back to bed ")

var favsong = readlineSync.question('Know any sleepy tunes? ', {
  
});
console.log( 'yes' + ' ' + favsong + ' ' + 'sounds' + ' ' + 'great' + ' ' + 'Goodnight!' );