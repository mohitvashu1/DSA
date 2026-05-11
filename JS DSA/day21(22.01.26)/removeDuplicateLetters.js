 let s = "bcabc" 

var removeDuplicateLetters = function() {
    let set = new Set();
    for (const element of s) {
        set.add(element)
        
    }
    return [...set].join("")
    
};
console.log(removeDuplicateLetters());