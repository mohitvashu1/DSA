let arr=[10,1,2,5,4,3]
function SumOfOdd(n){
   
let isOdd =((arr[n] %2) != 0);
    if(n==0){return isOdd ? arr[n] : 0;}
    

    return  ((isOdd ? arr[n] : 0) + SumOfOdd(n-1))
    
}
let n =arr.length-1
console.log(SumOfOdd(n));
