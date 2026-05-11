let num = [1231];
    
function Palindrome(){
  let rev = 0
    while(num>0){
       let rem=num%10
        rev = (10*rev)+rem
        num = Math.floor(num / 10);

         
    }

  return rev
}

console.log(Palindrome());
