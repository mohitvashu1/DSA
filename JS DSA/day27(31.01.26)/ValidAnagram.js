let  s = "anagram";
let  t = "nagaram";



var isAnagram = function() {
      if (s.length !== t.length) {
        return false;
    }

let sHash={}
for (const char of s) {
    sHash[char]=(sHash[char]||0)+1
}

let tHash={}
for (const char of t) {
    tHash[char]=(tHash[char]||0)+1
}

for(const keys in sHash ){
    if(sHash[keys]!==tHash[keys]){
        return false
    }
}
return true;
    
};

console.log(isAnagram());