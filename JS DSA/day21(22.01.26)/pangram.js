
let sentence= "thequickbrownfoxjumpsoverthelazydog"
let check="abcdefghijklmnopqrstuvwxyz"
let set = new Set(sentence);
let isPangram = true;

for (const element of check) {
    if (!set.has(element)) {
        isPangram = false;
        break;
    }
}

console.log(isPangram);
    
