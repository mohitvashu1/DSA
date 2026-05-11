//  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","y","z",];

// let sentence = "thequickbrownfoxjumpsoverthelazydog"

// var checkIfPangram = function() {
//     for(let i=0;i<alphabet.length;i++){
//         if(!sentence.includes(alphabet[i])){
//     return false
// }
//     }
// return true;
// }

// console.log(checkIfPangram());

// //1832


let sentence = "thequickbrownfoxjumpsoverthelazydog"

var checkIfPangram = function() {
     return new Set(sentence).size === 26;
}
console.log(checkIfPangram());

