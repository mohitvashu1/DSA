

//1.usling Loop

function GCD(a,b){
    while(b!==0){
        let r=a%b
        a=b
        b=r
    }
    return a;

}
console.log(GCD(105,33));

//2. using recursion

function gcd(a,b){
    if(b===0){return a}

    return gcd(b,a%b)

}
console.log(gcd(105,33));