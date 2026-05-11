// let n = 4
// let result = 2**n
// console.log(result);



// function isPowerOfTwo(n){
//     if(n!==2**x){return false }

// }

// let num = 3;

// for(let i = 0; i<=31; i++){
//     let x =Math.pow(2,i)
//     if(n==x){
//         console.log("true");
//     }else {console.log("false");}

// }

// let sqrtOfn= Math.pow(num,0.5)
// console.log(sqrtOfn);
// let n=Math.floor(sqrtOfn)
                                                   
// let orn= Math.pow(2,n)
// if(orn==num){
//     console.log("true");
// }else{console.log("false");}


function isPowerOfTwo(n){
if(n===1){return true};
if(n<=0||n%2!=0){return false}

return isPowerOfTwo(n/2)

}
console.log(isPowerOfTwo(16));

