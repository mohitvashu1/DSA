

// function SumOfN(n){
//     if(n===0){return 0}


// return n + SumOfN(n-1)
// }
// n=10
// console.log(SumOfN(n));


let arr=[10,1,2,5,4,3]
function SumOfN(n){
   

    if(n==0){return arr[0]}

    return arr[n]+ SumOfN(n-1)
    
}
let n =arr.length-1
console.log(SumOfN(n));