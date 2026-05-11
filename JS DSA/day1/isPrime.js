 function isPrime(x){
    for(let i=2 ;i<=x-1;i++ ){
        if(x%i==0){
            return "Not Prime Number"
        }else{return "Prime Number"}
    }

 }
 console.log(isPrime(11));;