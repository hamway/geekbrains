/* Task 2 */

var string = process.argv[2];
var offset = process.argv[3];

var secretString = "abcdefghijklmnopqrstuvwxyz";

var movedSecretString = secretString;


movedSecretString = movedSecretString.split("");

for (var key=0; key < offset; key++) {
    index = movedSecretString.shift();
    movedSecretString.push(index);
}

movedSecretString = movedSecretString.join("");



function replacerU(match, p) {
 var index = secretString.indexOf(match.toLowerCase());
 var char = movedSecretString[index];
 return char.toUpperCase();
}

function replacer(match, p) {
    var index = secretString.indexOf(match);
    var char = movedSecretString[index];
    return char;
   }

console.log(string.replace(/[a-z]/g, replacer).replace(/[A-Z]/g, replacerU));
