let s = "A man, a plan, a canal: Panama"
var isPalindrome = function() {
 let NewS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

let left =0
let right=NewS.length-1

while(left<right){
     if (NewS[left] !== NewS[right]){return false}
right--;
left++;
}
return true
}

console.log(isPalindrome());







