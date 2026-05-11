let str= "javascript";

function countVowels(){
    let count= 0
    let vowels="aeiou"
   for (const element of str) {
   if(vowels.includes(element)){
        count++
   }
    
    

   } return count
    }


console.log(countVowels());