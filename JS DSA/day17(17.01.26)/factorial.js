function Factorial(x){
     //Base case
    if(x===1||x===0){
        return 1;
    }

    //Recursive case

    return x *Factorial(x-1)
}

console.log(Factorial(5));

