

  function countDigit(n){


    if(n==0) return 1  // when n= 0
    n= Math.abs(n) //When n is in negative

    let count=0
while(n>0){
    n=Math.floor(n/10)
 
    count++;

   
} return count;

  }
    
  console.log(countDigit(-10));