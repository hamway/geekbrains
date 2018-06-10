var string = process.argv[2];
var offset = process.argv[3];

function replacer(match, p) {
 var index = match.charCodeAt(0);

 index = index + 3;

 return String.fromCharCode(index);
}

console.log(string.replace(/[a-z]/g, replacer).replace(/[A-Z]/g, replacer));